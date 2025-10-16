// Problem 11: Given an array of product objects, check if all products belong to the "Books" category and if at least one product belongs to the "Books" category.

let products = [
    { name: "Checkers", category: "Toys"},
    { name: "Learn PHP", category: "Books"},
    { name: "Football", category: "Toys"},
    { name: "War and Peace", category: "Books"},
    { name: "The Dark Knight", category: "Movies"},
    { name: "Inception", category: "Movies"}
];

let allProductsBooks = true;
let someProductsBooks = false;

products.every((product) => product.category === "Books") ? allProductsBooks = true : allProductsBooks = false;
products.some((product) => product.category === "Books") ? someProductsBooks = true : someProductsBooks = false;

console.log("All products are books: " + allProductsBooks);
console.log("Some products are books: " + someProductsBooks);