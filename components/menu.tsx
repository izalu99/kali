

import Link from "next/link";

const Menu = () => {
    return (
        <div data-testid="menu" className="fixed right-0 h-full w-1/3 bg-slate-50 shadow-lg p-5">
            <ul className="flex flex-col justify-between space-y-4">
                <li><Link href="/" className="text-black no-underline">Dictionary</Link></li>
                <li><Link href="/about" className="text-black no-underline">About</Link></li>
                <li><Link href="/contact" className="text-black no-underline">Contact</Link></li>
            </ul>
            
        </div>
    )
};

export default Menu;