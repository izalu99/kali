'use client'

import React from 'react';
import WordTranslation from './wordTranslation';


const SearchResults = ({results}:any) => {

    console.log(results);

    return (
        <div className="w-1/2 m-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
            <div className="space-y-6 justify-items-center">
                <h1 className="text-xl font-medium text-gray-900 ">Search Results</h1>
                <div>
                    {results.length === 0 ? (
                        <p className="text-sm">No results found</p>
                        ):(
                        <div>
                            {results?.map((result:any) => (
                                <div key={result.id}>
                                     <WordTranslation word={result} translation={result.translations[0]}/>
                                </div>
                                
                            ))}
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchResults;