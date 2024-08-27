'use client'
import React from 'react';

// for word display after search
const WordTranslation = ({word, translation}: any) => {
    const language = translation.language ? translation.language : "translation";
    return (
        <div key={word.id} className="w-full p-6 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="space-y-4">
                <h1 className="text-2xl font-semibold text-gray-900">{word.text}</h1>
                <h2 className="text-xl font-medium text-gray-700">
                    {`${language}: `}
                    <span className='text-xl font-semibold'>{translation.text}</span>
                </h2>
                <ul className='text-base text-gray-600 space-y-1'>
                    {word.type && <li className="flex items-center"><span className="font-semibold">Type:</span> {word.type}</li>}
                    {word.tense && <li className="flex items-center"><span className="font-semibold">Tense:</span> {word.tense}</li>}
                    {word.example && <li className="flex items-center"><span className="font-semibold">Example:</span> {word.example}</li>}
                </ul>
            </div>
        </div>
    );
};

export default WordTranslation;