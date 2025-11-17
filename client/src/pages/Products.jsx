import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../assets/styles/Products.css";


// Initiate setter function using useState to remember data between renders 
export default function Products() { // defining functional compenent to fetch + display 
    const [products, setProducts] = useState([]); // hold and updates products
    const [category, setCategory] = useState(""); // stores category. begins with no filters applied
    const [error, setError] = useState(""); // stores errors 
    const location = useLocation(); // from react-router-dom to route data
    const api = import.meta.env.VITE_API_URL; // deployed backend env


    // When navigating from the homepage load category
    useEffect(() => {
        if (location.state && location.state.category) { // checks if a category is passed 
            setCategory(location.state.category);  // if so, update category state
        }
    }, [location.state]);

    // Fetch products from API
    const fetchProducts = async () => {
        try {
            const params = {}; // empty object to hold filter query params
            if (category) params.category = category; // once selected, inlcude query 

            const res = await axios.get(`${api}/api/products`, { params }); //axios converts 
            setProducts(Array.isArray(res.data) ? res.data : []); //stores retuened product list in state

            setError(""); // clear previous errors on success
        } catch (err) { // show error messages 
            console.error("Error fetching products:", err);
            setError("Failed to load products");
        }
    };

    // Run fetch whenever filters or category change
    useEffect(() => {
        fetchProducts(); // run whenever category changes, reload automatically
    }, [category]);

    return (
        <div className="products-page">
            <h2 className="products-title">
                {category ? `Shop ${category}` : "Shop All"}
            </h2>

            {/* Filter section */}
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

            </div>

            {/* Product Grid */}
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
            <div id="product-list">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div className="product" key={product.id}>
                            <img
                                src={`${api}${product.default_image}`}
                                alt={product.name}
                                className="product-image"
                                onMouseOver={(e) => (e.currentTarget.src = `${api}${product.hover_image}`)}
                                onMouseOut={(e) => (e.currentTarget.src = `${api}${product.default_image}`)}
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

