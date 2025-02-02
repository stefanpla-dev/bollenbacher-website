import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link to="/live-performances">Live Performances</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar