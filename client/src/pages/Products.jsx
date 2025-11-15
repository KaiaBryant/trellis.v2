import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../assets/styles/Products.css";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");

    const [error, setError] = useState("");

    const location = useLocation();

    // When navigating from the homepage load category
    useEffect(() => {
        if (location.state && location.state.category) {
            setCategory(location.state.category);
        }
    }, [location.state]);

    // Fetch products with filters
    const fetchProducts = async () => {
        try {
            const params = {};
            if (category) params.category = category;

            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/contact`, { params });
            setProducts(res.data);
            setError("");
        } catch (err) {
            console.error("Error fetching products:", err);
            setError("Failed to load products");
        }
    };

    // Run fetch whenever filters or category change
    useEffect(() => {
        fetchProducts();
    }, [category]);

    return (
        <div className="products-page">
            <h2 className="products-title">
                {category ? `Shop ${category}` : "Shop All"}
            </h2>

            {/* FILTER SECTION */}
            <div className="filter-container">
                <div className="filter-group">
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Seeds">Seeds</option>
                        <option value="Soil">Soil</option>
                        <option value="Planters">Planters</option>
                        <option value="Accessories">Accessories</option>
                    </select>
                </div>

                {/* PRICE RANGE */}
                {/* <div className="filter-group">
                    <label>Price Range: ${minPrice} - ${maxPrice}</label>
                    <div className="range-inputs">
                        <input
                            type="range"
                            min="0"
                            max="150"
                            value={minPrice}
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                        />
                        <input
                            type="range"
                            min="0"
                            max="150"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                        />
                    </div>
                </div> */}
            </div>

            {/* PRODUCT GRID */}
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
            <div id="product-list">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div className="product" key={product.id}>
                            <img
                                src={`http://localhost:5000${product.default_image}`}
                                alt={product.name}
                                className="product-image"
                                onMouseOver={(e) => {
                                    e.currentTarget.src = `http://localhost:5000${product.hover_image}`;
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.src = `http://localhost:5000${product.default_image}`;
                                }}
                            />
                            <h4>{product.name}</h4>
                            <p className="price">${Number(product.price).toFixed(2)}</p>
                            <p className="description">{product.description}</p>
                        </div>
                    ))
                ) : (
                    !error && <p style={{ textAlign: "center" }}>No products found.</p>
                )}
            </div>
        </div>
    );
}

