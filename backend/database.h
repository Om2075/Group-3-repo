#ifndef DATABASE_H
#define DATABASE_H

#include <string>
#include <vector>

// Struct representing an individual clothing item in the Try & Buy Store
struct ClothingItem {
    int id;
    std::string name;
    std::string type;         // "Shoe", "Shirt", "Pant"
    std::string color;        // "Black", "White", "Grey", "Blue", "Red"
    std::string style;        // "Formal", "Casual", "Sporty"
    std::string platform;     // "Amazon", "Flipkart", "Myntra"
    double price;             // Price in INR (₹)
    double rating;            // Customer rating (4.0 - 5.0)
    std::string imageUrl;     // Path or URL to product image
    std::string baseItemKey;  // Key grouping multi-platform variants
};

// Global database storage declaration
extern std::vector<ClothingItem> database;

// Function to populate database with items across Shoes, Shirts, and Pants
void seedDatabase();

// Helper to retrieve an item by its ID
const ClothingItem* getItemById(int id);

#endif // DATABASE_H
