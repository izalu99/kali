

import { SearchProvider } from "@/app/context/searchContext";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SearchProvider>
            {children}
        </SearchProvider>
    );
}
export default AdminLayout;