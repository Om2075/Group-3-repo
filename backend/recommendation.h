#ifndef RECOMMENDATION_H
#define RECOMMENDATION_H

#include "database.h"
#include <queue>
#include <vector>

// Struct representing a complete 3-piece outfit recommendation
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

// Generates the highest-rated compatible outfit recommendation given a selected item
Outfit recommendOutfit(int mainItemId);

// Pops and returns the next highest-rated combination from the active Max-Heap
Outfit recommendNextOutfit();

// Check if any outfits remain in the recommendation queue
bool hasMoreOutfits();

#endif // RECOMMENDATION_H
