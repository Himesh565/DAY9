import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";

export default function Layout({ children }) {

  // ALWAYS FORCE DARK MODE
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <div className="app fade-animation">

      {/* ---------- HEADER ---------- */}
      <header className="site-header">
        <div className="container header-inner">

          <Link to="/" className="brand">
            <img src="/src/assets/logo.svg" alt="Logo" className="logo" />
            <span>Product Showcase</span>
          </Link>

          <nav className="site-nav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
          </nav>

        </div>
      </header>

      {/* ---------- MAIN CONTENT ---------- */}
      <main className="container">{children}</main>

      {/* ---------- FOOTER ---------- */}
      <footer className="site-footer">
        <div className="container footer-inner">
          © {new Date().getFullYear()} Product Showcase
        </div>
      </footer>

    </div>
  );
}
