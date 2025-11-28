// src/components/Header.jsx

import { useState } from 'react';
import Logo2 from '/Photos/log2.png';
import './header.css';

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";



// Assuming you've installed 'react-icons' or manage fonts via index.html/CSS
// For this example, I'll stick to the class names from the original HTML
// You need to ensure the font awesome and boxicons imports are in your index.html or equivalent.

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <h2 className="logo">
                {/* Replace with your actual logo path/component */}
                <img src={Logo2} alt="ნიღაბი.Ge Logo" />
                <span className="logo-pi">M a s k s</span>
            </h2>

            <nav>
                <label className="checkBtn" onClick={toggleMenu}>
                    {/* Note: In React, you use a single element and switch the class/style */}
                    {isMenuOpen ? (
                        <IoClose className="menu-icon"/> 
                    ) : (
                        <IoMenu className="menu-icon"/>
                    )}
                </label>

                {/* The 'open' class is conditionally applied based on state */}
                <ul id="navList" className={isMenuOpen ? "open" : ""} onClick={closeMenu}>
                    <li><a href="#home">მთავარი</a></li>
                    <li><a href="#product">ნიღბები</a></li>
                    <li><a href="#contact">კონტაქტი</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;