
import Search from "@/components/search";
import NewWord from "@/components/newWord";

const adminPage = () => {
    return (
        <div className='flex flex-col'>
            <h1>Admin Page</h1>      
            <Search />
            <NewWord />
        </div>
    )
}

export default adminPage