import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {usestate,createContext} from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
export const Appcontext = createContext();
function App() {
  return (
    <div>
      <App.context.Provider value={{user,setUser}}>
      <BrowserRouter>
        <Header name="mu-react-store" />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </App.context.Provider>
    </div>
  );
}
export default App;