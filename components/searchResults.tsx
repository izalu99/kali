'use client'

import React from 'react';
import WordTranslation from './wordTranslation';
import { ClipLoader } from 'react-spinners';

const SearchResults = ({ header, results, loading }: any) => {
    
    const allResultsEmpty = results.every((result: any) => result.length === 0);
    return (
        <div className="w-full bg-transparent flex flex-col justify-center">
            <div className="py-4 space-y-6">
                <h1 className="text-4xl font-bold font-serif text-chiffon text-center">{header}</h1>
                <div className="max-h-screen overflow-y-auto p-2">
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <ClipLoader color={'#FDFFFF'} />
                        </div>
                    ):allResultsEmpty ? (
                        <div className='text-chiffon font-serif w-full p-6 text-center'>
                            <p className="text-sm">No results found</p>
                        </div>
                        
                    ) : (
                        <div className="space-y-4">
                            {results?.map((result: any) => (
                                    <WordTranslation key={result.id} word={result} translation={result.translations[0]} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;