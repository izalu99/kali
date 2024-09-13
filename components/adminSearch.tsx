'use client'

import { useState, useTransition } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from 'react-spinners';
import { searchAction } from "@/app/actions/actions";

import dynamic from 'next/dynamic';

const AdminSearchResults = dynamic(() => import('@/components/adminSearchResults'));




const AdminSearch = () =>{
    const [input, setInput] = useState('');
    const [searchResults,setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isPending, startTransition] = useTransition();
    
    const handleSearch = async (formData: FormData) => {
        try {
            const results = await searchAction(formData);
            setSearchResults(results);
            setHasSearched(true);
            setErrorMessage('');
        } catch (error: any) {
            setErrorMessage(error.message);
            setHasSearched(false);
        }
    }
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        startTransition(() => {
            handleSearch(formData);
        });
    };




    return (    
    <div className='font-serif flex justify-center items-center'>
        <div className='w-full flex flex-col'>
            <form
            id="adminSearch"
            className='flex flex-row justify-center' 
            onSubmit={handleSubmit}>
                <input
                name='searchInput' 
                type="text" 
                className="w-full text-black p-2 rounded-l-md border bg-chiffon"
                placeholder="Search for a word or translation..."
                value= {input}
                onChange= {(e) => setInput(e.target.value)}
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
                {isPending && <ClipLoader color="#faf3cd" />}
                {errorMessage && hasSearched === false && (
                    <small className="text-darkRed text-center">{errorMessage}</small>
                )}
                {hasSearched && <AdminSearchResults results={searchResults} />}
            </div>
        </div>
        
    </div>
        
    )
}

export default AdminSearch;