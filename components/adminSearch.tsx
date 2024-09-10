'use client'

import { useState, useCallback } from "react";
import { useLazyQuery} from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from 'react-spinners';
import SEARCH_QUERY from '@/gql/searchQuery';
import AdminSearchResults from '@/components/adminSearchResults';
import { useSearch } from "@/app/context/searchContext";
import { debounce } from "lodash";


const AdminSearch = () =>{
    const [input, setInput] = useState('');
    const {setSearchResults, searchResults} = useSearch();
    const [hasSearched, setHasSearched] = useState(false);
    const [search, {loading, error}] = useLazyQuery(SEARCH_QUERY,{
        onCompleted: (data) => {
            setSearchResults(data.search);
            setHasSearched(true);
        },
    });
    
    const handleSearch = useCallback(async (searchInput: string) => {
        search({variables: {input: searchInput}});
    },[search]);

    const debouncedSearch = useCallback(debounce(handleSearch, 300),[]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInput(val);
        debouncedSearch(val);
    },[debouncedSearch]);

    const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch(input);
        }
    }, [handleSearch, input]);

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSearch(input);
    }, [handleSearch, input]);




    return (    
    <div className='font-serif flex justify-center items-center'>
        <div className='w-full flex flex-col'>
            <form className='flex flex-row justify-center' onSubmit={handleSubmit}>
                <input 
                type="text" 
                className="w-full text-black p-2 rounded-l-md border bg-chiffon"
                placeholder="Search for a word or translation..."
                value= {input}
                onChange= {handleInputChange}
                onKeyDown={handleKeyDown}
                />
                <button 
                type="submit"
                className="px-4 rounded-r-md bg-sunglow text-black hover:text-chiffon transition-colors duration-200 hover:bg-black"
                aria-label="Search"
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <div className="w-full pt-4 flex flex-col items-center justify-center space-y-4">
                {loading && <ClipLoader color="#faf3cd" />}
                {error && <p>Error: {error.message}</p>}
                {hasSearched && <AdminSearchResults results={searchResults} />}
            </div>
        </div>
        
    </div>
        
    )
}

export default AdminSearch;