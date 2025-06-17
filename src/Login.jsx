import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import axios from "axios";
import "./Login.css";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setEmail } = useContext(AppContext);
  const API = import.meta.env.VITE_API_URL;

  // Handle redirect flow (mobile fallback)
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          setEmail(result.user.email);
          navigate("/");
        }
      })
      .catch(() => {});
  }, [navigate, setEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      const { data } = await axios.post(`${API}/api/users/login`, credentials);
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
      // Try popup first
      const result = await signInWithPopup(auth, provider);
      if (result?.user) {
        setEmail(result.user.email);
        navigate("/");
      }
    } catch {
      // Popup failed (mobile/blocked), fallback to redirect
      signInWithRedirect(auth, provider);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Log in to your account</h2>
        <p className="subtext">Enter your email and password to sign in</p>

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
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            required
            className="input-field"
            autoComplete="username"
            autoCapitalize="none"
            autoCorrect="off"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
            className="input-field"
            autoComplete="current-password"
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