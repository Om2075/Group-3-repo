#ifndef PRICING_H
#define PRICING_H

#include "database.h"
#include <vector>

// Struct representing the cross-platform pricing comparison result
struct PriceResult {
    std::vector<ClothingItem> items; // Best value platform variants for each outfit item
    double totalLowest;              // Combined lowest price across all platforms
    double totalAmazon;              // Combined price if bought entirely on Amazon
    double savings;                  // Money saved: totalAmazon - totalLowest
};

// Computes the cheapest available platform for given items using Hash Map grouping
PriceResult findLowestPrices(const std::vector<int>& itemIds);

#endif // PRICING_H
