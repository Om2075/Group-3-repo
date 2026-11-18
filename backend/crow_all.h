#ifndef CROW_ALL_H
#define CROW_ALL_H

#include <iostream>
#include <string>
#include <vector>
#include <functional>
#include <sstream>
#include <thread>
#include <atomic>
#include <cstring>
#include <regex>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>
#include <signal.h>

namespace crow {

enum HTTPMethod {
    GET,
    POST,
    OPTIONS,
    PUT,
    DELETE
};

struct request {
    std::string raw_url;
    std::string url;
    HTTPMethod method;
    std::string body;
    std::string method_name;
};

struct response {
    int code = 200;
    std::string body;
    std::string content_type = "application/json";

    response() : code(200), body("") {}
    response(int c, const std::string& b) : code(c), body(b) {}
    response(const std::string& b) : code(200), body(b) {}
};

class DynamicRoute {
public:
    std::string pattern;
    std::regex regex_pattern;
    std::vector<HTTPMethod> accepted_methods = {GET};
    std::function<response(const request&, const std::vector<std::string>&)> handler;

    DynamicRoute& methods(HTTPMethod m) {
        accepted_methods.clear();
        accepted_methods.push_back(m);
        return *this;
    }

    DynamicRoute& methods(HTTPMethod m1, HTTPMethod m2) {
        accepted_methods.clear();
        accepted_methods.push_back(m1);
        accepted_methods.push_back(m2);
        return *this;
    }

    template<typename Func>
    void operator()(Func f) {
        if constexpr (std::is_invocable_r_v<response, Func>) {
            handler = [f](const request&, const std::vector<std::string>&) -> response {
                return f();
            };
        } else if constexpr (std::is_invocable_r_v<response, Func, const request&>) {
            handler = [f](const request& req, const std::vector<std::string>&) -> response {
                return f(req);
            };
        } else if constexpr (std::is_invocable_r_v<response, Func, const request&, std::string>) {
            handler = [f](const request& req, const std::vector<std::string>& args) -> response {
                std::string arg1 = args.empty() ? "" : args[0];
                return f(req, arg1);
            };
        }
    }
};

class SimpleApp {
public:
    std::vector<DynamicRoute*> routes;
    int server_port = 8080;
    std::atomic<bool> running{false};

    DynamicRoute& new_route(const std::string& path) {
        auto* r = new DynamicRoute();
        r->pattern = path;

        // Convert path like /api/items/<string> to regex
        std::string reg = "^" + path;
        size_t pos = 0;
        while ((pos = reg.find("<string>", pos)) != std::string::npos) {
            reg.replace(pos, 8, "([^/?]+)");
            pos += 9;
        }
        reg += "$";
        r->regex_pattern = std::regex(reg);

        routes.push_back(r);
        return *r;
    }

    SimpleApp& port(int p) {
        server_port = p;
        return *this;
    }

    SimpleApp& multithreaded() {
        return *this;
    }

    void run() {
        signal(SIGPIPE, SIG_IGN);

        int server_fd = socket(AF_INET, SOCK_STREAM, 0);
        if (server_fd < 0) {
            std::cerr << "Failed to create socket on port " << server_port << std::endl;
            return;
        }

        int opt = 1;
        setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));

        sockaddr_in address{};
        address.sin_family = AF_INET;
        address.sin_addr.s_addr = INADDR_ANY;
        address.sin_port = htons(server_port);

        if (bind(server_fd, (struct sockaddr*)&address, sizeof(address)) < 0) {
            std::cerr << "Bind failed on port " << server_port << std::endl;
            close(server_fd);
            return;
        }

        if (listen(server_fd, 50) < 0) {
            std::cerr << "Listen failed on port " << server_port << std::endl;
            close(server_fd);
            return;
        }

        std::cout << "[Crow/Try & Buy Server] Running on http://localhost:" << server_port << std::endl;
        running = true;

        while (running) {
            sockaddr_in client_addr{};
            socklen_t addrlen = sizeof(client_addr);
            int new_socket = accept(server_fd, (struct sockaddr*)&client_addr, &addrlen);
            if (new_socket < 0) continue;

            std::thread([this, new_socket]() {
                char buffer[65536] = {0};
                ssize_t bytes_read = read(new_socket, buffer, sizeof(buffer) - 1);
                if (bytes_read <= 0) {
                    close(new_socket);
                    return;
                }

                std::string req_str(buffer, bytes_read);
                std::istringstream stream(req_str);
                std::string method_str, path, protocol;
                stream >> method_str >> path >> protocol;

                HTTPMethod meth = GET;
                if (method_str == "POST") meth = POST;
                else if (method_str == "OPTIONS") meth = OPTIONS;

                // Handle preflight OPTIONS
                if (meth == OPTIONS) {
                    std::ostringstream ss;
                    ss << "HTTP/1.1 200 OK\r\n"
                       << "Access-Control-Allow-Origin: *\r\n"
                       << "Access-Control-Allow-Methods: GET, POST, OPTIONS\r\n"
                       << "Access-Control-Allow-Headers: Content-Type\r\n"
                       << "Content-Length: 0\r\n\r\n";
                    std::string res = ss.str();
                    send(new_socket, res.c_str(), res.size(), MSG_NOSIGNAL);
                    close(new_socket);
                    return;
                }

                // Extract body
                std::string body;
                size_t header_end = req_str.find("\r\n\r\n");
                if (header_end != std::string::npos) {
                    body = req_str.substr(header_end + 4);
                }

                request req;
                req.raw_url = path;
                req.url = path;
                req.method = meth;
                req.method_name = method_str;
                req.body = body;

                response res(404, "{\"error\": \"Not Found\"}");

                for (auto* r : routes) {
                    std::smatch match;
                    if (std::regex_match(path, match, r->regex_pattern)) {
                        bool method_ok = false;
                        for (auto m : r->accepted_methods) {
                            if (m == meth) { method_ok = true; break; }
                        }
                        if (method_ok && r->handler) {
                            std::vector<std::string> args;
                            for (size_t k = 1; k < match.size(); ++k) {
                                args.push_back(match[k].str());
                            }
                            res = r->handler(req, args);
                            break;
                        }
                    }
                }

                std::ostringstream ss;
                ss << "HTTP/1.1 " << res.code << " OK\r\n"
                   << "Content-Type: " << res.content_type << "\r\n"
                   << "Access-Control-Allow-Origin: *\r\n"
                   << "Access-Control-Allow-Methods: GET, POST, OPTIONS\r\n"
                   << "Access-Control-Allow-Headers: Content-Type\r\n"
                   << "Content-Length: " << res.body.size() << "\r\n"
                   << "\r\n"
                   << res.body;

                std::string output = ss.str();
                send(new_socket, output.c_str(), output.size(), MSG_NOSIGNAL);
                close(new_socket);
            }).detach();
        }

        close(server_fd);
    }
};

} // namespace crow

// Global user-defined string literal operator for Crow HTTP methods
constexpr crow::HTTPMethod operator"" _method(const char* str, size_t) {
    if (str[0] == 'P' && str[1] == 'O') return crow::POST;
    if (str[0] == 'G') return crow::GET;
    if (str[0] == 'O') return crow::OPTIONS;
    if (str[0] == 'P') return crow::PUT;
    return crow::DELETE;
}

#define CROW_ROUTE(app, url) app.new_route(url)

#endif // CROW_ALL_H
