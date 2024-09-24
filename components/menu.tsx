import Link from 'next/link';

interface MenuItem {
  link: string;
  label: string;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu = ({ items }: MenuProps) => {
  return (
    <div data-testid="menu" className="fixed right-0 h-full w-full bg-purple-950 shadow-lg bg-opacity-80 p-5 flex items-center justify-center">
      <ul className="flex flex-col w-full text-center text-2xl justify-center items-center space-y-10 text-chiffon">
        {items.map((item, index) => (
          <li key={index} className='w-full group'>
            <Link href={item.link} className="block w-full no-underline group-hover:text-red-300">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;