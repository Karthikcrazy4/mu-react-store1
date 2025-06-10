
import React from "react";
import "./Home.css";
import { AppContext } from "./App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const {cart,setCart} = useContext(AppContext)
  const products = [
    {
      id: 1,
      name: "Product 1",
      desc: "This is the description of the product",
      price: 200000,
      imgUrl: "https://images.unsplash.com/photo-1749482843703-3895960e7d63?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Product 2",
      desc: "This is the description of the product",
      price: 100000,
      imgUrl: "https://images.unsplash.com/photo-1728443433557-3fc9e37b58c2?q=80&w=2473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Product 3",
      desc: "This is the description of the product",
      price: 75000,
      imgUrl: "https://picsum.photos/id/3/300/300",
    },
  ];
  const Navigate = useNavigate();
  const buyNow = (obj) => {
    setCart({
      id: obj.id,
      name: obj.name,
      price: obj.price,
      desc: obj.desc,
      qty: 1,
    });
    Navigate("/cart");
  };
  return (
    <div className="App-Home-Row">
      {products.map((product) => (
        <div>
          <img src={product.imgUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <h4>{product.price}</h4>
          <p>
            <button onClick={() => buyNow(product)}>Buy now</button>
          </p>
        </div>
      ))}
    </div>
  );
}
