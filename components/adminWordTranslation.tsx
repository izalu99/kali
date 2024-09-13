'use client'
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import UPDATEWORD_MUTATION from '@/gql/updateWord';
import UPDATETRANSLATION_MUTATION from '@/gql/updateTranslation';
import Modal from '@/components/modal';
import DELETETRANSLATIONANDWORD_MUTATION from '@/gql/deleteTranslationAndWord';

// for word display after search
const AdminWordTranslation = ({ word, translation }: any) => {
    const [updateWord] = useMutation(UPDATEWORD_MUTATION);
    const [updateTranslation] = useMutation(UPDATETRANSLATION_MUTATION);
    const [deleteTranslationAndWord] = useMutation(DELETETRANSLATIONANDWORD_MUTATION);
    const [loading, setLoading] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const [wordText, setWordText] = useState(word.text);
    const [wordPronunciation, setWordPronunciation] = useState(word.pronunciation || '');
    const [wordType, setWordType] = useState(word.type || '');
    const [wordTense, setWordTense] = useState(word.tense || '');
    const [wordExample, setWordExample] = useState(word.example || '');
    const [translationText, setTranslationText] = useState(translation.text);
    const [translationLanguage, setTranslationLanguage] = useState(translation.language || '');
    const [wordTransDeleted, setWordTransDeleted] = useState(false);
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const wData = {
            id: word.id,
            text: wordText,
            pronunciation: wordPronunciation,
            type: wordType,
            tense: wordTense,
            example: wordExample
        };

        const tData = {
            id: translation.id,
            text: translationText,
            language: translationLanguage,
            wordId: translation.wordId
        };

        try {
            await updateWord({ variables: { input: wData } });
            await updateTranslation({ variables: { input: tData } });
            setModalMessage('Word and translation updated successfully!');
        } catch (event: any) {
            console.error('Error updating the word and translation: ', event);
            setModalMessage('Error updating the word and translation: ' + event.message);
        } finally {
            setLoading(false);
        }
    };


    const handleDelete = async () => {
        setLoading(true);
        try{
            await deleteTranslationAndWord({ variables:{
                input: {
                    id: translation.id,
                    text: translation.text,
                    language: translation.language,
                    wordId: translation.wordId
                }
            }});
            setModalMessage('Word and translation deleted successfully!');
            setWordTransDeleted(true);
        } catch(event: any){
            console.error('Error deleting the word and translation: ', event);
            setModalMessage('Error deleting the word and translation: ' + event.message);
        } finally {
            setLoading(false);
        }
    };

    if(wordTransDeleted) return null;
    
    return (
        <div key={word.id} className="font-serif w-full p-6 bg-chiffon border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            {modalMessage && <Modal message={modalMessage} onClose={() => setModalMessage('')} />}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col lg:flex-row justify-evenly space-y-6 lg:space-y-0 lg:space-x-6">
                    <div className='flex flex-col w-full lg:w-1/2'>
                        <h1 className='text-black font-bold text-3xl mb-4'>Word</h1>
                        <div className="space-y-4">
                            <div className='flex flex-col group'>
                                <label className="font-medium text-black mb-2">Id</label>
                                <input name="wordId" className="bg-gray-100 p-2 text-gray-700 disabled:bg-gray-200 rounded-lg" value={word.id} required disabled></input>
                                <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                            </div>
                            
                            <div className='flex flex-col'>
                                <label className="font-medium text-black mb-2">Text</label>
                                <input name="wordText" className="bg-gray-100 p-2 rounded-lg text-gray-700" value={wordText} onChange={(e) => setWordText(e.target.value)} required></input>
                            </div>

                            <div className='flex flex-col'>
                                <label className="font-medium text-black mb-2">Pronunciation</label>
                                <input name='wordPronunciation' className="bg-gray-100 p-2 rounded-lg text-black" value={wordPronunciation} onChange={(e) => setWordPronunciation(e.target.value)} placeholder='How is the word is spoken by ear...'></input>
                            </div>
        
                            <div className='flex flex-col'>
                                <label className="font-medium text-black mb-2">Word Type</label>
                                <input name="wordType" className="bg-gray-100 p-2 rounded-lg text-gray-700" value={wordType} onChange={(e) => setWordType(e.target.value)} placeholder='e.g., adjective, noun, verb,...'></input>
                            </div>
        
                            <div className='flex flex-col'>
                                <label className="font-medium text-black mb-2">Tense</label>
                                <input name="wordTense" className="bg-gray-100 p-2 rounded-lg text-gray-700" value={wordTense} onChange={(e) => setWordTense(e.target.value)} placeholder='e.g., past, present, future'></input>
                            </div>
        
                            <div className='flex flex-col'>
                                <label className="font-medium text-black mb-2">Example Sentence</label>
                                <input name="wordExample" className="bg-gray-100 p-2 rounded-lg text-gray-700" value={wordExample} onChange={(e) => setWordExample(e.target.value)} placeholder='Example'></input>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex flex-col w-full lg:w-1/2'>
                        <h1 className='text-black font-bold text-3xl mb-4'>Translation</h1>
                        <div className="space-y-4">
                            <div className='flex flex-col group'>
                                <label className="font-medium text-black mb-2">Translation Id</label>
                                <input name="translationId" className="bg-gray-100 p-2 rounded-lg text-gray-700 disabled:bg-gray-200" value={translation.id} disabled></input>
                                <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                            </div>
                            
                            <div className='flex flex-col'>
                                <label className="font-medium text-black mb-2">Translation Text</label>
                                <input name="translationText" className="bg-gray-100 p-2 rounded-lg text-gray-700" value={translationText} onChange={(e) => setTranslationText(e.target.value)} required></input>
                            </div>
                            
                            <div className='flex flex-col'>
                                <label className="font-medium text-black mb-2">Translation Language</label>
                                <input name="translationLanguage" className="bg-gray-100 p-2 rounded-lg text-gray-700" value={translationLanguage} onChange={(e) => setTranslationLanguage(e.target.value)} placeholder='e.g., English' required></input>
                            </div>
                            
                            <div className='flex flex-col group'>
                                <label className="font-medium text-black mb-2">Word Id</label>
                                <input name="translationWordId" className="bg-gray-100 p-2 rounded-lg text-gray-700 disabled:bg-gray-200" value={translation.wordId} required disabled></input>
                                <small className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">This field is automatically created.</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button 
                        className='bg-sunglow text-black font-medium text-lg rounded-lg p-2 mt-4 hover:bg-black hover:text-chiffon transition-colors duration-200'>
                        {loading ? 'Updating...' : 'Update Word and Translation'}
                    </button>
                    <button 
                        type="button"
                        onClick={handleDelete}
                        className='bg-darkRed text-chiffon font-medium text-lg rounded-lg p-2 mt-4 hover:bg-black hover:text-darkRed transition-colors duration-200'>
                        {loading ? 'Deleting...' : 'Delete Word and Translation'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminWordTranslation;