

import Link from "next/link";
import { SignedIn, UserButton } from '@clerk/nextjs';

const Menu = () => {
    return (
        <div data-testid="menu" className="fixed right-0 h-full w-full bg-chiffon shadow-lg p-5 flex items-center justify-center">
            <ul className="flex flex-col w-full text-center text-2xl justify-center items-center space-y-10">
                <li className='w-full group'><Link href="/" className="block w-full text-black no-underline group-hover:text-darkRed">Main page</Link></li>
                <li className='w-full group'><Link href="/browse" className="block w-full text-black no-underline group-hover:text-darkRed">Browse</Link></li>
                <li className='w-full group'><Link href="/about" className="block w-full text-black no-underline group-hover:text-darkRed">About</Link></li>
            </ul>
            
        </div>
    )
};

export default Menu;