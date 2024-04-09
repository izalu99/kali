

import Link from "next/link";

const Menu = () => {
    return (
        <div data-testid="menu" className="fixed top-40 right-0 h-full w-1/3 bg-white shadow-lg p-8">
            <ul className="flex flex-col justify-between space-y-4">
                <li><Link href="/" className="text-black no-underline">Home</Link></li>
                <li><Link href="/about" className="text-black no-underline">About</Link></li>
                <li><Link href="/contact" className="text-black no-underline">Contact</Link></li>
            </ul>
            
        </div>
    )
};

export default Menu;