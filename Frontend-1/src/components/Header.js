import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>S&Y Shopping Center</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/aboutus">AboutUs</Link>
      </nav>
    </header>
  );
};

export default Header;
