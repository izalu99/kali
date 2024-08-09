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
        <div data-testid="hamburger-menu" className="relative items-center" onClick={handleHamburgerClick}>
            <Hamburger isOpen={isMenuOpen}/>
            {isMenuOpen && 
                <div className="absolute right-0 mt-10 items-center">
                    <Menu/>
                </div>
            }
        </div>
    );
};

export default HamburgerMenu;