import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

export default function Header() {
    return (
        <div className="full-header">
            {/* Upperhead banner */}
            <div className="upper-header-wrap">
                <p>Grow. Play. Every Day!</p>
            </div>
            <div className="uhead__title">
                <Link to="/">TRELLIS</Link>
            </div>
            <div className="uhead__right">
                <p>Grow Your Own Paradise</p>
            </div>

            {/* Header Section */}
            <header className="header">
                <nav className="navbar">
                    {/* Use React Router links instead of hrefs */}
                    <Link to="/shop">Shop All</Link>
                    <Link to="/contact">Free Plants</Link>
                    {/* <Link to="/guide">How To Grow</Link> */}
                </nav>
            </header>
        </div>
    );
}