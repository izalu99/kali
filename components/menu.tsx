

import Link from "next/link";
import { SignedIn, UserButton } from '@clerk/nextjs';

const Menu = () => {
    return (
        <div data-testid="menu" className="fixed right-0 h-full w-1/3 bg-sunglow shadow-lg p-5">
            <ul className="flex flex-col justify-between space-y-4">
                <li><Link href="/" className="text-chiffon no-underline hover:text-darkRed">Main page</Link></li>
                <li><Link href="/browse" className="text-chiffon no-underline hover:text-darkRed">Browse</Link></li>
                <li><Link href="/about" className="text-chiffon no-underline hover:text-darkRed">About</Link></li>
            </ul>
            
        </div>
    )
};

export default Menu;