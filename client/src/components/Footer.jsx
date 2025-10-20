import React from "react";
import "../assets/styles/Footer.css";
import SocialIcons from "./SocialIcons";

import InstagramIcon from "../assets/images/instagram.svg";
import GitHubIcon from "../assets/images/github.svg";
import LinkedInIcon from "../assets/images/linkedin.svg";
import TikTokIcon from "../assets/images/tiktok.svg";

export default function Footer() {
    return (
        <footer className="full-footer-container">
            <div className="footer-inner-container">

                {/* Social Media Links */}
                <div className="footer-socials">
                    {/* <h4>Connect with Us</h4> */}
                    <div className="socials-container">
                        <SocialIcons
                            href="https://www.instagram.com/"
                            icon={InstagramIcon}
                            label="Instagram"
                        />
                        <SocialIcons
                            href="https://github.com/KaiaBryant"
                            icon={GitHubIcon}
                            label="GitHub"
                        />
                        <SocialIcons
                            href="https://twitter.com/"
                            icon={LinkedInIcon}
                            label="LinkedIn"
                        />
                        <SocialIcons
                            href="https://www.youtube.com/"
                            icon={TikTokIcon}
                            label="TikTok"
                        />
                    </div>
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
