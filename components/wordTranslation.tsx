'use client'
import React from 'react';
import TranslationCard from './translationCard';
import WordCard from './wordCard';

const WordTranslation = ({word, translation}:any) => {
    const language = translation.language ? translation.language : "translation";
    return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-6">
            <h1 className="text-xl font-medium text-gray-900 dark:text-white">{word.text}</h1>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">{`${language}: ${translation.text}`}</h2>
            <div>
                <ul>
                    <li>
                        <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{word.type ? word.type : ""}</p>
                    </li>
                    <li>
                        <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{word.tense ? word.tense : ""}</p>
                    </li>
                </ul>
                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{word.example ? word.example : ""}</p>
            </div>
        </div>
    </div>

    );
};

export default WordTranslation;