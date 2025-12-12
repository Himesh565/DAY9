import React from "react";
import { Link } from "react-router-dom";
import "../styles/product-card.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">

      {/* ---------- PRODUCT IMAGE ---------- */}
      <div className="product-image">
        <img
          src={product.imageUrl}
          alt={product.title}
          loading="lazy"
        />
      </div>

      {/* ---------- PRODUCT DETAILS ---------- */}
      <div className="product-content">

        <h3 className="product-title">
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </h3>

        <p className="product-desc">{product.description}</p>

        <div className="product-bottom">
          <span className="product-price">${product.price}</span>

          <Link className="btn btn-primary" to={`/products/${product.id}`}>
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
}
