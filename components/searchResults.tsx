'use client'

import React from 'react';


const SearchResults = ({results}:any) => {

    console.log(results);


    return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="space-y-6">
                <h1 className="text-xl font-medium text-gray-900 dark:text-white">Search Results</h1>
                <div>
                    {results.length === 0 ? (
                        <p className="text-sm text-gray-500 dark:text-gray-400">No results found</p>
                    ):(
                        <ul>
                            {results?.map((result:any) => (
                                <li key={result.id}>
                                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{result.text}</p>
                                    <p className="block text-sm text-gray-500 dark:text-gray-400">
                                        {result.translations ? result.translations[0].language : 'no translation??'}</p>
                                </li>
                            ))}
                        </ul>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchResults;