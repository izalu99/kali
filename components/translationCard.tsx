'use client'
import React, { useState } from 'react';

const TranslationCard = ({ Title, initialTranslation, CrudAction}: { Title: string, initialTranslation: any, CrudAction: string}) => {
    
    const [translation, setTranslation] = useState(initialTranslation);

    const handleTranslationChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTranslation(e.target.value);
    }


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Translation: ',translation,);
    }
    
    
    return (
        

<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" onSubmit={handleSubmit}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">{Title}</h5>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">id</label>
            <input onChange={handleTranslationChange} type="text" name="id" id="id" placeholder={translation.id? translation.id : "Add an id"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">text</label>
            <input onChange={handleTranslationChange} type="text" name="text" id="text" placeholder={translation.text? translation.text : "Add the translation."} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">type</label>
            <input onChange={handleTranslationChange} type="text" name="language" id="language" placeholder={translation.language? translation.language : "language (e.g., english, french,...)"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">tense</label>
            <input onChange={handleTranslationChange} type="text" name="tense" id="tense" placeholder={translation.wordId? translation.wordId : "Add the id of the word this translation is for."} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>

        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{CrudAction}</button>
    </form>
</div>

    );
};

export default TranslationCard;