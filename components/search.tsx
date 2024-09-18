'use client';

import { useState, useTransition } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import { searchAction } from '@/app/actions/actions';


const SearchResults = dynamic(() => import('@/components/searchResults'));

export interface Translation {
  id: string;
  text: string;
  language: string;
  wordId: number;
}

export interface Word {
  id: string;
  text: string;
  pronunciation: string;
  type: string;
  tense: string;
  example: string;
  translations: Translation[];
}

const Search = () => {
  const header = 'Search Results';
  const [input, setInput] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Word[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, startTransition] = useTransition();
  const [limit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const handleSearch = async (formData: FormData) => {
    try {
      setOffset(0);
      const { results, hasMore } = await searchAction(formData, limit, 0) as { results: any; hasMore: boolean; };
      console.log(results);
      setSearchResults(results);
      setHasMore(hasMore)
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
          {
            hasSearched && <SearchResults loading={isPending} header={header} results={searchResults} />
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
                  text-black
                  p-4
                  rounded-full
                  bg-lightGray
                  hover:text-chiffon
                  hover:bg-darkRed'
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
