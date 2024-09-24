import BlogName from "./blogname";
import HamburgerMenu from "./hamburgermenu";
import Link from "next/link";
import { SignedIn, UserButton } from '@clerk/nextjs';
import { getContentForHeader } from "@/content/queries";

const Header = async () => {
    const data = await getContentForHeader();
    //console.log(data.headerCollection.items[0].pagesCollection.items);
    const items = data.headerCollection.items[0].pagesCollection.items;
    return (
        <div id='header' className="flex flex-row justify-between sticky top-0 z-40 bg-purple-950  bg-opacity-80 p-6 font-serif shadow-lg text-chiffon">
            <div className='flex flex-row flex-grow justify-between'>
                <div className=''><BlogName /></div>
                <div className='hidden lg:flex pr-4'>
                    <ul className="flex flex-row space-x-8 items-center lg:text-2xl">
                        {items.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link} className="no-underline hover:text-red-300">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="items-center lg:hidden pr-4"><HamburgerMenu items={items} /></div>
            </div>
            <div className='flex-shrink-0 justify-content align-content m-0 pt-1'><SignedIn><UserButton /></SignedIn></div>
        </div>
    );
};

export default Header;