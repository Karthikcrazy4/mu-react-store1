import React, { useContext } from 'react';
import { Appcontext } from './App';

export default function Cart() {
  // Render cart details or a placeholder
  return (
    <div>
      <h2>Cart</h2>
      {/* Render cart details here */}
      {cart ? (
        <div>
          <p>Name: {cart.name}</p>
          <p>Description: {cart.desc}</p>
          <p>Price: {cart.price}</p>
          <p>Quantity: {cart.qty}</p>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
