// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Shared components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

// Global styles (DO NOT NEED)
import "./style.css";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shop" element={<Products />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

