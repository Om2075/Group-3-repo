// C++ Backend Source Code and DSA Explanations for the C++ Engine Inspector

export const CPP_FILES = [
  {
    name: "main.cpp",
    path: "backend/main.cpp",
    description: "Crowcpp Microservice Entry Point & HTTP Endpoints (/api/items, /api/recommend, /api/next-outfit, /api/prices)",
    dsa: "REST API Dispatcher, JSON Serializer",
    code: `#include "crow_all.h"
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

int main() {
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
            bool match = false;
            if (type == "Shoe" || type == "shoe" || type == "Shoes" || type == "shoes") {
                match = (item.type == "Shoe");
            } else if (type == "Shirt" || type == "shirt" || type == "Shirts" || type == "shirts") {
                match = (item.type == "Shirt");
            } else if (type == "Pant" || type == "pant" || type == "Pants" || type == "pants") {
                match = (item.type == "Pant");
            }

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
                return crow::response(400, "{\\"error\\": \\"Missing mainItemId\\"}");
            }
            int mainItemId = body["mainItemId"].get<int>();
            Outfit outfit = recommendOutfit(mainItemId);
            return crow::response(200, outfitToJson(outfit).dump());
        } catch (const std::exception& e) {
            return crow::response(500, "{\\"error\\": \\"Internal server error\\"}");
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
                return crow::response(400, "{\\"error\\": \\"Missing ids array\\"}");
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
            return crow::response(500, "{\\"error\\": \\"Internal server error\\"}");
        }
    });

    app.port(8080).multithreaded().run();
    return 0;
}`
  },
  {
    name: "graph.h",
    path: "backend/graph.h",
    description: "Header declaring Graph Adjacency List and BFS Traversal function prototypes",
    dsa: "Graph Adjacency List, BFS Function Prototypes",
    code: `#ifndef GRAPH_H
#define GRAPH_H

#include <vector>
#include <unordered_map>

// Builds the outfit compatibility graph across all items in database
void buildGraph();

// Returns the adjacency list of the compatibility graph
std::unordered_map<int, std::vector<int>> getGraph();

// Performs Breadth-First Search (BFS) from startId to traverse compatible clothing items
std::vector<int> bfsCompatible(int startId);

// Helper function to check if two colors are harmoniously compatible
bool areColorsCompatible(const std::string& c1, const std::string& c2);

#endif // GRAPH_H`
  },
  {
    name: "graph.cpp",
    path: "backend/graph.cpp",
    description: "Builds Compatibility Graph with Color Harmony Matrix and runs Breadth-First Search (BFS)",
    dsa: "Undirected Graph (unordered_map<int, vector<int>>), Queue BFS (std::queue), Visited Set (unordered_set)",
    code: `#include "graph.h"
#include "database.h"
#include <queue>
#include <unordered_set>
#include <unordered_map>
#include <vector>
#include <string>

// Data Structure: Adjacency List using std::unordered_map
// Key: item ID, Value: list of compatible adjacent item IDs
static std::unordered_map<int, std::vector<int>> compatibilityGraph;

bool areColorsCompatible(const std::string& c1, const std::string& c2) {
    if (c1 == "Black") {
        return (c2 == "White" || c2 == "Grey" || c2 == "Black");
    } else if (c1 == "White") {
        return (c2 == "Black" || c2 == "Blue" || c2 == "Grey" || c2 == "White");
    } else if (c1 == "Blue") {
        return (c2 == "White" || c2 == "Grey" || c2 == "Black" || c2 == "Blue");
    } else if (c1 == "Red") {
        return (c2 == "Black" || c2 == "White" || c2 == "Grey");
    } else if (c1 == "Grey") {
        return (c2 == "Black" || c2 == "White" || c2 == "Blue" || c2 == "Grey");
    }
    return false;
}

void buildGraph() {
    compatibilityGraph.clear();

    // Loop through all database items and build bidirectional connections
    for (size_t i = 0; i < database.size(); ++i) {
        const auto& itemA = database[i];
        if (itemA.rating < 4.0) continue; // Rating filter >= 4.0

        for (size_t j = i + 1; j < database.size(); ++j) {
            const auto& itemB = database[j];
            if (itemB.rating < 4.0) continue;

            // Types must differ
            if (itemA.type == itemB.type) continue;

            // Same style required
            if (itemA.style != itemB.style) continue;

            // Color harmony check
            if (areColorsCompatible(itemA.color, itemB.color) &&
                areColorsCompatible(itemB.color, itemA.color)) {
                compatibilityGraph[itemA.id].push_back(itemB.id);
                compatibilityGraph[itemB.id].push_back(itemA.id);
            }
        }
    }
}

std::unordered_map<int, std::vector<int>> getGraph() {
    return compatibilityGraph;
}

// Data Structure: Queue-based Breadth-First Search (BFS) Traversal
std::vector<int> bfsCompatible(int startId) {
    std::vector<int> result;
    std::unordered_set<int> visited;
    std::queue<int> q;

    if (compatibilityGraph.find(startId) == compatibilityGraph.end()) {
        return result;
    }

    q.push(startId);
    visited.insert(startId);

    while (!q.empty()) {
        int current = q.front();
        q.pop();

        for (int neighborId : compatibilityGraph[current]) {
            if (visited.find(neighborId) == visited.end()) {
                visited.insert(neighborId);
                result.push_back(neighborId);
                q.push(neighborId);
            }
        }
    }

    return result;
}`
  },
  {
    name: "recommendation.h",
    path: "backend/recommendation.h",
    description: "Declares Outfit struct and Max-Heap priority queue comparator",
    dsa: "Outfit Struct, Max-Heap Comparator (OutfitRatingComparator)",
    code: `#ifndef RECOMMENDATION_H
#define RECOMMENDATION_H

#include "database.h"
#include <queue>
#include <vector>

struct Outfit {
    ClothingItem shoe;
    ClothingItem shirt;
    ClothingItem pant;
    double avgRating;
};

// Custom comparator for Max-Heap priority queue based on highest average rating
struct OutfitRatingComparator {
    bool operator()(const Outfit& a, const Outfit& b) const {
        return a.avgRating < b.avgRating; // Max-heap: top element has largest avgRating
    }
};

Outfit recommendOutfit(int mainItemId);
Outfit recommendNextOutfit();
bool hasMoreOutfits();

#endif // RECOMMENDATION_H`
  },
  {
    name: "recommendation.cpp",
    path: "backend/recommendation.cpp",
    description: "Evaluates compatible garments from BFS and ranks ensembles in a Max-Heap Priority Queue",
    dsa: "std::priority_queue<Outfit, vector<Outfit>, OutfitRatingComparator> (Max-Heap)",
    code: `#include "recommendation.h"
#include "graph.h"
#include "database.h"
#include <algorithm>
#include <cmath>

// Data Structure: Global Max-Heap Priority Queue
static std::priority_queue<Outfit, std::vector<Outfit>, OutfitRatingComparator> outfitHeap;
static Outfit lastPoppedOutfit;

bool hasMoreOutfits() {
    return !outfitHeap.empty();
}

Outfit recommendOutfit(int mainItemId) {
    while (!outfitHeap.empty()) {
        outfitHeap.pop();
    }

    const ClothingItem* mainItem = getItemById(mainItemId);
    if (!mainItem) return Outfit{};

    std::vector<int> compatibleIds = bfsCompatible(mainItemId);
    std::vector<ClothingItem> shoeCandidates;
    std::vector<ClothingItem> shirtCandidates;
    std::vector<ClothingItem> pantCandidates;

    if (mainItem->type == "Shoe") shoeCandidates.push_back(*mainItem);
    else if (mainItem->type == "Shirt") shirtCandidates.push_back(*mainItem);
    else if (mainItem->type == "Pant") pantCandidates.push_back(*mainItem);

    for (int id : compatibleIds) {
        const ClothingItem* item = getItemById(id);
        if (!item || item->rating < 4.0) continue;

        if (item->type == "Shoe" && mainItem->type != "Shoe") shoeCandidates.push_back(*item);
        else if (item->type == "Shirt" && mainItem->type != "Shirt") shirtCandidates.push_back(*item);
        else if (item->type == "Pant" && mainItem->type != "Pant") pantCandidates.push_back(*item);
    }

    for (const auto& shoe : shoeCandidates) {
        for (const auto& shirt : shirtCandidates) {
            for (const auto& pant : pantCandidates) {
                if (shoe.style != shirt.style || shirt.style != pant.style) continue;
                if (!areColorsCompatible(shoe.color, shirt.color)) continue;
                if (!areColorsCompatible(shirt.color, pant.color)) continue;
                if (!areColorsCompatible(shoe.color, pant.color)) continue;

                double avg = (shoe.rating + shirt.rating + pant.rating) / 3.0;
                avg = std::round(avg * 100.0) / 100.0;

                if (avg >= 4.0) {
                    Outfit candidate{shoe, shirt, pant, avg};
                    outfitHeap.push(candidate); // Insert into Max-Heap O(log N)
                }
            }
        }
    }

    if (!outfitHeap.empty()) {
        lastPoppedOutfit = outfitHeap.top();
        outfitHeap.pop(); // Pop best outfit O(log N)
        return lastPoppedOutfit;
    }

    return lastPoppedOutfit;
}

Outfit recommendNextOutfit() {
    if (!outfitHeap.empty()) {
        lastPoppedOutfit = outfitHeap.top();
        outfitHeap.pop();
        return lastPoppedOutfit;
    }
    return lastPoppedOutfit;
}`
  },
  {
    name: "pricing.h",
    path: "backend/pricing.h",
    description: "Declares PriceResult struct and multi-store price comparator function",
    dsa: "PriceResult Struct",
    code: `#ifndef PRICING_H
#define PRICING_H

#include "database.h"
#include <vector>

struct PriceResult {
    std::vector<ClothingItem> items; // Best value platform variants
    double totalLowest;              // Combined lowest price across all platforms
    double totalAmazon;              // Combined price if bought entirely on Amazon
    double savings;                  // Money saved: totalAmazon - totalLowest
};

PriceResult findLowestPrices(const std::vector<int>& itemIds);

#endif // PRICING_H`
  },
  {
    name: "pricing.cpp",
    path: "backend/pricing.cpp",
    description: "Groups multi-platform items by baseItemKey using Hash Map and identifies lowest prices",
    dsa: "Hash Map (std::unordered_map<string, vector<ClothingItem>>)",
    code: `#include "pricing.h"
#include "database.h"
#include <unordered_map>
#include <limits>
#include <algorithm>

PriceResult findLowestPrices(const std::vector<int>& itemIds) {
    PriceResult result;
    result.totalLowest = 0.0;
    result.totalAmazon = 0.0;
    result.savings = 0.0;

    // 1. Build Hash Map grouped by baseItemKey
    std::unordered_map<std::string, std::vector<ClothingItem>> variantMap;
    for (const auto& item : database) {
        variantMap[item.baseItemKey].push_back(item);
    }

    // 2. For each requested outfit item ID, find lowest price platform variant
    for (int id : itemIds) {
        const ClothingItem* target = getItemById(id);
        if (!target) continue;

        const auto& variants = variantMap[target->baseItemKey];
        ClothingItem bestVariant = variants[0];
        double minPrice = std::numeric_limits<double>::max();
        ClothingItem amazonVariant = variants[0];

        for (const auto& v : variants) {
            if (v.rating >= 4.0 && v.price < minPrice) {
                minPrice = v.price;
                bestVariant = v;
            }
            if (v.platform == "Amazon") {
                amazonVariant = v;
            }
        }

        result.items.push_back(bestVariant);
        result.totalLowest += bestVariant.price;
        result.totalAmazon += amazonVariant.price;
    }

    result.savings = std::max(0.0, result.totalAmazon - result.totalLowest);
    return result;
}`
  },
  {
    name: "database.h",
    path: "backend/database.h",
    description: "ClothingItem struct definition with id, name, type, color, style, platform, price, rating",
    dsa: "ClothingItem Struct, Global Database Vector",
    code: `#ifndef DATABASE_H
#define DATABASE_H

#include <string>
#include <vector>

struct ClothingItem {
    int id;
    std::string name;
    std::string type;         // "Shoe", "Shirt", "Pant"
    std::string color;        // "Black", "White", "Grey", "Blue", "Red"
    std::string style;        // "Formal", "Casual", "Sporty"
    std::string platform;     // "Amazon", "Flipkart", "Myntra"
    double price;             // Price in INR (₹)
    double rating;            // Customer rating (4.0 - 5.0)
    std::string imageUrl;
    std::string baseItemKey;
};

extern std::vector<ClothingItem> database;
void seedDatabase();
const ClothingItem* getItemById(int id);

#endif // DATABASE_H`
  },
  {
    name: "CMakeLists.txt",
    path: "backend/CMakeLists.txt",
    description: "CMake build script for C++17 executable linking POSIX threads",
    dsa: "CMake Build System",
    code: `cmake_minimum_required(VERSION 3.15)
project(TryAndBuyServer)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(server
    main.cpp
    database.cpp
    graph.cpp
    recommendation.cpp
    pricing.cpp
)

find_package(Threads REQUIRED)
target_link_libraries(server Threads::Threads)
target_include_directories(server PRIVATE \${CMAKE_SOURCE_DIR})`
  }
];
