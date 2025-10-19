// src/pages/Contact.jsx
import React, { useState } from "react";
import axios from "axios";
// import "../assets/styles/Contact.css";




export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        seed: "",
        comments: "",
    });

    const [message, setMessage] = useState("");

    // Regex patterns (same as your JS)
    const nameReg = /^[A-Za-zÀ-ÖØ-öø-ÿ'-]{1,20}$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
    const phoneReg = /^\d{10}$/;

    // Update form state on input
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = [];

        if (!nameReg.test(formData.firstName)) {
            errors.push("Invalid first name (letters, hyphens, apostrophes only).");
        }
        if (!nameReg.test(formData.lastName)) {
            errors.push("Invalid last name (letters, hyphens, apostrophes only).");
        }
        if (!emailReg.test(formData.email)) {
            errors.push("Invalid email address.");
        }
        if (!phoneReg.test(formData.phone)) {
            errors.push("Phone number must be 10 digits.");
        }

        const wordCount = (str) => (str.trim().match(/\S+/g) || []).length;
        if (wordCount(formData.comments) > 250) {
            errors.push("Comments cannot exceed 250 words.");
        }

        if (errors.length > 0) {
            alert("Please fix the following:\n\n" + errors.join("\n"));
            return;
        }

        try {
            // Send data to backend API
            const res = await axios.post("http://localhost:5000/api/contact", formData);
            setMessage("Form submitted successfully!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                seed: "",
                comments: "",
            });
        } catch (error) {
            console.error(error);
            setMessage("There was a problem submitting your form.");
        }
    };

    return (
        <div className="contact-main">
            <div className="contact__img">
                <img src="/images/contact-page-img.jpg" alt="potting accessories" />
            </div>
            <div className="contact__text">
                <h2>LET'S GROW TOGETHER!</h2>
                <p>
                    We want to share our love for growing. Sign up below for a free starter kit that includes a pack of seeds
                    of your choice, a starter pot, and sample soil.
                </p>
            </div>

            <section className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div>
                            <label htmlFor="first-name">First Name:</label>
                            <input id="firstName" type="text" value={formData.firstName} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="last-name">Last Name:</label>
                            <input id="lastName" type="text" value={formData.lastName} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="hello@trellis.com" />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number:</label>
                            <input id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="0000000000" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="seed">Choose your seed:</label>
                        <input list="seed-options" id="seed" value={formData.seed} onChange={handleChange} required />
                        <datalist id="seed-options">
                            <option value="Bell Pepper" />
                            <option value="Herb Trio" />
                            <option value="Strawberries" />
                            <option value="Peas" />
                            <option value="Carrots" />
                            <option value="Cherry Tomatoes" />
                            <option value="Jalapeños" />
                            <option value="Zucchini" />
                        </datalist>
                    </div>

                    <div>
                        <label htmlFor="comments">Comments:</label>
                        <textarea id="comments" rows="5" value={formData.comments} onChange={handleChange} placeholder="Type your message here..." />
                    </div>

                    <button type="submit">Submit</button>
                </form>

                {message && <p style={{ textAlign: "center", marginTop: "1rem", color: "green" }}>{message}</p>}
            </section>
        </div>
    );
}
