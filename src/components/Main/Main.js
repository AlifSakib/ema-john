import React, { useEffect, useState } from "react";
import { addDataToLs, getShoppingCart } from "../../utilities/fakedb";
import Order from "../Order/Order";
import Products from "../Products/Products";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  console.log(carts);

  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exists = carts.find((item) => item.id === selectedProduct.id);

    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...carts, selectedProduct];
    } else {
      const rest = carts.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCarts(newCart);
    addDataToLs(selectedProduct.id);
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCarts(savedCart);
  }, [products]);
  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-6 mt-10 ">
      <div className="col-span-5  w-5/6 mx-auto">
        <Products products={products} addToCart={addToCart}></Products>
      </div>
      <div className="col-span-1 bg-orange-300 mx-auto w-9/12 rounded-lg sticky top-0">
        <Order carts={carts}></Order>
      </div>
    </div>
  );
};

export default Main;
