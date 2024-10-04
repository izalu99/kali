"use client"
import React, { useState } from "react";
import Hamburger from "./hamburger"
import Menu from "./menu"

import { MenuProps }  from "./menu"






const HamburgerMenu = ({ items }: MenuProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleHamburgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div data-testid="hamburger-menu" className="relative items-center" onClick={handleHamburgerClick}>
            <Hamburger isOpen={isMenuOpen}/>
            {isMenuOpen && 
                <div className="absolute right-0 mt-8 items-center shadow-lg">
                    <Menu items={items}/>    
                </div>
            }
        </div>
    );
};

export default HamburgerMenu;