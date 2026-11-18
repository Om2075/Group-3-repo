cmake_minimum_required(VERSION 3.15)
project(TryAndBuyServer)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(server
    main.cpp
    database.cpp
    graph.cpp
    recommendation.cpp
    pricing.cpp
)

find_package(Threads REQUIRED)
target_link_libraries(server Threads::Threads)
target_include_directories(server PRIVATE ${CMAKE_SOURCE_DIR})
