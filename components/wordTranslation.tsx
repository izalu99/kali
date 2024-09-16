'use client'
import React from 'react';

// for word display after search
const WordTranslation = ({word, translation}: any) => {

    return (
        <div key={word.id} 
        className="h-96 p-6 bg-black rounded-md flex flex-col justify-end">
            <div className="space-y-4">
                <h1 className="text-4xl font-semibold text-chiffon">{word.text}</h1>
                <div className='text-base text-lightGray space-y-1'>
                    {word.pronunciation && <span className="font-semibold">[{word.pronunciation}], </span>}
                    {word.type && <span className="font-semibold">{word.type}</span>}
                    {word.type && word.tense && <span className="font-semibold">, </span>}
                    {word.tense && <span className="font-semibold">{word.tense}</span>}
                </div>
                <hr className='border-chiffon'/>
                <div className='text-base text-lightGray space-y-1'>
                    <h2 className="text-xl font-medium text-lightGray">
                        <span className='text-2xl font-semibold text-chiffon'>{translation.text}</span>
                        {translation.language && 
                        <span className='text-lg font-style: italic'> ({translation.language})</span>}
                    </h2>
                    {word.example && <span className="font-semibold">{word.example}</span>}
                </div>
            </div>
        </div>
    );
};

export default WordTranslation;