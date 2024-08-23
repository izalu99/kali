'use client'
import React, { useState } from 'react';

const WordCard = ({ Title, initialWord, CrudAction}: { Title: string, initialWord: any, CrudAction: string}) => {
    
    const [word, setWord] = useState(initialWord);

    const handleWordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value);
    }


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Word: ',word,);
    }
    
    
    return (
        

<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" onSubmit={handleSubmit}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">{Title}</h5>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">id</label>
            <input onChange={handleWordChange} type="text" name="id" id="id" placeholder={word.id? word.id : "Add an id"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">text</label>
            <input onChange={handleWordChange} type="text" name="text" id="text" placeholder="current text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">type</label>
            <input onChange={handleWordChange} type="text" name="type" id="type" placeholder={word.type? word.type : "noun, verb, adjective, adverb...?"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">tense</label>
            <input onChange={handleWordChange} type="text" name="tense" id="tense" placeholder={word.tense? word.tense : "past, present, or future?"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">example</label>
            <input onChange={handleWordChange} type="text" name="example" id="example" placeholder={word.example? word.example : "Add an example."} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{CrudAction}</button>
    </form>
</div>

    );
};

export default WordCard;