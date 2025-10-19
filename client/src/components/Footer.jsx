import React from "react";
import "../assets/styles/Footer.css";

export default function Footer() {
    return (
        <footer className="full-footer-container">
            <div className="footer-inner-container">

                {/* Newsletter Signup */}
                <div className="footer-signup">
                    <h4>Stay connected</h4>
                    <p>Join our community for future updates.</p>

                    <form
                        id="footer-form"
                        method="post"
                        action="#"
                        className="footer-form"
                        aria-label="Email Sign-up Form"
                    >
                        <label htmlFor="email-signup" className="visually-hidden">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email-signup"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                        <button type="submit">Subscribe</button>
                        <p
                            id="error-message"
                            style={{ color: "red", fontSize: "0.9rem", display: "none" }}
                        ></p>
                    </form>
                </div>

                {/* Logo */}
                <div className="footer-column">
                    <a href="/" className="footer-logo">
                        TRELLIS
                    </a>
                </div>

                {/* Contact Info */}
                <div className="footer-column">
                    <h5>Contact Us</h5>
                    <p>Email: Hello@Trellis.com</p>
                    <p>Phone: (202) 000-0000</p>
                </div>
            </div>
        </footer>
    );
}
