'use client'

import { useState } from "react";
import { useLazyQuery} from '@apollo/client';
import SEARCH_QUERY from '@/gql/searchQuery';
import SearchResults from '@/components/searchResults';


const Search = () =>{
    const [input, setInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [search, {loading, error}] = useLazyQuery(SEARCH_QUERY,{
        onCompleted: (data) => {
            console.log(data);
            setSearchResults(data.search);
        },
    });
    
    const handleSearch = async () => {
        search({variables: {input}});
    };

    return (    
    <div className='font-serif'>
        <div className=' flex flex-col justify-items-center'>
            <div className='flex flex-row justify-center'>
                <input 
                type="text" 
                className="rounded-l-md border p-2 w-1/2 text-black bg-white"
                placeholder="Search for a word or translation..."
                value= {input}
                onChange= {(e) => setInput(e.target.value)}
                />
                <button 
                className="p-2 rounded-r-md bg-blue-500 text-white"
                onClick={handleSearch}
                >Search</button>
            </div>
            <div className="flex justify-center w-full">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {searchResults.length > 0 && <SearchResults results={searchResults}/>}
            </div>
        </div>
        
    </div>
        
    )
}

export default Search;