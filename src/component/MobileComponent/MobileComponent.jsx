import React from 'react';
import { IoSparkles } from "react-icons/io5";
import './MobileComponent.css';

const MobileComponent = ({ isopen, toggleMenu }) => {
    const mobileheadericon = ["Home", "Pricing", "Use Cases","Location","FAQ","Company"];
    return (
        <ul className={`mobile-navbar ${isopen ? "active" : ""}`}>
            <h3 className="logo">
                <span><IoSparkles /></span>
                Statisda
            </h3>
            {mobileheadericon.map((item) => (
                <li key={item}><a href="#">{item}</a></li>
            ))}
        </ul>
    );
}

export default MobileComponent;
