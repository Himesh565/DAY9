import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  const featured = products.slice(0, 4); // First 4 featured products

  return (
    <div>

      {/* ---------- HERO SECTION ---------- */}
      <section
        className="hero hero-animate"
        style={{
          background: "linear-gradient(135deg, var(--accent), #1e3a8a)",
          padding: "60px 30px",
          borderRadius: "20px",
          color: "white",
          marginBottom: "40px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "12px" }}>
          Modern Product Showcase
        </h1>

        <p
          style={{
            maxWidth: "650px",
            lineHeight: "1.7",
            fontSize: "18px",
            fontWeight: "500",
            color: "rgba(255,255,255,0.92)", // OPTION 1 COLOR
            marginBottom: "20px",
          }}
        >
          Explore high-quality products with a clean, fast, and modern interface.
          Built using Vite + React + React Router with Dark Mode and smooth animations.
        </p>

        <Link
          to="/products"
          className="btn btn-primary"
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            borderRadius: "10px",
          }}
        >
          Browse Products →
        </Link>
      </section>

      {/* ---------- FEATURED PRODUCTS ---------- */}
      <section className="section">
        <h2 style={{ marginBottom: "12px" }}>Featured Products</h2>
        <p style={{ color: "var(--muted)", marginBottom: "24px" }}>
          Top picks specially selected for you
        </p>

        <div className="grid grid-columns-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div style={{ marginTop: "20px" }}>
          <Link
            to="/products"
            className="btn btn-outline"
            style={{
              padding: "10px 16px",
              borderRadius: "10px",
              fontWeight: "600",
            }}
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* ---------- ABOUT PREVIEW SECTION ---------- */}
      <section className="section" style={{ marginTop: "50px" }}>
        <h2 style={{ marginBottom: "10px" }}>Who We Are</h2>
        <p style={{ 
            maxWidth: "720px", 
            color: "var(--muted)", 
            lineHeight: "1.7" 
        }}>
          We are a passionate team creating high-performance user interfaces and
          modern web applications using React & Vite. Our mission is to build
          beautiful and responsive UI experiences curated for your needs.
        </p>

        <Link
          to="/about"
          className="btn btn-primary"
          style={{
            marginTop: "16px",
            padding: "10px 18px",
            borderRadius: "10px",
          }}
        >
          Learn More →
        </Link>
      </section>

    </div>
  );
}
