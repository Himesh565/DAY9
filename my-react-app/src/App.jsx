import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import About from "./pages/About";

/**
 * App defines the Routes for the whole site, using react-router-dom v6.
 * - /               -> Home
 * - /products       -> Products list and search
 * - /products/:id   -> Product details (dynamic route)
 * - *               -> Fallback handled in ProductDetails when product not found or we could add a NotFound page
 */
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        {/* Generic fallback route (optional): */}
        <Route path="*" element={<div style={{ padding: 24 }}>Page not found. <a href="/">Go home</a></div>} />
      </Routes>
    </Layout>
  )
}
