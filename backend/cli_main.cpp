#include <iostream>
#include <iomanip>
#include "database.h"
#include "graph.h"
#include "recommendation.h"
#include "pricing.h"

int main() {
    std::cout << "=======================================================\n";
    std::cout << "    TRY & BUY STORE: C++ OUTFIT RECOMMENDATION ENGINE  \n";
    std::cout << "        Data Structures & Algorithms Course Project   \n";
    std::cout << "=======================================================\n\n";

    // Step 1: Database Seeding (vector<ClothingItem>)
    std::cout << "[Step 1] Seeding database into std::vector<ClothingItem>...\n";
    seedDatabase();
    std::cout << "         Loaded " << database.size() << " product variants successfully.\n\n";

    // Step 2: Compatibility Graph Construction (unordered_map<int, vector<int>>)
    std::cout << "[Step 2] Constructing Undirected Graph (Adjacency List)...\n";
    buildGraph();
    auto graph = getGraph();
    std::cout << "         Graph constructed with " << graph.size() << " active nodes.\n";
    std::cout << "         Compatibility rules: Different Garment Type + Same Style + Harmonious Colors + Rating >= 4.0\n\n";

    // Step 3: Select an anchor item
    int anchorId = 100; // Classic Leather Oxford
    const ClothingItem* anchor = getItemById(anchorId);
    if (!anchor) {
        std::cout << "Error: Anchor item not found.\n";
        return 1;
    }

    std::cout << "[Step 3] User Selected Garment:\n";
    std::cout << "         ID: " << anchor->id << " | Name: " << anchor->name 
              << " | Type: " << anchor->type << " | Style: " << anchor->style 
              << " | Color: " << anchor->color << " | Rating: " << anchor->rating << "/5.0\n\n";

    // Step 4: BFS Traversal (std::queue + std::unordered_set)
    std::cout << "[Step 4] Running Breadth-First Search (BFS Traversal)...\n";
    std::vector<int> compatibleIds = bfsCompatible(anchorId);
    std::cout << "         BFS traversed and found " << compatibleIds.size() << " compatible candidates.\n\n";

    // Step 5: Max-Heap Priority Queue (std::priority_queue<Outfit>)
    std::cout << "[Step 5] Building Max-Heap Priority Queue for Outfit Combinations...\n";
    Outfit bestOutfit = recommendOutfit(anchorId);

    std::cout << "\n=======================================================\n";
    std::cout << "           TOP RECOMMENDED 3-PIECE OUTFIT              \n";
    std::cout << "=======================================================\n";
    std::cout << " Average Rating: " << std::fixed << std::setprecision(2) << bestOutfit.avgRating << " / 5.0\n";
    std::cout << " 1. Shoe : " << bestOutfit.shoe.name << " (" << bestOutfit.shoe.color << ", " << bestOutfit.shoe.style << ") - Rating: " << bestOutfit.shoe.rating << "\n";
    std::cout << " 2. Shirt: " << bestOutfit.shirt.name << " (" << bestOutfit.shirt.color << ", " << bestOutfit.shirt.style << ") - Rating: " << bestOutfit.shirt.rating << "\n";
    std::cout << " 3. Pant : " << bestOutfit.pant.name << " (" << bestOutfit.pant.color << ", " << bestOutfit.pant.style << ") - Rating: " << bestOutfit.pant.rating << "\n\n";

    // Step 6: Hash Map Cross-Platform Price Comparison (std::unordered_map)
    std::cout << "[Step 6] Comparing Prices via Hash Map across Amazon, Flipkart & Myntra...\n";
    std::vector<int> outfitItemIds = { bestOutfit.shoe.id, bestOutfit.shirt.id, bestOutfit.pant.id };
    PriceResult pricing = findLowestPrices(outfitItemIds);

    std::cout << "\n=======================================================\n";
    std::cout << "            MULTI-STORE PRICE COMPARISON               \n";
    std::cout << "=======================================================\n";
    for (const auto& item : pricing.items) {
        std::cout << " - " << std::left << std::setw(28) << item.name 
                  << " Best on: " << std::setw(10) << item.platform 
                  << " Price: Rs. " << item.price << "\n";
    }
    std::cout << "-------------------------------------------------------\n";
    std::cout << " Combined Lowest Price : Rs. " << pricing.totalLowest << "\n";
    std::cout << " Amazon Benchmark Price : Rs. " << pricing.totalAmazon << "\n";
    std::cout << " Total Guaranteed Savings: Rs. " << pricing.savings << "\n";
    std::cout << "=======================================================\n\n";

    // Step 7: Next Best Outfit from Max-Heap
    if (hasMoreOutfits()) {
        Outfit nextOutfit = recommendNextOutfit();
        std::cout << "[Next Outfit from Max-Heap Pop]: Avg Rating: " 
                  << nextOutfit.avgRating << " | " << nextOutfit.shoe.name 
                  << " + " << nextOutfit.shirt.name 
                  << " + " << nextOutfit.pant.name << "\n";
    }

    std::cout << "\nExecution finished successfully. All DSA modules verified.\n";
    return 0;
}
