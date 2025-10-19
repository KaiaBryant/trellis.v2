import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";
import mysql from "mysql2";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Verify DB connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("Connected to MySQL database successfully!");
        connection.release();
    }
});


// Routes
app.post("/api/contact", async (req, res) => {
    try {
        const { firstName, lastName, email, phone, seed, comments } = req.body;

        // Validation 
        if (!firstName || !lastName || !email || !phone || !seed) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const [result] = await pool.query(
            `INSERT INTO contacts (first_name, last_name, email, phone, seed_choice, comments)
       VALUES (?, ?, ?, ?, ?, ?)`,
            [firstName, lastName, email, phone, seed, comments]
        );

        res.status(201).json({ message: "Contact submitted successfully!", id: result.insertId });
    } catch (error) {
        console.error("Error inserting contact:", error);
        res.status(500).json({ error: "Server error" });
    }
});


app.get("/api/products", async (req, res) => {
    try {
        const { category, minPrice, maxPrice } = req.query;
        let query = "SELECT * FROM products WHERE 1=1";
        const values = [];

        if (category) {
            query += " AND category = ?";
            values.push(category);
        }

        if (minPrice) {
            query += " AND price >= ?";
            values.push(minPrice);
        }

        if (maxPrice) {
            query += " AND price <= ?";
            values.push(maxPrice);
        }

        const [rows] = await pool.query(query, values);
        res.json(rows);
    } catch (err) {
        console.error("Error fetching products:", err);
        res.status(500).json({ error: "Server error" });
    }
});


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
