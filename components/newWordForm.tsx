'use client'
import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import CREATEWORD_MUTATION from '@/gql/createWord';
import CREATETRANSLATION_MUTATION from '@/gql/createTranslation';
import Modal from '@/components/modal';

const NewWordForm = () => {
    const generateWordId = () => {return uuidv4();};
    const generateTransId = () => { return uuidv4();};
    const wordId = generateWordId();
    const translationId = generateTransId();

    const [createWord] = useMutation(CREATEWORD_MUTATION);
    const [createTranslation] = useMutation(CREATETRANSLATION_MUTATION);
    const [loading, setLoading] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const wData = {
            id: wordId,
            text: formData.get('wordText'),
            type: formData.get('type'),
            tense: formData.get('tense'),
            example: formData.get('example')
        };
        const tData = {
            id: translationId,
            text: formData.get('translationText'),
            language: formData.get('language'),
            wordId: wordId
        };

        try{
            await createWord({ variables: { input: wData } });
            await createTranslation({ variables: { input: tData } });
            setModalMessage('Word and translation created successfully!');
        } catch(event: any) {
            console.error('Error creating the word and translation: ', event);
            setModalMessage('Error creating the word and translation: ' + event.message);
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
                            <label className="font-medium text-black mb-2">Id</label>
                            <input name='wordId' className="bg-gray-100 p-2 text-gray-700 disabled:bg-gray-200 rounded-lg" value={wordId} required disabled></input>
                            <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                        </div>
                        
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Text</label>
                            <input name='wordText' className="bg-gray-100 p-2 rounded-lg text-black" placeholder='Word text' required></input>
                        </div>
    
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Word Type</label>
                            <input name='type' className="bg-gray-100 p-2 rounded-lg text-black" placeholder='e.g., adjective, adverb, noun, verb,...'></input>
                        </div>
    
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Tense</label>
                            <input name='tense' className="bg-gray-100 p-2 rounded-lg text-black" placeholder='e.g., past, present, future'></input>
                        </div>
    
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Example Sentence</label>
                            <input name='example' className="bg-gray-100 p-2 rounded-lg text-black" placeholder='Example'></input>
                        </div>
                    </div>
                    
                    <div className='flex flex-col w-full lg:w-1/2'>
                        <h1 className='text-black font-bold text-3xl mb-4'>Translation</h1>
                        <div className='flex flex-col group'>
                            <label className="font-medium text-black mb-2">Translation Id</label>
                            <input name='translationId' className="bg-gray-100 p-2 rounded-lg text-gray-700 disabled:bg-gray-200" value={translationId} disabled></input>
                            <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                        </div>
                        
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Translation Text</label>
                            <input name='translationText' className="bg-gray-100 p-2 rounded-lg text-black" placeholder='Translation text' required></input>
                        </div>
                        
                        <div className='flex flex-col'>
                            <label className="font-medium text-black mb-2">Translation Language</label>
                            <input name='language' className="bg-gray-100 p-2 rounded-lg text-black" placeholder='e.g., English' required></input>
                        </div>
                        
                        <div className='flex flex-col group'>
                            <label className="font-medium text-black mb-2">Word Id</label>
                            <input name='wordId' className="bg-gray-100 p-2 rounded-lg text-gray-700 disabled:bg-gray-200" value={wordId} required disabled></input>
                            <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                        </div>
                    </div>
                </div>
                <button 
                    className='bg-sunglow text-black font-medium text-lg rounded-lg p-2 mt-4 hover:bg-sunglow transition-colors duration-200'>
                    {loading ? 'Creating...' : 'Create'}
                </button>
            </form>
        </div>
    );
};

export default NewWordForm;