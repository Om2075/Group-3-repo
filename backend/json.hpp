#ifndef NLOHMANN_JSON_HPP
#define NLOHMANN_JSON_HPP

#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <sstream>
#include <memory>
#include <iomanip>

namespace nlohmann {

class json {
public:
    enum class Type { Null, Boolean, Number, String, Array, Object };

    Type type = Type::Null;
    bool bool_val = false;
    double num_val = 0.0;
    std::string str_val;
    std::vector<json> arr_val;
    std::map<std::string, json> obj_val;

    json() : type(Type::Null) {}
    json(std::nullptr_t) : type(Type::Null) {}
    json(bool b) : type(Type::Boolean), bool_val(b) {}
    json(int n) : type(Type::Number), num_val(n) {}
    json(long n) : type(Type::Number), num_val(n) {}
    json(size_t n) : type(Type::Number), num_val(static_cast<double>(n)) {}
    json(double n) : type(Type::Number), num_val(n) {}
    json(const char* s) : type(Type::String), str_val(s ? s : "") {}
    json(const std::string& s) : type(Type::String), str_val(s) {}

    static json array() {
        json j;
        j.type = Type::Array;
        return j;
    }

    static json object() {
        json j;
        j.type = Type::Object;
        return j;
    }

    void push_back(const json& val) {
        if (type != Type::Array) {
            type = Type::Array;
            arr_val.clear();
        }
        arr_val.push_back(val);
    }

    json& operator[](const std::string& key) {
        if (type != Type::Object) {
            type = Type::Object;
            obj_val.clear();
        }
        return obj_val[key];
    }

    const json& operator[](const std::string& key) const {
        static json null_json;
        if (type != Type::Object) return null_json;
        auto it = obj_val.find(key);
        if (it != obj_val.end()) return it->second;
        return null_json;
    }

    json& operator[](size_t index) {
        if (type != Type::Array) {
            type = Type::Array;
            arr_val.clear();
        }
        if (index >= arr_val.size()) {
            arr_val.resize(index + 1);
        }
        return arr_val[index];
    }

    const json& operator[](size_t index) const {
        static json null_json;
        if (type != Type::Array || index >= arr_val.size()) return null_json;
        return arr_val[index];
    }

    bool contains(const std::string& key) const {
        if (type != Type::Object) return false;
        return obj_val.find(key) != obj_val.end();
    }

    bool is_array() const { return type == Type::Array; }
    bool is_object() const { return type == Type::Object; }
    bool is_number() const { return type == Type::Number; }
    bool is_string() const { return type == Type::String; }
    bool is_null() const { return type == Type::Null; }

    size_t size() const {
        if (type == Type::Array) return arr_val.size();
        if (type == Type::Object) return obj_val.size();
        return 0;
    }

    template<typename T>
    T get() const {
        if constexpr (std::is_same_v<T, int>) {
            return static_cast<int>(num_val);
        } else if constexpr (std::is_same_v<T, double>) {
            return num_val;
        } else if constexpr (std::is_same_v<T, std::string>) {
            return str_val;
        } else if constexpr (std::is_same_v<T, bool>) {
            return bool_val;
        } else if constexpr (std::is_same_v<T, std::vector<int>>) {
            std::vector<int> res;
            if (type == Type::Array) {
                for (const auto& item : arr_val) {
                    res.push_back(static_cast<int>(item.num_val));
                }
            }
            return res;
        }
        return T{};
    }

    std::string dump(int indent = -1) const {
        std::ostringstream ss;
        switch (type) {
            case Type::Null: ss << "null"; break;
            case Type::Boolean: ss << (bool_val ? "true" : "false"); break;
            case Type::Number: {
                if (num_val == static_cast<long long>(num_val)) {
                    ss << static_cast<long long>(num_val);
                } else {
                    ss << std::fixed << std::setprecision(2) << num_val;
                }
                break;
            }
            case Type::String: {
                ss << "\"";
                for (char c : str_val) {
                    if (c == '"') ss << "\\\"";
                    else if (c == '\\') ss << "\\\\";
                    else if (c == '\n') ss << "\\n";
                    else if (c == '\r') ss << "\\r";
                    else if (c == '\t') ss << "\\t";
                    else ss << c;
                }
                ss << "\"";
                break;
            }
            case Type::Array: {
                ss << "[";
                for (size_t i = 0; i < arr_val.size(); ++i) {
                    if (i > 0) ss << ",";
                    ss << arr_val[i].dump(indent);
                }
                ss << "]";
                break;
            }
            case Type::Object: {
                ss << "{";
                size_t i = 0;
                for (const auto& pair : obj_val) {
                    if (i > 0) ss << ",";
                    ss << "\"" << pair.first << "\":" << pair.second.dump(indent);
                    i++;
                }
                ss << "}";
                break;
            }
        }
        return ss.str();
    }

    static json parse(const std::string& str) {
        size_t idx = 0;
        return parse_val(str, idx);
    }

private:
    static void skip_ws(const std::string& str, size_t& idx) {
        while (idx < str.size() && (str[idx] == ' ' || str[idx] == '\t' || str[idx] == '\n' || str[idx] == '\r')) {
            idx++;
        }
    }

    static json parse_val(const std::string& str, size_t& idx) {
        skip_ws(str, idx);
        if (idx >= str.size()) return json();

        char c = str[idx];
        if (c == '{') return parse_obj(str, idx);
        if (c == '[') return parse_arr(str, idx);
        if (c == '"') return parse_str(str, idx);
        if (c == 't' || c == 'f') return parse_bool(str, idx);
        if (c == 'n') { idx += 4; return json(); }
        if (c == '-' || (c >= '0' && c <= '9')) return parse_num(str, idx);
        return json();
    }

    static json parse_obj(const std::string& str, size_t& idx) {
        json j = json::object();
        idx++; // skip '{'
        skip_ws(str, idx);
        if (idx < str.size() && str[idx] == '}') { idx++; return j; }

        while (idx < str.size()) {
            skip_ws(str, idx);
            if (str[idx] != '"') break;
            json key_j = parse_str(str, idx);
            std::string key = key_j.str_val;
            skip_ws(str, idx);
            if (idx < str.size() && str[idx] == ':') idx++;
            skip_ws(str, idx);
            json val = parse_val(str, idx);
            j[key] = val;
            skip_ws(str, idx);
            if (idx < str.size() && str[idx] == ',') { idx++; continue; }
            if (idx < str.size() && str[idx] == '}') { idx++; break; }
        }
        return j;
    }

    static json parse_arr(const std::string& str, size_t& idx) {
        json j = json::array();
        idx++; // skip '['
        skip_ws(str, idx);
        if (idx < str.size() && str[idx] == ']') { idx++; return j; }

        while (idx < str.size()) {
            json val = parse_val(str, idx);
            j.push_back(val);
            skip_ws(str, idx);
            if (idx < str.size() && str[idx] == ',') { idx++; continue; }
            if (idx < str.size() && str[idx] == ']') { idx++; break; }
        }
        return j;
    }

    static json parse_str(const std::string& str, size_t& idx) {
        idx++; // skip opening '"'
        std::string s;
        while (idx < str.size()) {
            char c = str[idx++];
            if (c == '"') break;
            if (c == '\\' && idx < str.size()) {
                char next = str[idx++];
                if (next == 'n') s += '\n';
                else if (next == 't') s += '\t';
                else if (next == 'r') s += '\r';
                else s += next;
            } else {
                s += c;
            }
        }
        return json(s);
    }

    static json parse_num(const std::string& str, size_t& idx) {
        size_t start = idx;
        while (idx < str.size() && (str[idx] == '-' || str[idx] == '+' || str[idx] == '.' || (str[idx] >= '0' && str[idx] <= '9') || str[idx] == 'e' || str[idx] == 'E')) {
            idx++;
        }
        double d = std::stod(str.substr(start, idx - start));
        return json(d);
    }

    static json parse_bool(const std::string& str, size_t& idx) {
        if (str.substr(idx, 4) == "true") { idx += 4; return json(true); }
        if (str.substr(idx, 5) == "false") { idx += 5; return json(false); }
        return json(false);
    }
};

} // namespace nlohmann

#endif // NLOHMANN_JSON_HPP
