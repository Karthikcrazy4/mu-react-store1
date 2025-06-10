import { useState, createContext, use} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './Footer.jsx';
import './Header.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register.jsx';
export const AppContext = createContext()
function App() {
  const [user, setUser] = useState({});
  const[users,SetUsers] = useState([]);

  return (
    <div>
      <AppContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Header name="Mu-React-Store" />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;