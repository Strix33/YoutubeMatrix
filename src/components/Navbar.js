import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>🎥 Video Streaming</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
      </div>
    </nav>
  );
};

export default Navbar;
