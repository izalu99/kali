
"use client"

import { useState } from 'react';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div data-testid="hamburger" className="relative w-7 h-7" onClick={handleClick}>
            <div id="hamburger" className={`w-full h-1 bg-white transition duration-300 transform ${isOpen ? 'rotate-45 translate-y-3': ''}`}></div>
            <div id="hamburger" className={`absolute top-3 w-full h-1 bg-white transition duration-300 transform  ${isOpen ? 'opacity-0': ''}`}></div>
            <div id="hamburger" className={`absolute bottom-0 w-full h-1 bg-white transition duration-300 transform ${isOpen ? '-rotate-45 -translate-y-3': ''}`}></div>
        </div>
    );
};

export default Hamburger;
