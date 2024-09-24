import Link from "next/link";

const Menu = () => {
    return (
        <div data-testid="menu" className="fixed right-0 h-full w-full bg-purple-950 shadow-lg bg-opacity-80 p-5 flex items-center justify-center">
            <ul className="flex flex-col w-full text-center text-2xl justify-center items-center space-y-10 text-chiffon">
                <li className='w-full group'><Link href="/" className="block w-full no-underline group-hover:text-red-300">Main</Link></li>
                <li className='w-full group'><Link href="/browse" className="block w-full no-underline group-hover:text-red-300">Browse</Link></li>
                <li className='w-full group'><Link href="/about" className="block w-full no-underline group-hover:text-red-300">About</Link></li>
            </ul>
        </div>
    )
};

export default Menu;