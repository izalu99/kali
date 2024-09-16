'use client';
import { useState, useEffect, useCallback } from "react";
import { getRandomWord, searchRandomWordAction } from "@/app/actions/actions"
import WordTranslation from "./wordTranslation";


const WordOfTheDay = () => {
    const [word, setWord] = useState(null);
    const [translation, setTranslation] = useState(null);

    const getWord = useCallback(async () => {
        const randomWord = await getRandomWord(searchRandomWordAction);
        if (randomWord) {
            setWord(randomWord);
            if (randomWord.translations.length > 0) {
                const randomTranslation = randomWord.translations[0];
                setTranslation(randomTranslation);
            }
        }
    }, []);

    useEffect(() => {
        getWord();
    }, []);

    if (!word || !translation) {
        return <div className='text-black'>Loading...</div>;
    }

    return (
        <div className=' flex flex-col w-full'>
            <h1 className='text-2xl font-semibold text-black text-center'>Word of the Day</h1>
            <div className='w-screen sm:max-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-md p-10 flex flex-col justify-center'>
                <WordTranslation word={word} translation={translation} />
            </div>
            
        </div>

    )
}

export default WordOfTheDay;