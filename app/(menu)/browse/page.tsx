'use client'

import { useState, useTransition } from "react";
import SearchResults  from "@/components/searchResults";

import { getWordsAction } from "@/app/actions/actions";
import { Word } from "@/components/search";


const Browse = () => {
    const header = 'Browse Words';
    const letters = [
        'a', 'e', 'i', 'o', 'u',
        'ba', 'be', 'bi', 'bo', 'bu',
        'ka', 'ke', 'ki', 'ko', 'ku',
        'da', 'de', 'di', 'do', 'du',
        'ga', 'ge', 'gi', 'go', 'gu',
        'ha', 'he', 'hi', 'ho', 'hu',
        'la', 'le', 'li', 'lo', 'lu',
        'ma', 'me', 'mi', 'mo', 'mu',
        'na', 'ne', 'ni', 'no', 'nu',
        'nga', 'nge', 'ngi', 'ngo', 'ngu',
        'pa', 'pe', 'pi', 'po', 'pu',
        'sa', 'se', 'si', 'so', 'su',
        'ta', 'te', 'ti', 'to', 'tu',
        'wa', 'we', 'wi', 'wo', 'wu',
        'ya', 'ye', 'yi', 'yo', 'yu',];
    const [selectedLetter, setSelectedLetter] = useState<string>('');
    const [filteredWords, setFilteredWords] = useState<any[]>([]);
    const [isPending, startTransition] = useTransition();
    const [limit] = useState<number>(10);
    const [offset, setOffset] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState('');

    
    console.log('filteredWords: ', filteredWords);


    

    const getWordsByLetter = async (letter: string) => {
        console.log('clicked letter: ', letter);
        try{
            setOffset(0);
            setSelectedLetter(letter);
            const { words, hasMore } = await getWordsAction(letter, limit, 0) as { words: any; hasMore: boolean; };
            console.log('words: ', words);
            setFilteredWords(words);
            setHasMore(hasMore);

        } catch (error: any) {
            setErrorMessage(error.message);
            console.error('Error filtering words: ', error);
        }
    };


    const handleClickedLetter = (letter: string) => {
        startTransition(() => {
            getWordsByLetter(letter);
        });
    };


    const handleLoadMore = async () => {
        try{
            const newOffset = offset + limit;
            setOffset(newOffset);
            const { words, hasMore } = await getWordsAction(selectedLetter, limit, newOffset) as { words: any; hasMore: boolean; };
            setFilteredWords((prevWords: Word[]) => [...prevWords, ...words]);
            setHasMore(hasMore);
            console.log(words);
        } catch (error) {
            console.error('Error loading more search results: ', error);
        }
    }




    return (
        <div className="flex flex-col w-full justify-between">
            <h1 className='font-serif pt-10 sm:text-lg md:text-xl lg:text-2xl xl:text-4xl flex text-chiffon justify-center align-middle font-semibold mb-6'>
                Select any of the 'abakada' alphabet below to browse.
            </h1>
            <div className='p-8 sticky grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4'>
            {letters.map((letter) => (
                <button 
                key={letter} 
                onClick={() => handleClickedLetter(letter)}
                className='
                min-w-[44px] 
                max-w-[144px] 
                text-xs 
                text-center 
                align-middle 
                font-serif 
                font-semibold 
                text-chiffon
                p-4 
                rounded-full 
                bg-red-600 
                hover:bg-darkRed
                duration-300
                ease-in-out
                shadow-lg
                transform hover:scale-105
                '>
                    {letter}
                </button>
            ))}
            </div>
            <div className='flex justify-center align-middle self-center w-[60%]'>
                <SearchResults loading={isPending} header={header}  results={filteredWords} />
                {errorMessage && <small className="text-darkRed text-center">{errorMessage}</small>}
            </div>
            <div className='flex justify-center align-middle self-center w-[60%]'>
                {hasMore && <button
                    onClick={handleLoadMore}
                    className='
                    min-w-[44px]
                    max-w-[144px]
                    text-sm
                    text-center
                    align-middle
                    font-serif
                    font-semibold
                    text-chiffon
                    p-4
                    rounded-full
                    bg-red-600
                    hover:text-chiffon
                    hover:bg-darkRed
                    duration-300
                    ease-in-out'>
                    {isPending ? 'Loading...' : 'Load More'}
                </button>}
            </div>
            
        </div>
    );
}

export default Browse;