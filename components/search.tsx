'use client'

import { useState, useCallback } from "react";
import { useLazyQuery} from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from 'react-spinners';
import SEARCH_QUERY from '@/gql/searchQuery';
import debounce   from 'lodash.debounce';
import dynamic from 'next/dynamic';

const SearchResults = dynamic(() => import('@/components/searchResults'));


const Search = () =>{
    const [input, setInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [search, {loading, data, error}] = useLazyQuery(SEARCH_QUERY,{
        onCompleted: (data) => {
            setSearchResults(data.search);
            setHasSearched(true);
            setInput('');
        },
    });
    
    const handleSearch = async (searchInput: string) => {
        if(!searchInput.trim()|| searchInput.length === 0){
            setErrorMessage('Please enter a word or translation.');
            setHasSearched(false);
            return;
        }

        search({variables: {input: searchInput}});
    };

    const debouncedSearch = useCallback(debounce(handleSearch, 300),[]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInput(val);
        debouncedSearch(val);
    }

    const handleKeyDown = (event: any) => {
        if(event.key === 'Enter'){
            event.preventDefault();
            handleSearch(input);
        }
    };

    return (    
    <div className='font-serif flex justify-center items-center'>
        <div className='w-screen sm:max-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-md p-10 flex flex-col justify-center'>
            <form id="search" className='flex flex-row border-2 border-black rounded-md hover:border-darkRed active:border-darkRed'>
                <input
                name='searchInput' 
                type="text" 
                className="w-full text-black p-2 bg-chiffon  rounded-md focus:outline-none"
                placeholder="Search for a word or translation..."
                value= {input}
                onChange= {handleInputChange}
                onKeyDown={handleKeyDown}
                />
                <button
                type="button"
                name='searchButton'
                role="button" 
                className="px-4 py-0 m-0 justify-end bg-black text-white transition-colors duration-200 hover:bg-darkRed "
                onClick={() => handleSearch(input)}
                aria-label="Search">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            {errorMessage && hasSearched=== false && <small className="text-darkRed text-center">{errorMessage}</small>}
            <div className="w-full pt-4 flex flex-col items-center justify-center space-y-4">
                {loading && <ClipLoader color="#738589" />}
                {error && <p color="#B20c06">Error: {error.message}</p>}
                {data && <SearchResults results={searchResults}/>}
            </div>
        </div>
    </div>
        
    )
}

export default Search;