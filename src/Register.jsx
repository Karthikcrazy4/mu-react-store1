import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import axios from "axios";
import "./Register.css";

export default function Register() {
  const [user, setUser] = useState({ name: "", email: "", pass: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUsers } = useContext(AppContext);
  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await axios.post(
        `${API}/api/users/register`,
        user
      );
      if (!data) throw new Error();
      setUsers((prev) => [...prev, user]);  // optional
      navigate("/login");
    } catch {
      setError("❌ Registration failed");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <div className="error-msg">{error}</div>}
        <label>
          Name
          <input
            type="text"
            value={user.name}
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
            required
            className="input-field"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
            required
            className="input-field"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={user.pass}
            onChange={(e) =>
              setUser({ ...user, pass: e.target.value })
            }
            required
            className="input-field"
          />
        </label>
        <button type="submit" className="submit-btn">
          Sign Up
        </button>
        <p className="login-link">
          Already a member? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
