import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import axios from "axios";
import "./Login.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function Login() {
  const [user, setUser] = useState({ email: "", pass: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setEmail } = useContext(AppContext);
  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await axios.post(`${API}/api/users/login`, user);
      if (!data?.email) throw new Error();
      setEmail(data.email);
      navigate("/");
    } catch {
      setError("❌ Access Denied");
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      const result = await signInWithPopup(auth, provider);
      const profile = result.user;
      setEmail(profile.email);
      navigate("/");
    } catch {
      setError("❌ Google sign-in failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Log in to your account</h2>
        <p className="subtext">Enter your email and password to sign in</p>

        {/* OAuth button styled like create-account screen */}
        <button
          type="button"
          className="oauth-btn google-btn"
          onClick={handleGoogleSignIn}
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google logo"
            className="icon"
          />
          Google
        </button>

        <div className="divider"><span>OR CONTINUE WITH</span></div>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={user.pass}
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
            required
            className="input-field"
          />
          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>

        <p className="register-link">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>

        {error && <div className="error-msg">{error}</div>}
      </div>
    </div>
  );
}