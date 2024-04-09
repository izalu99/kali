

import BlogName from "./blogname";
import HamburgerMenu from "./hamburgermenu";

const Header = () => {
    return (
        <div className="flex flex-row justify-between bg-slate-50 p-8">
            <div className=""><BlogName /></div>
            <div className="items-center"><HamburgerMenu /></div>
        </div>
    );
};

export default Header;