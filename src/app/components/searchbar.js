
const SearchBar = () =>{
    return (
        <div className=''>
            <div className=' flex flex-col'>
                <div className='flex flex-row justify-center'>
                    <input type="text" placeholder="Search for a word" className="rounded-l-md border-gray-300 p-2 w-1/2" />
                    <button className="bg-blue-500 text-white p-2 rounded-r-md">Search</button>
                </div>
            </div>
            
        </div>
    )
}

export default SearchBar;