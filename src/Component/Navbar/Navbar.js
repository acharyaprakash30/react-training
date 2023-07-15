import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link className="linkItem" to="/">Home</Link></li>
        <li><Link className="linkItem"  to="about">About</Link></li>
        <li><Link className="linkItem"  to="contact">Contact</Link></li>
        <li><Link className="linkItem"  to="product">Product</Link></li>
        <li><Link className="linkItem"  to="counter">Counter</Link></li>
        <li><Link className="linkItem"  to="register">Register</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
