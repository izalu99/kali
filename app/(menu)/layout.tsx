
import Header from "@/components/header"
import Footer from "@/components/footer";

const MenuLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen justify-between flex-col bg-inherit">
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default MenuLayout;