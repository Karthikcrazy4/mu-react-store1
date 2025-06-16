// src/Cart.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import { FaShoppingCart } from "react-icons/fa";   // ← import cart icon
import "./Cart.css";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, setCart, orders, setOrders } = useContext(AppContext);

  const increment = () => setCart({ ...cart, qty: cart.qty + 1 });
  const decrement = () => cart.qty > 0 && setCart({ ...cart, qty: cart.qty - 1 });

  const placeOrder = () => {
    setOrders([...orders, cart]);
    setCart({});
    navigate("/order");
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">
        <FaShoppingCart style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />
        My Cart
      </h2>

      {Object.keys(cart).length > 0 ? (
        <>
          <h3 className="cart-item-name">{cart.name}</h3>
          <p className="cart-desc">{cart.desc}</p>
          <h3 className="cart-price">Price: ₹{cart.price}</h3>

          <div className="qty-controls">
            <button onClick={decrement}>–</button>
            <span>{cart.qty}</span>
            <button onClick={increment}>＋</button>
          </div>

          <hr />

          <h2 className="cart-total">
            Order Value: ₹{cart.price * cart.qty}
          </h2>

          <hr />

          <div className="cart-actions">
            <button onClick={placeOrder}>Place Order</button>
          </div>
        </>
      ) : (
        <h3 className="cart-empty">Your cart is empty</h3>
      )}
    </div>
  );
}
