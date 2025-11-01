import React from "react";

const ProductInfo = ({ productList }) => {
  return (
    <div style={{ background: "violet", margin: 8, padding: 6 }}>
      <h2>Products Info</h2>

      {
      productList.length === 0 ? (
        <h4>No products available</h4>
      ) : (
        productList.map(({ name, price, availability }, index) => {
          if (availability !== "Out of stock") {
            return (
              <div key={index}>
                <h4>
                  Item-{index + 1} : {name}
                </h4>
                <h4>Price : ${price}</h4>
                <h4>Availability : {availability}</h4>
              </div>
            );
          }
        })
      )
      }
    </div>
  );
};

export default ProductInfo;
