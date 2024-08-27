'use client'

import { useState } from "react";
import { useLazyQuery} from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from 'react-spinners';
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
    <div className='font-serif flex justify-center items-center min-h-screen'>
        <div className='w-4/5 p-10 flex flex-col'>
            <div className='flex flex-row justify-center'>
                <input 
                type="text" 
                className="w-full text-black p-2 rounded-l-md border"
                placeholder="Search for a word or translation..."
                value= {input}
                onChange= {(e) => setInput(e.target.value)}
                />
                <button 
                className="px-4 rounded-r-md bg-blue-500 text-white transition-colors duration-200 hover:bg-blue-600"
                onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="w-full pt-4 flex justify-center">
                {loading && <ClipLoader color="#ffffff" />}
                {error && <p>Error: {error.message}</p>}
                {searchResults.length > 0 && <SearchResults results={searchResults}/>}
            </div>
        </div>
        
    </div>
        
    )
}

export default Search;