import React from "react";
import Product from "../Product/Product";

const Products = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-5 ">
      {products.map((product, index) => (
        <Product product={product} key={index} addToCart={addToCart}></Product>
      ))}
    </div>
  );
};

export default Products;
