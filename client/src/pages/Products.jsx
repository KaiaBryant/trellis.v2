import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../assets/styles/Products.css";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(150);
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

            const res = await axios.get("http://localhost:5000/api/products", { params });
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
                {category ? `${category} Products` : "All Products"}
            </h2>

            {/* Filter Section */}
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
                        <option value="Pots">Pots</option>
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

            {/* Product Grid */}
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
            <div id="product-list">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div className="product" key={product.id}>
                            <img
                                src={product.image_default}
                                alt={product.name}
                                className="product-image"
                                onMouseOver={(e) => (e.currentTarget.src = product.image_hover)}
                                onMouseOut={(e) => (e.currentTarget.src = product.image_default)}
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

