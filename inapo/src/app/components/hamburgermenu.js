"use client"
import React, { useState } from "react";
import Hamburger from "./hamburger"
import Menu from "./menu"

const HamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleHamburgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div data-testid="hamburger-menu" className="p-4 relative" onClick={handleHamburgerClick}>
            <Hamburger isOpen={isMenuOpen}/>
            {isMenuOpen && 
                <div className="absolute right-0 top-15 mt-2">
                    <Menu/>
                </div>
            }
        </div>
    );
};

export default HamburgerMenu;