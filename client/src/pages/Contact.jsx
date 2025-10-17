// src/pages/Contact.jsx
import React, { useState } from "react";
import "../assets/styles/Contact.css"; // create this CSS file
import contactImg from "./assets/images/contact-page-img.jpg";


export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        seed: "",
        comments: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Later: send to your RDS backend
    };

    return (
        <div className="contact-page">
            {/* ============ HERO SECTION ============ */}
            <section className="contact-main">
                <div className="contact__img">
                    <img src={contactImg} alt="potting accessories" />
                </div>
                <div className="contact__text">
                    <h2>LET&apos;S GROW TOGETHER!</h2>
                    <p>
                        We want to share our love for growing. Sign up below for a free starter kit that includes a pack of seeds
                        of your choice, a starter pot, and sample soil.
                    </p>
                </div>
            </section>

            {/* ============ FORM SECTION ============ */}
            <section className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    {/* Name Row */}
                    <div className="form-row">
                        <div>
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Email + Phone Row */}
                    <div className="form-row">
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="hello@trellis.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                pattern="\d{10}"
                                placeholder="0000000000"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Seed Option */}
                    <div>
                        <label htmlFor="seed">Choose your seed:</label>
                        <input
                            list="seed-options"
                            id="seed"
                            name="seed"
                            value={formData.seed}
                            onChange={handleChange}
                            required
                        />
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

                    {/* Comments */}
                    <div>
                        <label htmlFor="comments">Comments:</label>
                        <textarea
                            id="comments"
                            name="comments"
                            rows="5"
                            placeholder="Type your message here..."
                            value={formData.comments}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
