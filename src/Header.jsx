import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import "./Header.css";

export default function Header({ name }) {
  const { theme, setTheme } = useTheme();
  const toggle = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="header">
      <h1 className="logo">{name}</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <button onClick={toggle} className="theme-btn">
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </nav>
    </header>
  );
}
