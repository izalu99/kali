'use client'

import { useState, useEffect, useContext} from "react";
import SearchResults  from "@/components/searchResults";
import { WordsContext } from "@/app/context/wordsContext";

 
const Browse = () => {
    const header = 'Browse Words';
    const {words, isPending, loadMore} = useContext(WordsContext) || { words: [], isPending: false, loadMore: () => {} };
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

    console.log('words: ', words);
    console.log('filteredWords: ', filteredWords);


    useEffect(() => {     
        if (selectedLetter) {
            const filtered = words.filter((word: { text: string; }) => {
                return word.text && word.text.toLowerCase().startsWith(selectedLetter.toLowerCase());
            });
            console.log('filtered: ', filtered);
            console.log('words: ', words);
            setFilteredWords(filtered);
        } else {
            setFilteredWords(words);
        }
    }, [selectedLetter, words]);

    const handleClickedLetter = (letter: string) => {
        console.log('clicked letter: ', letter);
        setSelectedLetter(letter);
    };


    return (
        <div className="flex flex-col w-full justify-between">
            <h1 className='pt-10 sm:text-lg md:text-xl lg:text-xl xl:text-xl flex text-black justify-center align-middle'>Select any of the 'abakada' alphabet below to browse.</h1>
            <div className='p-8 sticky grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2'>
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
                text-black 
                p-4 
                rounded-full 
                bg-lightGray 
                hover:text-chiffon 
                hover:bg-darkRed'>
                    {letter}
                </button>
            ))}
            </div>
            <div className='flex justify-center align-middle self-center w-[60%]'>
                <SearchResults loading={isPending} header={header}  results={filteredWords} />
            </div>
            <div className='flex justify-center align-middle self-center w-[60%]'>
                <button
                    onClick={loadMore}
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
                    hover:bg-darkRed'>
                    {isPending ? 'Loading...' : 'Load More'}
                </button>
            </div>
            
        </div>
    );
}

export default Browse;