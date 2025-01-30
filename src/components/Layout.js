import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import "../styles/Layout.css";


function Layout() {
  return (
    <div className="layout-container">
        <Header />
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout