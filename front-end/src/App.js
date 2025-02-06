import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import LogIn from './pages/login/LogIn';
import SignUp from './pages/signup/signup';
import Navbar from './components/navbar/Navbar';
import './App.css';
import './layout.css';

import './responsive.css';


export default function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<LogIn/>} />
            <Route path="/signup" element={<SignUp/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}