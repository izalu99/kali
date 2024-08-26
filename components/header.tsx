

import BlogName from "./blogname";
import HamburgerMenu from "./hamburgermenu";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex flex-row justify-between bg-white p-10 font-serif">
            <div className=''><BlogName /></div>
            <div className='hidden lg:flex'>
                <ul className="flex flex-row space-x-4 items-center">
                    <li><Link href="/" className="text-black no-underline">Main page</Link></li>
                    <li><Link href="/browse" className="text-black no-underline">Browse</Link></li>
                    <li><Link href="/about" className="text-black no-underline">About</Link></li>
                </ul>
            </div>
            <div className="items-center lg:hidden "><HamburgerMenu /></div>
        </div>
    );
};

export default Header;