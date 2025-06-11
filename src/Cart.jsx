import React from "react";
import { AppContext } from "./App";
import { useContext } from "react";
export default function Cart() {
  const { cart, setCart, email } = useContext(AppContext);
  const increment = () => {
    setCart({ ...cart, qty: cart.qty + 1 });
  };

  const decrement = () => {
    cart.qty > 0 && setCart({ ...cart, qty: cart.qty - 1 });
  };
  return (
    <div>
      <h2>My Cart</h2>
      <h3>{cart.name}</h3>
      <p>{cart.desc}</p>
      <h3>Price:{cart.price}</h3>
      <p>
        <button onClick={decrement}>-</button>
        {cart.qty}
        <button onClick={increment}>+</button>
      </p>
      <hr />
      <h2>Order Value:{cart.price * cart.qty}</h2>
      <hr />
      <p>
        {email ? <button>Place Order</button> : <button>Login to Order</button>}
      </p>
    </div>
  );
}