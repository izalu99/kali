'use client';

import { useState, useTransition } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import { searchAction } from '@/app/actions/actions';

const SearchResults = dynamic(() => import('@/components/searchResults'));

const Search = () => {
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSearch = async (formData: FormData) => {
    try {
      const results = await searchAction(formData);
      console.log(results);
      setSearchResults(results);
      setHasSearched(true);
      setErrorMessage('');
    } catch (error: any) {
      setErrorMessage(error.message);
      setHasSearched(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      handleSearch(formData);
    });
  };

  return (
    <div className='font-serif flex justify-center items-center'>
      <div className='w-screen sm:max-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-md p-10 flex flex-col justify-center'>
        <form 
          id="search" 
          className='flex flex-row border-2 border-black rounded-md hover:border-darkRed active:border-darkRed'
          onSubmit={handleSubmit}
        >
          <input
            name='searchInput' 
            type="text" 
            className="w-full text-black p-2 bg-chiffon  rounded-md focus:outline-none"
            placeholder="Search for a word or translation..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-0 m-0 justify-end bg-black text-white transition-colors duration-200 hover:bg-darkRed "
            aria-label="Search"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        {errorMessage && hasSearched === false && (
          <small className="text-darkRed text-center">{errorMessage}</small>
        )}

        <div className="w-full pt-4 flex flex-col items-center justify-center space-y-4">
          {isPending ? (
            <p>Loading...</p>
          ) : (
            searchResults.length > 0 && <SearchResults results={searchResults} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
