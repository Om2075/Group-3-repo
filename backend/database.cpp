#include "database.h"
#include <vector>
#include <string>

// Global database vector containing all clothing item platform variants
std::vector<ClothingItem> database;

const ClothingItem* getItemById(int id) {
    for (const auto& item : database) {
        if (item.id == id) {
            return &item;
        }
    }
    return nullptr;
}

void seedDatabase() {
    database.clear();

    struct BaseItemSeed {
        std::string baseKey;
        std::string name;
        std::string type;
        std::string color;
        std::string style;
        std::string image;
        double basePrice;
    };

    // 20 Shoes (Black, White, Grey, Blue, Red across Formal, Casual, Sporty)
    std::vector<BaseItemSeed> shoeSeeds = {
        {"oxford_classic_black", "Classic Leather Oxford Shoes", "Shoe", "Black", "Formal", "/images/shoe_101.jpg", 3499.0},
        {"derby_brogue_black", "Wingtip Brogue Derby", "Shoe", "Black", "Formal", "/images/shoe_102.jpg", 3899.0},
        {"monk_strap_black", "Double Monk Strap Shoes", "Shoe", "Black", "Formal", "/images/shoe_103.jpg", 4299.0},
        {"chelsea_boots_black", "Classic Chelsea Leather Boots", "Shoe", "Black", "Casual", "/images/shoe_104.jpg", 3999.0},
        {"minimal_sneaker_black", "Minimalist Black Low Sneakers", "Shoe", "Black", "Casual", "/images/shoe_105.jpg", 2799.0},
        {"running_pegasus_black", "Air Zoom Athletic Runners", "Shoe", "Black", "Sporty", "/images/shoe_106.jpg", 4599.0},
        {"court_trainer_white", "Clean Court Leather Sneakers", "Shoe", "White", "Casual", "/images/shoe_107.jpg", 2999.0},
        {"canvas_slipon_white", "Classic White Canvas Loafers", "Shoe", "White", "Casual", "/images/shoe_108.jpg", 1899.0},
        {"pro_running_white", "UltraBoost Performance Shoes", "Shoe", "White", "Sporty", "/images/shoe_109.jpg", 5299.0},
        {"derby_dress_white", "Ivory Tuxedo Derby Shoes", "Shoe", "White", "Formal", "/images/shoe_110.jpg", 4199.0},
        {"suede_loafer_grey", "Grey Suede Penny Loafers", "Shoe", "Grey", "Casual", "/images/shoe_111.jpg", 3199.0},
        {"knit_runner_grey", "FlexKnit Lightweight Runners", "Shoe", "Grey", "Sporty", "/images/shoe_112.jpg", 2899.0},
        {"charcoal_derby_grey", "Charcoal Textured Dress Shoes", "Shoe", "Grey", "Formal", "/images/shoe_113.jpg", 3699.0},
        {"navy_boat_shoe_blue", "Navy Leather Deck Loafers", "Shoe", "Blue", "Casual", "/images/shoe_114.jpg", 2999.0},
        {"ocean_runner_blue", "Air Cushion Sprint Shoes", "Shoe", "Blue", "Sporty", "/images/shoe_115.jpg", 3499.0},
        {"royal_oxford_blue", "Midnight Navy Formal Oxfords", "Shoe", "Blue", "Formal", "/images/shoe_116.jpg", 4499.0},
        {"crimson_sneaker_red", "Retro High-Top Red Sneakers", "Shoe", "Red", "Casual", "/images/shoe_117.jpg", 3299.0},
        {"speed_trainer_red", "Ignite Speed Running Shoes", "Shoe", "Red", "Sporty", "/images/shoe_118.jpg", 3799.0},
        {"sport_court_red", "Court Bounce Street Shoes", "Shoe", "Red", "Sporty", "/images/shoe_119.jpg", 3599.0},
        {"chunky_trainer_grey", "Urban Chunky Retro Trainers", "Shoe", "Grey", "Casual", "/images/shoe_120.jpg", 3399.0}
    };

    // 20 Shirts (Black, White, Grey, Blue, Red across Formal, Casual, Sporty)
    std::vector<BaseItemSeed> shirtSeeds = {
        {"crisp_poplin_white", "Crisp Cotton Poplin Dress Shirt", "Shirt", "White", "Formal", "/images/shirt_201.jpg", 1999.0},
        {"oxford_button_white", "Classic Oxford Button-Down", "Shirt", "White", "Casual", "/images/shirt_202.jpg", 1799.0},
        {"performance_tee_white", "DryFit Aeroready Athletic Tee", "Shirt", "White", "Sporty", "/images/shirt_203.jpg", 1299.0},
        {"french_cuff_black", "Tailored French Cuff Shirt", "Shirt", "Black", "Formal", "/images/shirt_204.jpg", 2499.0},
        {"linen_camp_black", "Breathable Linen Camp Shirt", "Shirt", "Black", "Casual", "/images/shirt_205.jpg", 1899.0},
        {"compression_tee_black", "Pro Hyperwarm Compression Top", "Shirt", "Black", "Sporty", "/images/shirt_206.jpg", 1599.0},
        {"chambray_casual_blue", "Washed Indigo Chambray Shirt", "Shirt", "Blue", "Casual", "/images/shirt_207.jpg", 2199.0},
        {"sky_spread_blue", "Sky Blue Cutaway Collar Shirt", "Shirt", "Blue", "Formal", "/images/shirt_208.jpg", 2299.0},
        {"navy_polo_blue", "Pique Cotton Performance Polo", "Shirt", "Blue", "Casual", "/images/shirt_209.jpg", 1699.0},
        {"athletic_tank_blue", "Seamless Ventilation Active Tank", "Shirt", "Blue", "Sporty", "/images/shirt_210.jpg", 1199.0},
        {"heather_crew_grey", "Premium Heather Grey Crewneck", "Shirt", "Grey", "Casual", "/images/shirt_211.jpg", 1399.0},
        {"slate_formal_grey", "Slate Micro-Stripe Formal Shirt", "Shirt", "Grey", "Formal", "/images/shirt_212.jpg", 2099.0},
        {"tech_polo_grey", "Moisture-Wicking Tech Polo", "Shirt", "Grey", "Sporty", "/images/shirt_213.jpg", 1799.0},
        {"burgundy_twill_red", "Deep Crimson Twill Dress Shirt", "Shirt", "Red", "Formal", "/images/shirt_214.jpg", 2399.0},
        {"flannel_plaid_red", "Rustic Tartan Flannel Overshirt", "Shirt", "Red", "Casual", "/images/shirt_215.jpg", 1999.0},
        {"gym_training_red", "CrossTrain Breathable Red Tee", "Shirt", "Red", "Sporty", "/images/shirt_216.jpg", 1299.0},
        {"mandarin_collar_white", "Band Collar Linen Resort Shirt", "Shirt", "White", "Casual", "/images/shirt_217.jpg", 1899.0},
        {"houndstooth_formal_grey", "Houndstooth Weave Business Shirt", "Shirt", "Grey", "Formal", "/images/shirt_218.jpg", 2299.0},
        {"denim_western_blue", "Vintage Stone Wash Denim Shirt", "Shirt", "Blue", "Casual", "/images/shirt_219.jpg", 2499.0},
        {"silk_blend_black", "Sateen Black Evening Shirt", "Shirt", "Black", "Formal", "/images/shirt_220.jpg", 2699.0}
    };

    // 20 Pants (Black, White, Grey, Blue, Red across Formal, Casual, Sporty)
    std::vector<BaseItemSeed> pantSeeds = {
        {"tuxedo_trouser_black", "Pleated Slim Wool Trousers", "Pant", "Black", "Formal", "/images/pant_301.jpg", 2999.0},
        {"stretch_chino_black", "Modern Stretch Cotton Chinos", "Pant", "Black", "Casual", "/images/pant_302.jpg", 2199.0},
        {"tech_jogger_black", "Thermal Fleece Running Joggers", "Pant", "Black", "Sporty", "/images/pant_303.jpg", 1899.0},
        {"charcoal_suit_grey", "Tailored Charcoal Suit Trousers", "Pant", "Grey", "Formal", "/images/pant_304.jpg", 2799.0},
        {"heather_sweatpant_grey", "Tapered French Terry Joggers", "Pant", "Grey", "Sporty", "/images/pant_305.jpg", 1699.0},
        {"slate_selvedge_grey", "Grey Stonewashed Slim Jeans", "Pant", "Grey", "Casual", "/images/pant_306.jpg", 2499.0},
        {"linen_drawstring_white", "Relaxed Pure Linen Resort Pants", "Pant", "White", "Casual", "/images/pant_307.jpg", 2299.0},
        {"creased_formal_white", "Tailored Ivory Creased Trousers", "Pant", "White", "Formal", "/images/pant_308.jpg", 2899.0},
        {"track_pant_white", "AeroTrack Side-Stripe Pant", "Pant", "White", "Sporty", "/images/pant_309.jpg", 1799.0},
        {"classic_denim_blue", "Selvedge Indigo Slim Straight Jeans", "Pant", "Blue", "Casual", "/images/pant_310.jpg", 2699.0},
        {"navy_pleated_blue", "Midnight Navy Wool Dress Pants", "Pant", "Blue", "Formal", "/images/pant_311.jpg", 2999.0},
        {"speed_track_blue", "HydroShield Training Pants", "Pant", "Blue", "Sporty", "/images/pant_312.jpg", 1999.0},
        {"cargo_stretch_blue", "Utility Tactical Cargo Pants", "Pant", "Blue", "Casual", "/images/pant_313.jpg", 2399.0},
        {"crimson_chino_red", "Terracotta Slim-Fit Chinos", "Pant", "Red", "Casual", "/images/pant_314.jpg", 2199.0},
        {"maroon_formal_red", "Wine Red Structured Formal Slacks", "Pant", "Red", "Formal", "/images/pant_315.jpg", 2899.0},
        {"track_warmup_red", "Speedwick Training Joggers", "Pant", "Red", "Sporty", "/images/pant_316.jpg", 1799.0},
        {"relaxed_carpenter_grey", "Relaxed Fit Cotton Canvas Trousers", "Pant", "Grey", "Casual", "/images/pant_317.jpg", 2399.0},
        {"pinstripe_dress_black", "Pinstripe Wool Tailored Trousers", "Pant", "Black", "Formal", "/images/pant_318.jpg", 3199.0},
        {"woven_active_black", "FlexMotion 4-Way Stretch Pants", "Pant", "Black", "Sporty", "/images/pant_319.jpg", 2099.0},
        {"straight_khaki_white", "Straight Leg Off-White Chinos", "Pant", "White", "Casual", "/images/pant_320.jpg", 2299.0}
    };

    int currentId = 100;

    auto addVariants = [&](const std::vector<BaseItemSeed>& seeds) {
        for (const auto& item : seeds) {
            // Variant 1: Amazon (standard base price)
            database.push_back({
                currentId++,
                item.name,
                item.type,
                item.color,
                item.style,
                "Amazon",
                item.basePrice + 150.0,
                4.4,
                item.image,
                item.baseKey
            });

            // Variant 2: Flipkart (slightly discounted or varied)
            database.push_back({
                currentId++,
                item.name,
                item.type,
                item.color,
                item.style,
                "Flipkart",
                item.basePrice - 200.0,
                4.2,
                item.image,
                item.baseKey
            });

            // Variant 3: Myntra (fashion-focused, competitive price)
            database.push_back({
                currentId++,
                item.name,
                item.type,
                item.color,
                item.style,
                "Myntra",
                item.basePrice - 100.0,
                4.6,
                item.image,
                item.baseKey
            });
        }
    };

    addVariants(shoeSeeds);
    addVariants(shirtSeeds);
    addVariants(pantSeeds);
}
