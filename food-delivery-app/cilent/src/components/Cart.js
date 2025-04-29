import React from 'react';

const Cart = ({ cartItems }) => (
  <div className="cart">
    <h2>Cart</h2>
    {cartItems.map((item, idx) => (
      <div key={idx}>{item.name} - ${item.price}</div>
    ))}
    <button>Checkout</button>
  </div>
);

export default Cart;