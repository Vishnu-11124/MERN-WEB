import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const Sidebar = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setKeyword,
    searchQuery,
    setSearchQuery,
  } = useFilter();

  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };

    fetchCategories();
  }, []);




  return (
    <div className="w-64 p-4 h-screen bg-white border-r border-gray-200">
      <h1 className="text-2xl text-center font-bold my-3 text-gray-900">React Store</h1>

      <section>
        <input
          type="text"
          placeholder="Search Product"
          className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full mb-4 focus:outline-none focus:border-blue-500 transition-colors"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex justify-center items-center gap-2 mb-6">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={(e) => setMinPrice(parseFloat(e.target.value))}
          />
          <input
            type="text"
            className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
          />
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Categories</h2>
        </div>

        <section className="flex flex-col mb-4">
          {categories.map((catgory, index) => (
            <label key={index} className="blck mb-2 cursor-pointer hover:text-blue-600 transition-colors flex items-center text-gray-700">
              <input
                type="radio"
                name="category"
                value={catgory}
                checked={selectedCategory === catgory}
                onChange={() => setSelectedCategory(catgory)}
                className="mr-2 w-[16px] h-[16px] accent-blue-600"
              />
              {catgory.toUpperCase()}
            </label>
          ))}   
        </section>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Keywords</h2>
          <div className="flex flex-col">
            {keywords.map((keyword, index) => (
              <button
                key={index}
                className="bg-gray-200 hover:bg-gray-300 rounded-lg px-3 py-1 mr-2 mb-2 transition-colors text-sm text-gray-700"
                onClick={() => setKeyword(keyword)}
              >
                {keyword.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button
            onClick={() => {
                setSelectedCategory("");
                setMinPrice(undefined);
                setMaxPrice(undefined);
                setKeyword("");
                setSearchQuery("");
            }}
            className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors mt-4">
          Reset Filters
        </button>
      </section>
    </div>
  );
};

export default Sidebar;