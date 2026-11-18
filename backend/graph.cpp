#include "graph.h"
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
    // Graph Rules:
    // 1. Same style matches (Formal <-> Formal, Casual <-> Casual, Sporty <-> Sporty)
    // 2. Color harmony matches (Black/White/Grey/Blue/Red transition matrix)
    // 3. Types must differ: Shoe <-> Shirt, Shirt <-> Pant, Shoe <-> Pant
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
                // Add undirected edge between node A and node B
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
// Explores level-by-level compatibility from a starting item node
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
}
