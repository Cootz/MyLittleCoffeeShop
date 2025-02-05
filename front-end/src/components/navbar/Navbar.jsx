import './navbar.css';
import { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt=""/>
                    <span>My little Coffee Shop</span>
                </a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="right">
                <a href="/cart">
                    <img src="/cart.png" alt="cart"/>
                </a>
                <a className="user" href="/login">

                    <img src="/user.png" alt="user"/>
                </a>
                <div className="menuIcon">
                    <img 
                        src="/menu.png"
                        alt=""
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className={open ? "menu open" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/cart">Cart</a>
                    <a href="/login">Log in</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
