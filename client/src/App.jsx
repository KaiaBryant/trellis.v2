// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Shared components
import Header from "./components/Header";
// import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Contact from "./pages/Contact";

// Global styles (optional)
import "./style.css";

export default function App() {
    return (
        <Router>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </main>

            {/* <Footer /> */}
        </Router>
    );
}
