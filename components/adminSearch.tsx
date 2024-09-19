'use client'

import { useState, useTransition } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from 'react-spinners';
import { searchAction } from "@/app/actions/actions";

import dynamic from 'next/dynamic';
import { Word } from "./search";

const AdminSearchResults = dynamic(() => import('@/components/adminSearchResults'));




const AdminSearch = () =>{
    const [input, setInput] = useState('');
    const [searchResults,setSearchResults] = useState<Word[]>([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isPending, startTransition] = useTransition();
    const [limit] = useState<number>(10);
    const [offset, setOffset] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    
    const handleSearch = async (formData: FormData) => {
        try {
            const {results, hasMore} = await searchAction(formData, limit, 0) as {results: any; hasMore: boolean};
            setSearchResults(results);
            setHasMore(hasMore);
            setHasSearched(true);
            setErrorMessage('');
        } catch (error: any) {
            setErrorMessage(error.message);
            setHasSearched(false);
        }
    }

    const handleLoadMore = async () => {
        try{
          const newOffset = offset + limit;
          setOffset(newOffset);
          const formData = new FormData();
          formData.append('searchInput', input);
          const { results, hasMore } = await searchAction(formData, limit, newOffset) as { results: any; hasMore: boolean; };
          setSearchResults((prevResults: Word[]) => [...prevResults, ...results]);
          setHasMore(hasMore);
          console.log(results);
        } catch (error) {
          console.error('Error loading more search results: ', error);
    
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
                className="px-4 rounded-r-md bg-black text-chiffon hover:text-black transition-colors duration-200 hover:bg-blue-300"
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
                {
                hasSearched && !isPending && searchResults.length > 0 && hasMore && (
                <button
                    onClick={handleLoadMore}
                    className='
                    min-w-[44px]
                    max-w-[144px]
                    text-xs
                    text-center
                    align-middle
                    font-serif
                    font-semibold
                    text-black
                    p-4
                    rounded-full
                    bg-lightGray
                    hover:text-chiffon
                    hover:bg-darkRed'
                >
                    Load More
                </button>
                )}
            </div>
        </div>
        
    </div>
        
    )
}

export default AdminSearch;