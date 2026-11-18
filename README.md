# Try & Buy Store 🛍️👔👞
## Data Structures & Algorithms (DSA) Course Project in C++17

**Try & Buy Store** is an enterprise-grade academic Data Structures & Algorithms (DSA) capstone project developed in **modern C++17** with a responsive interactive web interface. It addresses the combinatorial problem of wardrobe coordination and multi-retailer e-commerce price optimization using classical data structures: **Undirected Graph Adjacency Lists**, **Queue-based Breadth-First Search (BFS)**, **Max-Heap Priority Queues**, and **Hash Tables**.

---

## 📚 DSA Course Syllabus Mapping

| Data Structure / Algorithm | C++ STL Implementation | Academic Course Topic | Purpose in Project |
| :--- | :--- | :--- | :--- |
| **Undirected Graph** | `std::unordered_map<int, std::vector<int>>` | Graphs (Adjacency List Representation) | Represents compatibility between items; edges are created based on style and color harmony matrices. |
| **Breadth-First Search (BFS)** | `std::queue<int>` & `std::unordered_set<int>` | Graph Traversal Algorithms | Explores level-order compatible items from an anchor garment without recursion stack overhead. |
| **Binary Max-Heap** | `std::priority_queue<Outfit, vector<Outfit>, OutfitRatingComparator>` | Heaps & Priority Queues | Orders valid 3-piece outfits by average customer rating ($\ge 4.0\star$). Provides $O(\log N)$ insertion and top extraction. |
| **Hash Table** | `std::unordered_map<std::string, std::vector<ClothingItem>>` | Hashing & Collision Resolution | Groups platform variants by `baseItemKey` in $O(1)$ average time to compare Amazon, Flipkart, and Myntra. |
| **Dynamic Array** | `std::vector<ClothingItem>` | Linear Data Structures | Stores database records and candidate lists with cache-friendly contiguous memory. |

---

## ⏱️ Asymptotic Complexity Analysis (Time & Space)

| Operation | Algorithm / Structure | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| :--- | :--- | :--- | :--- | :--- |
| **Database Seeding** | Sequential Array Insertion | $O(N)$ | $O(N)$ | $O(N)$ |
| **Graph Construction** | Pairwise Compatibility Scan | $O(N^2)$ | $O(N^2)$ | $O(V + E)$ |
| **BFS Compatibility Search** | Queue-based Traversal | $O(V + E)$ | $O(V + E)$ | $O(V)$ |
| **Outfit Generation** | Cartesian Triplets $(S \times T \times P)$ | $O(K_1 \times K_2 \times K_3)$ | $O(V^3)$ | $O(M)$ |
| **Max-Heap Push** | Binary Heap Sift-Up | $O(\log M)$ | $O(\log M)$ | $O(M)$ |
| **Recommend Outfit** | Heap Root Extraction (`pop`) | $O(\log M)$ | $O(\log M)$ | $O(1)$ auxiliary |
| **Recommend Next Outfit** | Consecutive Heap Pop | $O(\log M)$ | $O(\log M)$ | $O(1)$ auxiliary |
| **Multi-Store Price Lookup** | Hash Table Variant Grouping | $O(K)$ | $O(K \cdot N)$ | $O(N)$ |

*Where $V = \text{total items } (180)$, $E = \text{compatibility edges}$, $M = \text{valid outfit triplets}$, $K = \text{outfit size } (3)$.*

---

## 🎯 Theoretical Core & Rules

### 1. Graph Compatibility Model
Let $G = (V, E)$ be an undirected graph where each vertex $v \in V$ is a `ClothingItem`.
An undirected edge $(u, v) \in E$ exists if and only if:
1. $\text{type}(u) \neq \text{type}(v)$ (Different garment categories: Shoe, Shirt, Pant)
2. $\text{style}(u) = \text{style}(v)$ (Sartorial coherence: Formal $\leftrightarrow$ Formal, Casual $\leftrightarrow$ Casual, Sporty $\leftrightarrow$ Sporty)
3. $\text{ColorHarmony}(\text{color}(u), \text{color}(v)) = \text{true}$
4. $\text{rating}(u) \ge 4.0$ and $\text{rating}(v) \ge 4.0$

#### Color Harmony Transition Matrix
* **Black**: Compatible with `{White, Grey, Black}`
* **White**: Compatible with `{Black, Blue, Grey, White}`
* **Blue**: Compatible with `{White, Grey, Black, Blue}`
* **Red**: Compatible with `{Black, White, Grey}`
* **Grey**: Compatible with `{Black, White, Blue, Grey}`

### 2. Max-Heap Outfit Optimization
Each valid 3-piece combination $O_i = (\text{shoe}, \text{shirt}, \text{pant})$ has score:
$$\text{Score}(O_i) = \frac{\text{rating}(\text{shoe}) + \text{rating}(\text{shirt}) + \text{rating}(\text{pant})}{3.0}$$
All valid outfits satisfying pairwise color and style harmony are inserted into:
```cpp
std::priority_queue<Outfit, std::vector<Outfit>, OutfitRatingComparator> outfitHeap;
```
By Max-Heap property:
$$\text{Root}(H) = \arg\max_{O \in H} (\text{Score}(O))$$
Calling `recommendNextOutfit()` extracts the next best ensemble in $O(\log M)$ time.

### 3. Hash Map Cross-Platform Savings
For an approved outfit $O = \{i_1, i_2, i_3\}$, variants across Amazon, Flipkart, and Myntra are grouped in `variantMap`:
$$\text{TotalLowest} = \sum_{j=1}^3 \min_{v \in \text{variantMap}[i_j.\text{key}]} (\text{price}(v))$$
$$\text{TotalAmazon} = \sum_{j=1}^3 \text{price}(\text{variant}_{\text{Amazon}}[i_j.\text{key}])$$
$$\text{Savings} = \max(0, \text{TotalAmazon} - \text{TotalLowest})$$

---

## 🎓 Viva Voce & Examination Q&A

### Q1: Why use an Adjacency List instead of an Adjacency Matrix for the graph?
**Answer:** The clothing compatibility graph is sparse because items of the same type (Shoe to Shoe) or conflicting styles (Formal to Sporty) have zero edges. An Adjacency Matrix requires $O(V^2)$ space regardless of sparsity. The Adjacency List (`unordered_map<int, vector<int>>`) uses optimal $O(V + E)$ space and allows BFS to inspect only valid neighbors without iterating over all $V$ vertices.

### Q2: Why use a Max-Heap instead of sorting an array with `std::sort`?
**Answer:**
1. **Lazy Extraction:** Users typically evaluate only the top 1–3 outfits. Sorting an array of $M$ outfits takes $O(M \log M)$ upfront time. A heap can be built in $O(M)$ time using Floyd's heapify or $O(M \log M)$ insertions, and extracting $K$ outfits takes only $O(K \log M)$. When $K \ll M$, the heap avoids sorting thousands of uninspected combinations.
2. **Streaming / Pagination:** The heap seamlessly supports "Show Me Another Combination" via simple `pop()` operations without re-indexing.

### Q3: Why is BFS preferred over DFS for finding compatible garments?
**Answer:** Breadth-First Search traverses level-by-level (Distance 1: Shoes $\rightarrow$ Shirts; Distance 2: Shirts $\rightarrow$ Pants). This models real-world outfit layering directly and prevents deep recursion stack overflow issues.

### Q4: How is $O(1)$ price comparison achieved across multiple e-commerce platforms?
**Answer:** By preprocessing all 180 platform items into a Hash Map (`std::unordered_map<string, vector<ClothingItem>>`) keyed by `baseItemKey`. When comparing prices for the 3 outfit items, the engine accesses each bucket in average $O(1)$ time and evaluates 3 platform variants instead of scanning the entire database in $O(N)$ for every query.

---

## 🏗️ How to Build & Run the C++ Project

### Build with CMake
```bash
cd backend
mkdir -p build && cd build
cmake ..
make -j4
./server 8082
```

### Direct Compilation with G++
```bash
cd backend
g++ -std=c++17 -O2 main.cpp database.cpp graph.cpp recommendation.cpp pricing.cpp -lpthread -o server
./server 8082
```

### Run Frontend
```bash
npm install
npm run dev
```

---

## 📁 Repository Structure
```
try-and-buy-store/
├── backend/
│   ├── main.cpp            (Crowcpp REST Server & HTTP API dispatcher)
│   ├── database.h/.cpp     (ClothingItem struct & 180 multi-platform item seed)
│   ├── graph.h/.cpp        (Undirected Graph Adjacency List & BFS Traversal)
│   ├── recommendation.h/.cpp (Max-Heap std::priority_queue outfit ranker)
│   ├── pricing.h/.cpp      (std::unordered_map multi-store lowest price finder)
│   ├── crow_all.h          (Single-header multi-threaded C++ micro-framework)
│   ├── json.hpp            (Single-header nlohmann/json serializer)
│   └── CMakeLists.txt      (C++17 build configuration)
├── src/                    (React 18/19 interactive web app)
│   ├── pages/              (Landing, CategorySelect, ProductGrid, OutfitRecommendation, PriceComparison, OrderSuccess, CppExplorer)
│   ├── components/         (Navbar, ProductCard, ProgressBar, RatingBadge, LoadingSkeleton)
│   └── api/                (client.js & algorithmic engine)
└── README.md               (Academic DSA Project Specification & Viva Guide)
```
