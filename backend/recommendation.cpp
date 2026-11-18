#include "recommendation.h"
#include "graph.h"
#include "database.h"
#include <algorithm>
#include <cmath>

// Data Structure: Global Max-Heap Priority Queue
// Stores candidate outfits ordered by descending average rating
static std::priority_queue<Outfit, std::vector<Outfit>, OutfitRatingComparator> outfitHeap;
static Outfit lastPoppedOutfit;

bool hasMoreOutfits() {
    return !outfitHeap.empty();
}

Outfit recommendOutfit(int mainItemId) {
    // Clear previous heap state
    while (!outfitHeap.empty()) {
        outfitHeap.pop();
    }

    const ClothingItem* mainItem = getItemById(mainItemId);
    if (!mainItem) {
        return Outfit{};
    }

    // Traverse compatible items using BFS on the graph
    std::vector<int> compatibleIds = bfsCompatible(mainItemId);

    std::vector<ClothingItem> shoeCandidates;
    std::vector<ClothingItem> shirtCandidates;
    std::vector<ClothingItem> pantCandidates;

    // Insert main item into its corresponding slot
    if (mainItem->type == "Shoe") {
        shoeCandidates.push_back(*mainItem);
    } else if (mainItem->type == "Shirt") {
        shirtCandidates.push_back(*mainItem);
    } else if (mainItem->type == "Pant") {
        pantCandidates.push_back(*mainItem);
    }

    // Partition BFS discovered items into respective types
    for (int id : compatibleIds) {
        const ClothingItem* item = getItemById(id);
        if (!item || item->rating < 4.0) continue;

        if (item->type == "Shoe" && shoeCandidates.empty()) {
            shoeCandidates.push_back(*item);
        } else if (item->type == "Shoe" && mainItem->type != "Shoe") {
            shoeCandidates.push_back(*item);
        } else if (item->type == "Shirt" && shirtCandidates.empty()) {
            shirtCandidates.push_back(*item);
        } else if (item->type == "Shirt" && mainItem->type != "Shirt") {
            shirtCandidates.push_back(*item);
        } else if (item->type == "Pant" && pantCandidates.empty()) {
            pantCandidates.push_back(*item);
        } else if (item->type == "Pant" && mainItem->type != "Pant") {
            pantCandidates.push_back(*item);
        }
    }

    // If BFS graph had narrow branch, fallback to scanning database items that match style & color harmony
    if (shoeCandidates.empty() || shirtCandidates.empty() || pantCandidates.empty()) {
        for (const auto& item : database) {
            if (item.rating < 4.0) continue;
            if (item.style != mainItem->style) continue;
            if (!areColorsCompatible(mainItem->color, item.color)) continue;

            if (item.type == "Shoe" && shoeCandidates.empty()) shoeCandidates.push_back(item);
            else if (item.type == "Shirt" && shirtCandidates.empty()) shirtCandidates.push_back(item);
            else if (item.type == "Pant" && pantCandidates.empty()) pantCandidates.push_back(item);
        }
    }

    // Generate valid complete 3-piece outfits
    for (const auto& shoe : shoeCandidates) {
        for (const auto& shirt : shirtCandidates) {
            for (const auto& pant : pantCandidates) {
                // Ensure style consistency
                if (shoe.style != shirt.style || shirt.style != pant.style) continue;

                // Color harmony check across all 3 garments
                if (!areColorsCompatible(shoe.color, shirt.color)) continue;
                if (!areColorsCompatible(shirt.color, pant.color)) continue;
                if (!areColorsCompatible(shoe.color, pant.color)) continue;

                double avg = (shoe.rating + shirt.rating + pant.rating) / 3.0;
                // Round to 2 decimal places
                avg = std::round(avg * 100.0) / 100.0;

                // Filter requirement: average rating >= 4.0
                if (avg >= 4.0) {
                    Outfit candidate{shoe, shirt, pant, avg};
                    outfitHeap.push(candidate);
                }
            }
        }
    }

    // If heap has elements, pop top element with highest rating
    if (!outfitHeap.empty()) {
        lastPoppedOutfit = outfitHeap.top();
        outfitHeap.pop();
        return lastPoppedOutfit;
    }

    // Fallback if no full triplet matched
    ClothingItem dummyShoe = shoeCandidates.empty() ? (mainItem->type == "Shoe" ? *mainItem : database[0]) : shoeCandidates[0];
    ClothingItem dummyShirt = shirtCandidates.empty() ? (mainItem->type == "Shirt" ? *mainItem : database[20]) : shirtCandidates[0];
    ClothingItem dummyPant = pantCandidates.empty() ? (mainItem->type == "Pant" ? *mainItem : database[40]) : pantCandidates[0];
    double avg = (dummyShoe.rating + dummyShirt.rating + dummyPant.rating) / 3.0;
    lastPoppedOutfit = Outfit{dummyShoe, dummyShirt, dummyPant, std::round(avg * 100.0) / 100.0};
    return lastPoppedOutfit;
}

Outfit recommendNextOutfit() {
    if (!outfitHeap.empty()) {
        lastPoppedOutfit = outfitHeap.top();
        outfitHeap.pop();
        return lastPoppedOutfit;
    }
    // If heap is exhausted, return last popped outfit
    return lastPoppedOutfit;
}
