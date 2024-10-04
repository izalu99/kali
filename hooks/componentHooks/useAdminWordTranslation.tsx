
import React, { useState } from 'react';
import { 
    updateWordAction, 
    updateTranslationAction, 
    deleteTranslationAndWordAction } from '@/app/actions/actions';

const useAdminWordTranslation = ({ word, translation }: any) => {
    const [loading, setLoading] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const [wordText, setWordText] = useState(word.text);
    const [wordPronunciation, setWordPronunciation] = useState(word.pronunciation || '');
    const [wordType, setWordType] = useState(word.type || '');
    const [wordTense, setWordTense] = useState(word.tense || '');
    const [wordExample, setWordExample] = useState(word.example || '');
    const [translationText, setTranslationText] = useState(translation.text || '');
    const [translationLanguage, setTranslationLanguage] = useState(translation.language || '');
    const [wordTransDeleted, setWordTransDeleted] = useState(false);
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        formData.set('wordId', word.id);
        formData.set('WordText', wordText);
        formData.set('wordPronunciation', wordPronunciation);
        formData.set('wordType', wordType);
        formData.set('wordTense', wordTense);
        formData.set('wordExample', wordExample);
        formData.set('translationId', translation.id);
        formData.set('translationText', translationText);
        formData.set('translationLanguage', translationLanguage);
        formData.set('wordId', translation.wordId);

        try {
            await updateWordAction(formData);
            await updateTranslationAction(formData);
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
        const tData = {
            id: translation.id,
            wordId: translation.wordId,
            text: translation.text,
            language: translation.language
        }
        try{
            await deleteTranslationAndWordAction(tData)
            setModalMessage('Word and translation deleted successfully!');
            setWordTransDeleted(true);
        } catch(event: any){
            console.error('Error deleting the word and translation: ', event);
            setModalMessage('Error deleting the word and translation: ' + event.message);
        } finally {
            setLoading(false);
        }
    };

    return{
        loading,
        modalMessage,
        setModalMessage,
        wordText,
        setWordText,
        wordPronunciation,
        setWordPronunciation,
        wordType,
        setWordType,
        wordTense,
        setWordTense,
        wordExample,
        setWordExample,
        translationText,
        setTranslationText,
        translationLanguage,
        setTranslationLanguage,
        wordTransDeleted,
        handleSubmit,
        handleDelete
    }
}

export default useAdminWordTranslation;