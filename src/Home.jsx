import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import { ChromaGrid } from "./ChromaGrid";
import "./Home.css";

export default function Home() {
  const { setCart, email } = useContext(AppContext);
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Smartphone", desc: "64GB, 4G LTE, Dual SIM", price: 12999, imgUrl: "https://picsum.photos/id/1015/300/300" },
    { id: 2, name: "Headphones", desc: "Noise Cancelling, Bluetooth 5.0", price: 2999, imgUrl: "https://picsum.photos/id/1025/300/300" },
    { id: 3, name: "Laptop", desc: "15.6 inch, 8GB RAM, 512GB SSD", price: 49999, imgUrl: "https://picsum.photos/id/1003/300/300" },
    { id: 4, name: "Smartwatch", desc: "Heart rate, Sleep monitor", price: 5999, imgUrl: "https://picsum.photos/id/1040/300/300" },
    { id: 5, name: "Gaming Mouse", desc: "RGB, High DPI, Wired", price: 1499, imgUrl: "https://picsum.photos/id/1060/300/300" },
    { id: 6, name: "Bluetooth Speaker", desc: "Waterproof, 10W Output", price: 2199, imgUrl: "https://picsum.photos/id/1070/300/300" },
    { id: 7, name: "Wireless Charger", desc: "Fast Charge 15W", price: 999, imgUrl: "https://picsum.photos/id/1080/300/300" },
    { id: 8, name: "Backpack", desc: "Water-resistant, 25L", price: 1799, imgUrl: "https://picsum.photos/id/1084/300/300" },
    { id: 9, name: "Keyboard", desc: "Mechanical, RGB, USB", price: 2499, imgUrl: "https://picsum.photos/id/109/300/300" },
  ];

  const handleCardClick = (item) => {
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

  // Convert to ChromaGrid format
  const chromaData = products.map((item) => ({
    title: item.name,
    subtitle: item.desc,
    price: item.price,
    image: item.imgUrl,
    handle: `₹${item.price}`,
    borderColor: "#06b6d4",
    gradient: "linear-gradient(145deg, #06b6d4, #000)",
    onClick: () => handleCardClick(item),
  }));

  return (
    <div style={{ padding: "2rem" }}>
      <ChromaGrid items={chromaData} columns={3} rows={3} radius={300} />
    </div>
  );
}
