'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import useSearch from "@/hooks/componentHooks/useSearch";
import SearchResults from '@/components/searchResults';


const Search = () => {
  
  const {
    heading,
    handleSubmit,
    input,
    setInput,
    errorMessage,
    hasSearched,
    isPending,
    searchResultsHeading,
    searchResults,
    hasMore,
    handleLoadMore
  } = useSearch();


  return (
    <div className='rounded-md font-serif flex justify-center items-center min-h-96 bg-transparent'>
      <div className='w-screen sm:max-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-md p-10 flex flex-col justify-center bg-transparent'>
      <h1 className="text-4xl font-bold text-white mb-6">{heading}</h1>
        <form 
          id="search" 
          className='flex flex-row border-2 border-gray-300 rounded-md focus-within:border-blue-500'
          onSubmit={handleSubmit}
        >
          <input
            name='searchInput' 
            type="text" 
            className="w-full text-black p-2 bg-chiffon rounded-l-md focus:outline-none"
            placeholder="Search for a word or translation..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-purple-400 text-chiffon rounded-r-md transition-colors duration-200 hover:bg-darkRed"
            aria-label="Search"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        {errorMessage && hasSearched === false && (
          <small className="text-darkRed text-center mt-2">{errorMessage}</small>
        )}

        <div className="w-full pt-4 flex flex-col items-center justify-center space-y-4">
          {
            hasSearched && <SearchResults loading={isPending} header={searchResultsHeading} results={searchResults} />
          }
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
                  text-white
                  p-4
                  rounded-full
                  bg-purple-400
                  hover:text-chiffon
                  hover:bg-darkRed
                  duration-300
                  ease-in-out
                  shadow-lg
                  transform hover:scale-105
                  '
              >
                Load More
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Search;
