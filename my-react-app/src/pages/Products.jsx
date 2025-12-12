import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  // Search filter logic
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container" style={{ paddingTop: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Products</h1>

      {/* ---------- SEARCH BAR SECTION ---------- */}
      <div style={{ marginBottom: "24px" }}>
        <label
          htmlFor="search"
          style={{
            display: "block",
            marginBottom: "8px",
            fontSize: "16px",
            color: "var(--text)",
            fontWeight: "600",
          }}
        >
          Search Products
        </label>

        <input
          id="search"
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "380px",
            padding: "12px 15px",
            borderRadius: "10px",
            border: "1.5px solid #334155",
            outline: "none",
            background: "var(--card-bg)",
            color: "var(--text)",
            fontSize: "15px",
            transition: "0.25s ease",
          }}
          onFocus={(e) => (e.target.style.border = "1.5px solid var(--accent)")}
          onBlur={(e) => (e.target.style.border = "1.5px solid #334155")}
        />
      </div>

      {/* ---------- PRODUCT GRID ---------- */}
      <div className="grid grid-columns-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={{ color: "var(--muted)" }}>No products found.</p>
        )}
      </div>
    </div>
  );
}
