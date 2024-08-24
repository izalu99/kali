'use client'

import { useState } from "react";
import { useLazyQuery, ApolloProvider } from '@apollo/client';
import client from '@/apolloclient';
import SEARCH_QUERY from '@/gql/searchQuery';
import SearchResults from '@/components/searchResults';

const SearchBar = () =>{
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
        <ApolloProvider client={client}>
            <div className=''>
                <div className=' flex flex-col'>
                    <div className='flex flex-row justify-center'>
                        <input 
                        type="text" 
                        className="rounded-l-md border-gray-300 p-2 w-1/2"
                        placeholder="Search for a word or translation..."
                        value= {input}
                        onChange= {(e) => setInput(e.target.value)}
                        />
                        <button 
                        className="bg-blue-500 text-white p-2 rounded-r-md"
                        onClick={handleSearch}
                        >Search</button>
                    </div>
                    <div>
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error.message}</p>}
                        {searchResults.length > 0 && <SearchResults results={searchResults}/>}
                    </div>
                </div>
                
            </div>
        </ApolloProvider>
    )
}

export default SearchBar;