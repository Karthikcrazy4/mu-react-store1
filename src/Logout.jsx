import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";

export default function Logout() {
  const { setEmail, setCart } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    // clear auth & cart
    setEmail(null);
    setCart({});
    // send ’em back to login
    navigate("/login");
  }, [setEmail, setCart, navigate]);

  return <p>Logging out…</p>;
}
