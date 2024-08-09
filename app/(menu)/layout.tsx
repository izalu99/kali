
import Header from "@/components/header"

const MenuLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
};

export default MenuLayout;