#include "crow_all.h"
#include "json.hpp"
#include "database.h"
#include "graph.h"
#include "recommendation.h"
#include "pricing.h"
#include <iostream>
#include <string>
#include <vector>

using json = nlohmann::json;

// Helper to convert ClothingItem to JSON object
json itemToJson(const ClothingItem& item) {
    json j;
    j["id"] = item.id;
    j["name"] = item.name;
    j["type"] = item.type;
    j["color"] = item.color;
    j["style"] = item.style;
    j["platform"] = item.platform;
    j["price"] = item.price;
    j["rating"] = item.rating;
    j["imageUrl"] = item.imageUrl;
    j["baseItemKey"] = item.baseItemKey;
    return j;
}

// Helper to convert Outfit to JSON object
json outfitToJson(const Outfit& outfit) {
    json j;
    j["shoe"] = itemToJson(outfit.shoe);
    j["shirt"] = itemToJson(outfit.shirt);
    j["pant"] = itemToJson(outfit.pant);
    j["avgRating"] = outfit.avgRating;
    return j;
}

int main(int argc, char* argv[]) {
    int port = 8080;
    if (argc > 1) {
        try {
            port = std::stoi(argv[1]);
        } catch (...) {
            port = 8080;
        }
    }

    // 1. Initialize database with seed items across all platforms
    seedDatabase();
    std::cout << "[Init] Database seeded with " << database.size() << " platform variants." << std::endl;

    // 2. Build graph compatibility network based on color harmony & style rules
    buildGraph();
    std::cout << "[Init] Compatibility graph built successfully." << std::endl;

    crow::SimpleApp app;

    // Route: Root health check
    CROW_ROUTE(app, "/")([]() {
        json res;
        res["status"] = "Try & Buy API running";
        return crow::response(200, res.dump());
    });

    // Route: Get items by category type (Shoe, Shirt, Pant) with rating >= 4.0
    CROW_ROUTE(app, "/api/items/<string>")([](const crow::request& req, std::string type) {
        json arr = json::array();
        for (const auto& item : database) {
            // Case-insensitive or normalized comparison
            bool match = false;
            if (type == "Shoe" || type == "shoe" || type == "Shoes" || type == "shoes") {
                match = (item.type == "Shoe");
            } else if (type == "Shirt" || type == "shirt" || type == "Shirts" || type == "shirts") {
                match = (item.type == "Shirt");
            } else if (type == "Pant" || type == "pant" || type == "Pants" || type == "pants") {
                match = (item.type == "Pant");
            }

            // Enforce rating >= 4.0 rule
            if (match && item.rating >= 4.0) {
                arr.push_back(itemToJson(item));
            }
        }
        return crow::response(200, arr.dump());
    });

    // Route: Recommend optimal outfit for a selected main item (Max-Heap top)
    CROW_ROUTE(app, "/api/recommend").methods("POST"_method)([](const crow::request& req) {
        try {
            auto body = json::parse(req.body);
            if (!body.contains("mainItemId")) {
                return crow::response(400, "{\"error\": \"Missing mainItemId\"}");
            }
            int mainItemId = body["mainItemId"].get<int>();
            Outfit outfit = recommendOutfit(mainItemId);
            return crow::response(200, outfitToJson(outfit).dump());
        } catch (const std::exception& e) {
            return crow::response(500, "{\"error\": \"Internal server error\"}");
        }
    });

    // Route: Get next alternative outfit combination from the Max-Heap priority queue
    CROW_ROUTE(app, "/api/next-outfit").methods("POST"_method)([](const crow::request& req) {
        Outfit nextOutfit = recommendNextOutfit();
        return crow::response(200, outfitToJson(nextOutfit).dump());
    });

    // Route: Find lowest prices across Amazon, Flipkart, and Myntra using Hash Map
    CROW_ROUTE(app, "/api/prices").methods("POST"_method)([](const crow::request& req) {
        try {
            auto body = json::parse(req.body);
            if (!body.contains("ids")) {
                return crow::response(400, "{\"error\": \"Missing ids array\"}");
            }
            std::vector<int> ids = body["ids"].get<std::vector<int>>();
            PriceResult result = findLowestPrices(ids);

            json res;
            json itemsArr = json::array();
            for (const auto& item : result.items) {
                itemsArr.push_back(itemToJson(item));
            }
            res["items"] = itemsArr;
            res["totalLowest"] = result.totalLowest;
            res["totalAmazon"] = result.totalAmazon;
            res["savings"] = result.savings;

            return crow::response(200, res.dump());
        } catch (const std::exception& e) {
            return crow::response(500, "{\"error\": \"Internal server error\"}");
        }
    });

    // Start server on configured port (default 8080 or CLI argument)
    app.port(port).multithreaded().run();
    return 0;
}
