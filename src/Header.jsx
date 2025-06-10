import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
export default function Header({ name }) {
  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate("/buynow");
  };
  return (
    <div className="App-Header-Row" style={{ backgroundColor: "pink" }}>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <button
              onClick={handleCartClick}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <h1>cart</h1>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
