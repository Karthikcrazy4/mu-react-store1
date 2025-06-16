import React, { useContext } from "react";
import { AppContext } from "./App";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const { cart, setCart, email } = useContext(AppContext);
  const navigate = useNavigate();

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

  const buyNow = (item) => {
    setCart({
      id: item.id,
      name: item.name,
      price: item.price,
      desc: item.desc,
      qty: 1,
      email: email,
    });
    navigate("/cart");
  };

  return (
    <div className="home-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.imgUrl} alt={product.name} className="product-img" />
          <h2 className="product-title">{product.name}</h2>
          <p className="product-desc">{product.desc}</p>
          <h4 className="product-price">₹{product.price}</h4>
          <button className="buy-btn" onClick={() => buyNow(product)}>Buy Now</button>
        </div>
      ))}
    </div>
  );
}
