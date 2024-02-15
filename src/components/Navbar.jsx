import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div id="navbar">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/teams" className="link">
          Teams
        </Link>
        <Link to="/add" className="link">
          Add a Player
        </Link>
      </div>
    </>
  );
}

export default Navbar;
