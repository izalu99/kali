'use client'
import React from 'react';

// for word display after search
const WordTranslation = ({word, translation}:any) => {
    const language = translation.language ? translation.language : "translation";
    return (
    <div key={word.id} className="w-full p-4 bg-white border-gray-400 rounded-lg shadow-lg shadow-gray-800 sm:p-6 md:p-8">
        <div className="space-y-6">
            <h1 className="text-xl font-medium text-black ">{word.text}</h1>
            <h2 className="text-lg font-medium text-black">{`${language}: ${translation.text}`}</h2>
            <ul className='text-mg text-gray-700 items-center justify-evenly'>
                <li>{word.type ? word.type : ""}</li>
                <li>{word.tense ? word.tense : ""}</li>
                <li>{word.example ? word.example : ""}</li>
            </ul>
        </div>
    </div>

    );
};

export default WordTranslation;