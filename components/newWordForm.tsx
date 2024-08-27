'use client'
import React, {useState} from 'react';

const NewWordForm = () => {
    const generateWordId = () => {
        return 'word-001';
    };
    const generateTransId = () => {
        return 'trans-001'
    };
    const wordId = generateWordId();
    const translationId = generateTransId();

    const handleWordSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Word submitted');
        //add logic to the update of word in the db
    }

    const handleTranslationSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Translation submitted');
        //ad logic to the update of the word in the db
    };
    return (
        <div className="font-serif w-full p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row justify-evenly space-y-6 lg:space-y-0 lg:space-x-6">
                <div className='flex flex-col w-full lg:w-1/2'>
                    <h1 className='text-black font-bold text-3xl mb-4'>New Word</h1>
                    <form onSubmit={handleWordSubmit} className="space-y-4">
                        <div className='flex flex-col group'>
                            <label className="font-medium text-black mb-2">Id</label>
                            <input className="bg-gray-100 p-2 text-gray-700 disabled:bg-gray-200 rounded-lg" value={wordId} required disabled></input>
                            <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                        </div>
                        
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Text</label>
                            <input className="bg-gray-100 p-2 rounded-lg" placeholder='Word text' required></input>
                        </div>
    
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Word Type</label>
                            <input className="bg-gray-100 p-2 rounded-lg" placeholder='e.g., adjective, adverb, noun, verb,...'></input>
                        </div>
    
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Tense</label>
                            <input className="bg-gray-100 p-2 rounded-lg" placeholder='e.g., past, present, future'></input>
                        </div>
    
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Example Sentence</label>
                            <input className="bg-gray-100 p-2 rounded-lg" placeholder='Example'></input>
                        </div>
                        
                        <button 
                        className='bg-blue-500 text-white font-medium text-lg rounded-lg p-2 mt-4 hover:bg-blue-600 transition-colors duration-200'>
                            Create Word
                        </button>
                    </form>
                </div>
                
                <div className='flex flex-col w-full lg:w-1/2'>
                    <h1 className='text-black font-bold text-3xl mb-4'>Translation</h1>
                    <form onSubmit={handleTranslationSubmit} className="space-y-4">
                        <div className='flex flex-col group'>
                            <label className="font-medium text-black mb-2">Translation Id</label>
                            <input className="bg-gray-100 p-2 rounded-lg text-gray-700 disabled:bg-gray-200" value={translationId} disabled></input>
                            <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                        </div>
                        
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Translation Text</label>
                            <input className="bg-gray-100 p-2 rounded-lg" placeholder='Translation text' required></input>
                        </div>
                        
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Translation Language</label>
                            <input className="bg-gray-100 p-2 rounded-lg" placeholder='e.g., English' required></input>
                        </div>
                        
                        <div className='flex flex-col group'>
                            <label className="font-medium text-black mb-2">Word Id</label>
                            <input className="bg-gray-100 p-2 rounded-lg text-gray-700 disabled:bg-gray-200" value={wordId} required disabled></input>
                            <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                        </div>
                        
                        <button 
                        className='bg-blue-500 text-white font-medium text-lg rounded-lg p-2 mt-4 hover:bg-blue-600 transition-colors duration-200'>
                            Create Translation
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewWordForm;