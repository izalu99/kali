

import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <ul className="flex flex-col">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            
        </div>
    )
};

export default Menu;