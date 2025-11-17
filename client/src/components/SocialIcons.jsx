// This component allows to reuse sinlge template 
import React from "react";

// Accept properies 
export default function SocialIcons({ href, icon, label }) {
    return (
        <a
            href={href} // makes icon clickable
            target="_blank" // opens link to new browser
            rel="noopener noreferrer" // security 
            aria-label={label} // accessibility 
            className="social-icon" // for styling
        >
            <img src={icon} alt={label} />
        </a>
    );
}
