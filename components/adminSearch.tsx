'use client'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from 'react-spinners';
import useAdminSearch from '@/hooks/componentHooks/useAdminSearch';

import dynamic from 'next/dynamic';


const AdminSearchResults = dynamic(() => import('@/components/adminSearchResults'));




const AdminSearch = () => {
    const {
        input,
        setInput,
        searchResults,
        hasSearched,
        errorMessage,
        isPending,
        hasMore,
        handleSubmit,
        handleLoadMore,
      } = useAdminSearch();

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