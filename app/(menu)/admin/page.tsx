
import AdminSearch from "@/components/adminSearch";
import NewWord from "@/components/newWord";
const AdminPage = () => {
    return (
        <div className='font-serif flex flex-col items-center min-h-screen p-6'>
            <h1 className='text-3xl font-bold mb-6 text-black'>Admin Page</h1>
            <div className='w-full bg-transparent p-6 mb-6'>
                <AdminSearch />
            </div>
            <div className='w-full bg-transparent p-6 rounded-lg'>
                <NewWord />
            </div>
        </div>
    )
}

export default AdminPage;