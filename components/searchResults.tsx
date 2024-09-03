'use client'

import React from 'react';
import WordTranslation from './wordTranslation';


const SearchResults = ({ results }: any) => {
    
    const allResultsEmpty = results.every((result: any) => result.length === 0);

    //console.log('the search results:', results);

    return (
        <div className="w-full bg-transparent flex flex-col justify-center">
            <div className="py-4 space-y-6">
                <h1 className="text-2xl font-semibold text-chiffon text-center">Search Results</h1>
                <div className="max-h-screen overflow-y-auto pr-4">
                    {allResultsEmpty ? (
                        <div className='text-chiffon w-full p-6 text-center'>
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