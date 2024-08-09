import Header from "@/components/header"

const MenuLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
};

export default MenuLayout;