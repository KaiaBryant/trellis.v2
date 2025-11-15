import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";
import mysql from "mysql2";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: "trellisv2.up.railway.app", // frontend Railway domain
    methods: "GET,POST,PUT,DELETE",
}));
app.use(express.json());

// Serve images
app.use("/images", express.static("images"));


// Routes
app.post("/api/contact", (req, res) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        seed,
        comments
    } = req.body;

    // Convert React fields → SQL fields
    const sql = `
        INSERT INTO contact (first_name, last_name, email, phone, seed_option, comments)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [firstName, lastName, email, phone, seed, comments],
        (err, result) => {
            if (err) {
                console.error("DB INSERT ERROR:", err);
                return res.status(400).json({ error: "Failed to submit form" }); // prevents 500 crash
            }

            res.status(200).json({ message: "Form submitted successfully!" });
        }
    );
});


app.get("/api/products", (req, res) => {
    const { category } = req.query;

    let query = "SELECT * FROM products";
    const params = [];

    if (category) {
        query += " WHERE category = ?";
        params.push(category);
    }

    db.query(query, params, (err, results) => {
        if (err) return res.status(500).json({ error: "DB Error" });
        res.json(results);
    });
});



// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
