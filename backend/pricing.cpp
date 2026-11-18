#include "pricing.h"
#include "database.h"
#include <unordered_map>
#include <limits>
#include <algorithm>

// Data Structure: Hash Map (std::unordered_map) for grouping platform variants
// Key: baseItemKey (string), Value: vector of ClothingItem across Amazon, Flipkart, Myntra
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
        if (variants.empty()) {
            result.items.push_back(*target);
            result.totalLowest += target->price;
            result.totalAmazon += target->price;
            continue;
        }

        ClothingItem bestVariant = variants[0];
        double minPrice = std::numeric_limits<double>::max();

        ClothingItem amazonVariant = variants[0];
        bool foundAmazon = false;

        for (const auto& v : variants) {
            // Only consider variants with rating >= 4.0
            if (v.rating >= 4.0 && v.price < minPrice) {
                minPrice = v.price;
                bestVariant = v;
            }

            if (v.platform == "Amazon") {
                amazonVariant = v;
                foundAmazon = true;
            }
        }

        if (!foundAmazon) {
            amazonVariant = target->platform == "Amazon" ? *target : bestVariant;
        }

        result.items.push_back(bestVariant);
        result.totalLowest += bestVariant.price;
        result.totalAmazon += amazonVariant.price;
    }

    result.savings = std::max(0.0, result.totalAmazon - result.totalLowest);
    return result;
}
