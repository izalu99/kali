
"use client"

const Hamburger = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div data-testid="hamburger" className="relative w-9 h-7 flex flex-col justify-center space-y-2 mt-1">
            <div id="hamburger" className={`w-full rounded-full h-1 bg-chiffon transition duration-300 transform ${isOpen ? 'rotate-45 translate-y-3': ''}`}></div>
            <div id="hamburger" className={`w-full rounded-full h-1 bg-chiffon transition duration-300 transform  ${isOpen ? 'opacity-0': ''}`}></div>
            <div id="hamburger" className={`w-full rounded-full h-1 bg-chiffon transition duration-300 transform ${isOpen ? '-rotate-45 -translate-y-3': ''}`}></div>
        </div>
    );
};

export default Hamburger;
