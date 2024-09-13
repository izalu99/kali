'use client'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createWordAction, createTranslationAction } from '@/app/actions/actions';
import Modal from '@/components/modal';

const NewWordForm = () => {
    const generateWordId = () => uuidv4();
    const generateTransId = () => uuidv4();
    const wordId = generateWordId();
    const translationId = generateTransId();

    
    const [loading, setLoading] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const [wordText, setWordText] = useState('');
    const [wordPronunciation, setWordPronunciation] = useState('');
    const [wordType, setWordType] = useState('');
    const [wordTense, setWordTense] = useState('');
    const [wordExample, setWordExample] = useState('');
    const [translationText, setTranslationText] = useState('');
    const [translationLanguage, setTranslationLanguage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        formData.set('wordId', wordId);
        formData.set('translationId', translationId);
        formData.set('wordText', wordText);
        formData.set('wordPronunciation', wordPronunciation);
        formData.set('wordType', wordType);
        formData.set('wordTense', wordTense);
        formData.set('wordExample', wordExample);
        formData.set('translationText', translationText);
        formData.set('translationLanguage', translationLanguage);
        formData.set('wordId', wordId);

        try {
            await createWordAction(formData);
            await createTranslationAction(formData);
            setModalMessage('Word and translation created successfully.');
        } catch (error){
            console.error('Error creating word and translation: ', error);
            setModalMessage('Failed to create word and translation.');
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="font-serif w-full p-6 bg-chiffon border border-gray-300 rounded-lg shadow-lg">
            {modalMessage && <Modal message={modalMessage} onClose={() => setModalMessage('')} />}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col lg:flex-row justify-evenly space-y-6 lg:space-y-0 lg:space-x-6">
                    <div className='flex flex-col w-full lg:w-1/2'>
                        <h1 className='text-black font-bold text-3xl mb-4'>New Word</h1>
                        <div className='flex flex-col group'>
                            <label className="font-medium text-black mb-2">
                                Id
                                <input id="wordId" aria-label='wordId' name='wordId' className="w-full bg-gray-100 p-2 text-gray-700 disabled:bg-gray-200 rounded-lg" value={wordId} required disabled></input>
                            </label>
                            <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                        </div>
                        
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">
                                Text 
                                <input aria-label='wordText' name='wordText' className="w-full bg-gray-100 p-2 rounded-lg text-black" value={wordText} onChange={(e) => setWordText(e.target.value)} placeholder='Word text' required></input>
                            </label>    
                        </div>

                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">
                                Pronunciation
                                <input aria-label='wordPronunciation' name='wordPronunciation' className="w-full bg-gray-100 p-2 rounded-lg text-black" value={wordPronunciation} onChange={(e) => setWordPronunciation(e.target.value)} placeholder='How is the word is spoken by ear...'></input>
                            </label>
                        </div>
    
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">
                                Word Type
                                <input aria-label='wordType' name='wordType' className="w-full bg-gray-100 p-2 rounded-lg text-black" value={wordType} onChange={(e) => setWordType(e.target.value)} placeholder='e.g., adjective, adverb, noun, verb,...'></input>
                            </label>
                        </div>
    
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">
                                Tense
                                <input aria-label='wordTense' name='wordTense' className="w-full bg-gray-100 p-2 rounded-lg text-black" value={wordTense} onChange={(e) => setWordTense(e.target.value)} placeholder='e.g., past, present, future'></input>
                            </label>
                        </div>
    
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">
                                Example Sentence
                                <input aria-label='wordExample' name='wordExample' className="w-full bg-gray-100 p-2 rounded-lg text-black" value={wordExample} onChange={(e) => setWordExample(e.target.value)} placeholder='Example'></input>
                            </label>
                        </div>
                    </div>
                    
                    <div className='flex flex-col w-full lg:w-1/2'>
                        <h1 className='text-black font-bold text-3xl mb-4'>Translation</h1>
                        <div className='flex flex-col group'>
                            <label className="font-medium text-black mb-2">
                                Translation Id
                                <input aria-label='translationId' name='translationId' className="w-full bg-gray-100 p-2 rounded-lg text-gray-700 disabled:bg-gray-200" value={translationId} disabled></input>
                            </label>
                            <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                        </div>
                        
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">
                                Translation Text
                                <input aria-label='translationText' name='translationText' className="w-full bg-gray-100 p-2 rounded-lg text-black" value={translationText} onChange={(e) => setTranslationText(e.target.value)} placeholder='Translation text' required></input>
                            </label>
                        </div>
                        
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">
                                Translation Language
                                <input aria-label='translationLanguage' name='translationLanguage' className="w-full bg-gray-100 p-2 rounded-lg text-black" value={translationLanguage} onChange={(e) => setTranslationLanguage(e.target.value)} placeholder='e.g., English' required></input>
                            </label>
                        </div>
                        
                        <div className='flex flex-col group'>
                            <label className="font-medium text-black mb-2">
                                Word Id
                                <input aria-label='wordId' name='wordId' className="w-full bg-gray-100 p-2 rounded-lg text-gray-700 disabled:bg-gray-200" value={wordId} required disabled></input>
                            </label>
                            <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                        </div>
                    </div>
                </div>
                <button 
                    className='bg-sunglow text-black hover:text-chiffon font-medium text-lg rounded-lg p-2 mt-4 hover:bg-black transition-colors duration-200'>
                    {loading ? 'Creating...' : 'Create'}
                </button>
            </form>
        </div>
    );
};

export default NewWordForm;