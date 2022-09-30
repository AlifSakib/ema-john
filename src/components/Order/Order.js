import React from "react";

const Order = ({ carts }) => {
  let totalPrice = 0;
  let totalShippingCost = 0;
  let quantity = 0;

  for (const product of carts) {
    quantity = product.quantity + quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShippingCost = totalShippingCost + product.shipping * product.quantity;
  }
  const tax = parseFloat((totalPrice * 0.1).toFixed(2));
  return (
    <div className="font-lora">
      <h1 className="font-bold text-xl py-6">Order Summary</h1>
      <div className="text-start px-6 font-bold space-y-6">
        <p>Selected Product : {quantity}</p>
        <p>Total Price : ${totalPrice}</p>
        <p>Total Shipping : ${totalShippingCost}</p>
        <p>Tax : ${tax}</p>
      </div>
      <p className="text-xl font-bold py-6">
        Grand Total : ${totalPrice + totalShippingCost + tax}
      </p>
    </div>
  );
};

export default Order;
