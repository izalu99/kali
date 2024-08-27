'use client'

import React from 'react';
import WordTranslation from './wordTranslation';


const SearchResults = ({ results }: any) => {
    console.log(results);

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="py-4 space-y-6">
                <h1 className="text-2xl font-semibold text-gray-900 text-center">Search Results</h1>
                <div className="max-h-screen overflow-y-auto">
                    {results.length === 0 ? (
                        <p className="text-sm text-gray-500">No results found</p>
                    ) : (
                        <div className="space-y-4">
                            {results?.map((result: any) => (
                                <div
                                    key={result.id}
                                    className="p-4"
                                >
                                    <WordTranslation word={result} translation={result.translations[0]} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;