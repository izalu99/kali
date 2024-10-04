'use client'
import React, { useEffect, useState } from 'react';
import { createWordAction, createTranslationAction } from '@/app/actions/actions';
import { v4 as uuidv4 } from 'uuid';


const useNewWordForm = () => {
    const [loading, setLoading] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [wordId, setWordId] = useState('');
    const [translationId, setTranslationId] = useState('');
    const [wordText, setWordText] = useState('');
    const [wordPronunciation, setWordPronunciation] = useState('');
    const [wordType, setWordType] = useState('');
    const [wordTense, setWordTense] = useState('');
    const [wordExample, setWordExample] = useState('');
    const [translationText, setTranslationText] = useState('');
    const [translationLanguage, setTranslationLanguage] = useState('');


    useEffect(() => {
        setWordId(uuidv4());
        setTranslationId(uuidv4());
    }, []);

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

    return{
        modalMessage,
        setModalMessage,
        wordId,
        wordText,
        wordPronunciation,
        wordType,
        wordTense,
        wordExample,
        translationId,
        translationText,
        translationLanguage,
        loading,
        setWordText,
        setWordPronunciation,
        setWordType,
        setWordTense,
        setWordExample,
        setTranslationText,
        setTranslationLanguage,
        handleSubmit
    }


}

export default useNewWordForm;