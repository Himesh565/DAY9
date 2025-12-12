import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  // ------------------ INVALID PRODUCT (Error Handling) ------------------
  if (!product) {
    return (
      <div className="container fade-animation" style={{ paddingTop: "20px" }}>
        <h2 style={{ color: "var(--text)", marginBottom: "12px" }}>
          Product Not Found
        </h2>

        <p style={{ color: "var(--muted)", marginBottom: "20px" }}>
          The product you are trying to view does not exist.
        </p>

        <Link to="/products" className="btn btn-primary">
          ← Back to Products
        </Link>
      </div>
    );
  }

  // ------------------ VALID PRODUCT DETAILS ------------------
  return (
    <div className="container fade-animation" style={{ paddingTop: "20px" }}>

      {/* Back Button */}
      <Link
        to="/products"
        className="btn btn-outline"
        style={{ marginBottom: "20px" }}
      >
        ← Back to Products
      </Link>

      <div
        style={{
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        {/* ------------------ PRODUCT IMAGE ------------------ */}
        <div
          style={{
            flex: "1 1 320px",
            background: "var(--card-bg)",
            padding: "16px",
            borderRadius: "14px",
            boxShadow: "var(--shadow)",
          }}
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            style={{
              width: "100%",
              height: "320px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </div>

        {/* ------------------ PRODUCT INFO ------------------ */}
        <div style={{ flex: "1 1 320px" }}>
          <h1 style={{ marginBottom: "10px" }}>{product.title}</h1>

          <h2
            style={{
              color: "var(--accent)",
              marginBottom: "16px",
              fontWeight: "700",
            }}
          >
            ${product.price}
          </h2>

          <p
            style={{
              color: "var(--muted)",
              marginBottom: "20px",
              lineHeight: "1.6",
            }}
          >
            {product.description}
          </p>

          {/* Specifications */}
          <h3 style={{ marginBottom: "10px" }}>Specifications</h3>
          <ul style={{ color: "var(--text)", lineHeight: "1.8" }}>
            {product.specs.map((spec, index) => (
              <li key={index}>• {spec}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
