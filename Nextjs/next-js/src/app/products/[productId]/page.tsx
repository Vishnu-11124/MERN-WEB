import { productsData } from "@/data/data";
import { ProductDetails } from "@/types/type";

import React from "react";

const SingleProduct = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {

  const { productId } = await params;

  const product: ProductDetails | undefined = productsData.find(
    (p) => p.productId === productId
  );
  return (
    product && (
      <div>
        <h2>{product.name}</h2>
      </div>
    )
  );
};

export default SingleProduct;
