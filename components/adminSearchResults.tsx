'use client'

import React from 'react';
import AdminWordTranslation from './adminWordTranslation';


const AdminSearchResults = ({ results }: any) => {
    
    const allResultsEmpty = results.every((result: any) => result.length === 0);

    return (
        <div className="w-full bg-chiffon border border-gray-200 rounded-lg shadow-lg">
            <div className="py-4 space-y-6">
                <h1 className="text-2xl font-semibold text-gray-900 text-center">Search Results</h1>
                <div className="max-h-screen overflow-y-auto">
                    {allResultsEmpty ? (
                        <div className='text-gray-600 w-full p-6 text-center'>
                            <p className="text-sm">No results found</p>
                        </div>
                        
                    ) : (
                        <div className="space-y-4">
                            {results?.map((result: any) => (
                                <div
                                    key={result.id}
                                    className="p-4"
                                >
                                    <AdminWordTranslation word={result} translation={result.translations[0]} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminSearchResults;