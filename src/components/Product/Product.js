import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Product = ({ product, addToCart }) => {
  const { name, img, price, ratings, seller } = product;
  return (
    <div className="w-52 h-[400px] rounded-lg relative my-6 shadow-lg">
      <img className="rounded-t-lg" src={img} alt="" />
      <div className="text-start mx-4 space-y-8">
        <div className="py-2">
          <h1 className="text-sm font-bold">{name.slice(0, 20)}</h1>
          <p className="mt-2">Price : ${price}</p>
        </div>
        <div>
          <p>
            <small>Rating : {ratings}</small>
          </p>
          <p>
            <small>Manufacturer : {seller}</small>
          </p>
        </div>
      </div>
      <div>
        <button
          onClick={() => addToCart(product)}
          className="flex items-center w-full justify-center space-x-3 bg-orange-300 rounded-lg absolute bottom-0 py-1"
        >
          <p>Add To Cart</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
