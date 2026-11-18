#ifndef GRAPH_H
#define GRAPH_H

#include <vector>
#include <unordered_map>
#include <string>

// Builds the outfit compatibility graph across all items in database
void buildGraph();

// Returns the adjacency list of the compatibility graph
std::unordered_map<int, std::vector<int>> getGraph();

// Performs Breadth-First Search (BFS) from startId to traverse compatible clothing items
std::vector<int> bfsCompatible(int startId);

// Helper function to check if two colors are harmoniously compatible
bool areColorsCompatible(const std::string& c1, const std::string& c2);

#endif // GRAPH_H
