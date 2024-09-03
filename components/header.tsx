

import BlogName from "./blogname";
import HamburgerMenu from "./hamburgermenu";
import Link from "next/link";
import { SignedIn, UserButton } from '@clerk/nextjs';

const Header = () => {
    return (
        <div className="flex flex-row justify-between sticky top-5 z-50 bg-black p-10 font-serif rounded-full">
            <div className='flex flex-row flex-grow justify-between'>
                <div className=''><BlogName /></div>
                <div className='hidden lg:flex pr-4'>
                    <ul className="flex flex-row space-x-8 items-center lg:text-2xl">
                        <li><Link href="/" className="text-chiffon no-underline hover:text-darkRed">Main page</Link></li>
                        <li><Link href="/browse" className="text-chiffon no-underline hover:text-darkRed">Browse</Link></li>
                        <li><Link href="/about" className="text-chiffon no-underline hover:text-darkRed">About</Link></li>
                    </ul>
                </div>
                <div className="items-center lg:hidden pr-4"><HamburgerMenu /></div>
            </div>
            <div className='flex-shrink-0 justify-content align-content m-0 pt-1'><SignedIn><UserButton /></SignedIn></div>
        </div>
    );
};

export default Header;