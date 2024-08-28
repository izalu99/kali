'use client'
import React from 'react';

// for word display after search
const AdminWordTranslation = ({word, translation}: any) => {
    
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
        <div key={word.id} className="font-serif w-full p-6 bg-chiffon border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex flex-col lg:flex-row justify-evenly space-y-6 lg:space-y-0 lg:space-x-6">
                <div className='flex flex-col w-full lg:w-1/2'>
                    <h1 className='text-black font-bold text-3xl mb-4'>New Word</h1>
                    <form onSubmit={handleWordSubmit} className="space-y-4">
                        <div className='flex flex-col group'>
                            <label className="font-medium text-black mb-2">Id</label>
                            <input className="bg-gray-100 p-2 text-gray-700 disabled:bg-gray-200 rounded-lg" value={word.id} required disabled></input>
                            <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                        </div>
                        
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Text</label>
                            <input className="bg-gray-100 p-2 rounded-lg text-gray-700" placeholder={word.text} required></input>
                        </div>
    
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Word Type</label>
                            <input className="bg-gray-100 p-2 rounded-lg text-gray-700" placeholder={word.type? word.type : 'e.g., adjective, noun, verb,...'} ></input>
                        </div>
    
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Tense</label>
                            <input className="bg-gray-100 p-2 rounded-lg text-gray-700" placeholder={word.tense? word.tense : 'e.g., past, present, future'}></input>
                        </div>
    
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Example Sentence</label>
                            <input className="bg-gray-100 p-2 rounded-lg text-gray-700" placeholder={word.example? word.example: 'Example'}></input>
                        </div>
                        
                        <button 
                        className='bg-sunglow text-black font-medium text-lg rounded-lg p-2 mt-4 hover:bg-sunglow transition-colors duration-200'>
                            Update Word
                        </button>
                    </form>
                </div>
                
                <div className='flex flex-col w-full lg:w-1/2'>
                    <h1 className='text-black font-bold text-3xl mb-4'>Translation</h1>
                    <form onSubmit={handleTranslationSubmit} className="space-y-4">
                        <div className='flex flex-col group'>
                            <label className="font-medium text-black mb-2">Translation Id</label>
                            <input className="bg-gray-100 p-2 rounded-lg text-gray-700 disabled:bg-gray-200" value={translation.id} disabled></input>
                            <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                        </div>
                        
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Translation Text</label>
                            <input className="bg-gray-100 p-2 rounded-lg text-gray-700" placeholder={translation.text} required></input>
                        </div>
                        
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Translation Language</label>
                            <input className="bg-gray-100 p-2 rounded-lg text-gray-700" placeholder={translation.language ? translation.language : 'e.g., English'} required></input>
                        </div>
                        
                        <div className='flex flex-col group'>
                            <label className="font-medium text-black mb-2">Word Id</label>
                            <input className="bg-gray-100 p-2 rounded-lg text-gray-700 disabled:bg-gray-200" value={translation.wordId} required disabled></input>
                            <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                        </div>
                        
                        <button 
                        className='bg-sunglow text-black font-medium text-lg rounded-lg p-2 mt-4 hover:bg-sunglow transition-colors duration-200'>
                            Update Translation
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AdminWordTranslation;