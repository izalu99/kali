
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
        <div className="font-serif w-full p-4 bg-white border-gray-400 rounded-lg sm:p-6 md:p-8">
            <div className="flex flex-col lg:flex-row justify-evenly space-y-6 bg-white border-gray-400 rounded-lg shadow-lg shadow-gray-800 sm:p-6 md:p-8">
                <div className='flex flex-col'>
                    <h1 className='text-black font-bold text-3xl'>New Word</h1>
                    <form onSubmit={handleWordSubmit}>
                        <div className='font-medium text-black text-sm lg:text-lg mb-4 border-b border-black flex flex-row justify-between'>
                            <label className="block self-center">Id</label>
                            <input className="bg-white" value={wordId} required disabled></input>
                        </div>
                        
                        <div className='font-medium text-black text-sm lg:text-lg mb-4 border-b border-black flex flex-row justify-between'>
                            <label className="block self-center">text</label>
                            <input className="bg-white" placeholder='Word text' required></input>
                        </div>
    
                        <div className='text-black font-medium text-sm lg:text-lg mb-4 border-b border-black flex flex-row justify-between'>
                            <label className="block self-center">Word Type</label>
                            <input className="bg-white" placeholder='e.g., adjective, adverb, noun, verb,...'></input>
                        </div>
    
                        <div className='text-black font-medium text-sm lg:text-lg mb-4 border-b border-black flex flex-row justify-between'>
                            <label className="block self-center">Tense</label>
                            <input className="bg-white" placeholder='e.g., past, present, future'></input>
                        </div>
    
                        <div className='text-black font-medium text-sm lg:text-lg mb-4 border-b border-black flex flex-row justify-between'>
                            <label className="block self-center">Example sentence</label>
                            <input className="bg-white" placeholder='Example'></input>
                        </div>
                    </form>
                    
                    <button 
                    className='bg-blue-500 text-white font-medium text-sm lg:text-lg rounded-lg p-2 mx-auto'>
                        Create Word
                    </button>
                </div>
                
                <div className='flex flex-col'>
                    <h1 className='text-black font-bold text-3xl'>Translation</h1>
                    <form onSubmit={handleTranslationSubmit}>
                        <div className='text-sm lg:text-lg mb-4 border-b border-black flex flex-row justify-between'>
                            <label className="block font-medium text-black self-center">Translation Id</label>
                            <input className="font-medium text-black bg-white" value={translationId} disabled></input>
                        </div>
                        
                        <div className='text-sm lg:text-lg mb-4 border-b border-black flex flex-row justify-between'>
                            <label className="block font-medium text-black self-center">Translation text</label>
                            <input className="font-medium text-black bg-white" placeholder='Translation text' required></input>
                        </div>
                        
                        <div className='text-sm lg:text-lg mb-4 border-b border-black flex flex-row justify-between'>
                            <label className="block font-medium text-black self-center">Translation language</label>
                            <input className="font-medium text-black bg-white" placeholder='e.g., english' required></input>
                        </div>
                        
                        <div className='text-sm lg:text-lg mb-4 border-b border-black flex flex-row justify-between'>
                            <label className="block font-medium text-black self-center">Word Id</label>
                            <input className="font-medium text-black bg-white" value={wordId} required disabled></input>
                        </div>
                    </form>
                    
                    <button 
                    className='bg-blue-500 text-white font-medium text-sm lg:text-lg rounded-lg p-2 mx-auto'>
                        Create Translation
                    </button>
                </div>
                
            </div>
        </div>
    
        );

};

export default NewWordForm;