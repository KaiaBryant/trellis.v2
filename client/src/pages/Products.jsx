import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/styles/Products.css";


export default function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                setProducts(res.data);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to load products");
            }
        };
        fetchProducts();
    }, []);

    return (
        <div id="product-list">
            {error && <p style={{ color: "red" }}>{error}</p>}

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
                        <p>${Number(product.price).toFixed(2)}</p>
                        <p className="description">{product.description}</p>
                    </div>
                ))
            ) : (
                !error && <p>Loading products...</p>
            )}
        </div>
    );
}
