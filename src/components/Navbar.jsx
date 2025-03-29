import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-item">Home</NavLink>
      <NavLink to="/about" className="nav-item">About</NavLink>
      <NavLink to="/users" className="nav-item">Users</NavLink>
      <NavLink to="/contact" className="nav-item">Contact</NavLink>
      <NavLink to="/not-found" className="nav-item">Not Found</NavLink>
    </nav>
  );
};

export default Navbar;
