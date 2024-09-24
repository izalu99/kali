'use client';
import React from 'react';

// for word display after search
const WordTranslation = ({ word, translation }: any) => {
    return (
        <div key={word.id} className="h-96 p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg flex flex-col justify-end font-serif text-white">
            <div className="space-y-4">
                <h1 className="text-3xl xl:text-4xl font-bold">{word.text}</h1>
                <div className='text-lg space-y-1'>
                    {word.pronunciation && <span className="font-semibold">[{word.pronunciation}], </span>}
                    {word.type && <span className="font-semibold">{word.type}</span>}
                    {word.type && word.tense && <span className="font-semibold">, </span>}
                    {word.tense && <span className="font-semibold">{word.tense}</span>}
                </div>
                <hr className='border-white' />
                <div className='space-y-1'>
                    <h2 className="pb-5">
                        <span className='text-2xl font-semibold'>{translation.text}</span>
                        {translation.language &&
                            <span className='text-xl italic'> ({translation.language})</span>}
                    </h2>
                    {word.example && <span className="text-lg font-medium">{word.example}</span>}
                </div>
            </div>
        </div>
    );
};

export default WordTranslation;