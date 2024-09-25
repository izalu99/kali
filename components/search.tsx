'use client';

import { useEffect, useState, useTransition } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import { searchAction } from '@/app/actions/actions';
import { getContentForSearch } from "@/content/queries";



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
  const [heading, setHeading] = useState<string>('');
  const [searchResultsHeading, setSearchResultsHeading] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Word[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, startTransition] = useTransition();
  const [limit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getContentForSearch();
        const { heading, searchResultsHeading } = data.searchCollection.items[0];
        setHeading(heading);
        setSearchResultsHeading(searchResultsHeading);
      } catch (error) {
        console.error('Error fetching search content:', error);
      }
    };

    fetchContent();
  }, []);

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
