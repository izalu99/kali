

import BlogName from "./blogname";
import HamburgerMenu from "./hamburgermenu";
import Link from "next/link";

const Header = () => {
    return (
        <div className="sticky top-5 z-50 flex flex-row justify-between bg-black p-10 font-serif rounded-full">
            <div className=''><BlogName /></div>
            <div className='hidden lg:flex'>
                <ul className="flex flex-row space-x-8 items-center lg:text-2xl">
                    <li><Link href="/" className="text-chiffon no-underline hover:text-darkRed">Main page</Link></li>
                    <li><Link href="/browse" className="text-chiffon no-underline hover:text-darkRed">Browse</Link></li>
                    <li><Link href="/about" className="text-chiffon no-underline hover:text-darkRed">About</Link></li>
                </ul>
            </div>
            <div className="items-center lg:hidden "><HamburgerMenu /></div>
        </div>
    );
};

export default Header;