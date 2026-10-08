import Link from "next/link";
import React from "react";
import { productsData } from "@/data/data";
import { ProductDetails } from "@/types/type";

const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

const page = () => {
  const productList: ProductDetails[] | [] = productsData;
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <h2 className="text-4xl font-semibold tracking-tight text-white">
        Products
      </h2>
      <p className="mt-3 text-lg text-neutral-400">Top selling products</p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {productList.map((product) => (
          <Link
            key={product.productId}
            href={`/products/${product.productId}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            {/* Image */}
            <div className="aspect-square overflow-hidden bg-white/5">
              <img
                src={`${product.image}?auto=format&fit=crop&w=600&q=80`}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="text-lg font-semibold leading-snug text-white">
                  {product.name}
                </p>
                <p className="shrink-0 text-lg font-medium text-white">
                  {formatPrice(product.price)}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200">
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default page;
