'use client';
import { useState, useEffect } from "react";
import { searchRandomWordAction } from "@/app/actions/actions"
import WordTranslation from "./wordTranslation";


const generateRandomletters = (arrayOfLetters: string[]) => {
    const randomIndex = Math.floor(Math.random() * arrayOfLetters.length);
    return arrayOfLetters[randomIndex];
};

const getRandomWord = async () => {
    const  letter1 = generateRandomletters(['k', 'd', 'w', 'm', 'n', 's']);
    const  letter2 = generateRandomletters(['a', 'i']);
    const randomWord = `${letter1}${letter2}`;
    console.log('Generated random word: ', randomWord);
    
    try{
        const wordResults = await searchRandomWordAction(randomWord);

        if (wordResults.length > 0) {
            const word = wordResults[0];
            console.log('word: ', word);
            return word;
        } else{
            console.log('No word found for: ', randomWord);
            return null;
        }
    } catch (error){
        console.error('Error searching for random word: ', error);
        return null;
    }

};

const WordOfTheDay = () => {
    const [word, setWord] = useState(null);
    const [translation, setTranslation] = useState(null);

    useEffect(() => {
        const getWord = async () => {
            const randomWord = await getRandomWord();
            if (randomWord) {
                setWord(randomWord);
                if (randomWord.translations.length > 0) {
                    const randomTranslation = randomWord.translations[0];
                    setTranslation(randomTranslation);
                }
            }
        };
        getWord();
    }, []);

    if (!word || !translation) {
        return <div className='text-black'>Loading...</div>;
    }

    return (
        <div className='w-full'>
            <h1 className='text-2xl font-semibold text-black text-center'>Word of the Day</h1>
            <WordTranslation word={word} translation={translation} />
        </div>

    )
}

export default WordOfTheDay;