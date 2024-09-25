'use client'
import { useContext } from "react";
import WordTranslation from "./wordTranslation";
import { ClipLoader } from "react-spinners";

import { WordContext } from "@/app/context/wordOfTheDayContext";

const WordOfTheDay = () => {
    const context = useContext(WordContext);
    const {word, translation, refreshWord, heading} = context || {};

    if (!word || !translation) {
        return <div className='flex flex-col items-center justify-center w-full font-serif'>
                    <h1 className='pt-4 pb-8 text-2xl font-semibold text-chiffon text-center'>{heading}</h1>
                    <div className='w-screen sm:max-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-md p-10 flex flex-col justify-center'>
                    <div className='text-chiffon text-center align-middle'>
                        <ClipLoader color={'#FDFFFF'} />
                    </div>
                </div>
    </div>;
    }

    return (
        <div className='flex flex-col items-center w-full'>
            <h1 className='pt-4 pb-8 text-2xl font-semibold text-chiffon text-center font-serif'>{heading}</h1>
            <div className='rounded-md w-screen sm:max-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-md flex flex-col justify-center shadow-purple-200 shadow-lg'>
                <WordTranslation word={word} translation={translation} />
            </div>
            
        </div>

    )
}

export default WordOfTheDay;