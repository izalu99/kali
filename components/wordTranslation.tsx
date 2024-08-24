'use client'
import React from 'react';

// for word display after search
const WordTranslation = ({word, translation}:any) => {
    const language = translation.language ? translation.language : "translation";
    return (
    <div key={word.id} className="w-full p-4 bg-white border-gray-400 rounded-lg shadow-lg shadow-slate-800 sm:p-6 md:p-8">
        <div className="space-y-6">
            <h1 className="text-xl font-medium text-gray-900 ">{word.text}</h1>
            <h2 className="text-lg font-medium text-gray-900">{`${language}: ${translation.text}`}</h2>
            <div>
                <ul>
                    <li>
                        <p className="block mb-2 text-sm font-medium text-gray-900 ">{word.type ? word.type : ""}</p>
                    </li>
                    <li>
                        <p className="block mb-2 text-sm font-medium text-gray-900 ">{word.tense ? word.tense : ""}</p>
                    </li>
                </ul>
                <p className="block mb-2 text-sm font-medium text-gray-900 ">{word.example ? word.example : ""}</p>
            </div>
        </div>
    </div>

    );
};

export default WordTranslation;