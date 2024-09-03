'use client'
import React from 'react';

// for word display after search
const WordTranslation = ({word, translation}: any) => {
    //console.log('word:', word);
    //console.log('translation:', translation);
    return (
        <div key={word.id} 
        className="h-96 p-6 bg-chiffon rounded-lg flex flex-col justify-end">
            <div className="space-y-4">
                <h1 className="text-2xl font-semibold text-gray-900">{word.text}</h1>
                <div className='text-base text-gray-600 space-y-1'>
                    {word.type && <span className="font-semibold">{word.type}</span>}
                    {word.type && word.tense && <span className="font-semibold">, </span>}
                    {word.tense && <span className="font-semibold">{word.tense}</span>}
                </div>
                <hr className='border-black'/>
                <div className='text-base text-gray-600 space-y-1'>
                    <h2 className="text-xl font-medium text-gray-700">
                        <span className='text-xl font-semibold'>{translation.text}</span>
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