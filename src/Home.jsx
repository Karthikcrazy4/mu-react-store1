import React, { useContext, useState } from "react";
import "./Home.css"
import { Appcontext } from "./App";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [cart, setCart] = useContext(Appcontext);
  const products = [
    {
      id: 1,
      name: "Product 1",
      desc: "This is the description of the product",
      price: 45,
      imgUrl: "https://picsum.photos/id/1/300/300",
    },
    {
      id: 2,
      name: "Product 2",
      desc: "This is the description of the product",
      price: 50,
      imgUrl: "https://picsum.photos/id/2/300/300",
    },
    {
      id: 3,
      name: "Product 3",
      desc: "This is the description of the product",
      price: 75,
      imgUrl: "https://picsum.photos/id/3/300/300",
    },
  ];
  const navigate = useNavigate();
  const BuyNow = (obj) => {
    setCart({
      id: obj.id,
      name: obj.name,
      desc: obj.desc,
      price: obj.price,
      qty: 1,
    });
    navigate("/Cart");
  };

  return (
    <div className="App-Home-Row">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.imgUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <h4>{product.price}</h4>
          <p><button onClick={() => BuyNow(product)}>Add to Cart</button></p>
        </div>
      ))}
    </div>
  );
}
