
'use server';

import client from '@/apolloclient';
import SEARCH_QUERY from "@/gql/searchQuery";
import CREATEWORD_MUTATION from '@/gql/createWord';
import CREATETRANSLATION_MUTATION from '@/gql/createTranslation';
import UPDATEWORD_MUTATION from '@/gql/updateWord';
import UPDATETRANSLATION_MUTATION from '@/gql/updateTranslation';
import DELETETRANSLATIONANDWORD_MUTATION from '@/gql/deleteTranslationAndWord';



export const searchAction = async (formData: FormData) => {

    const searchInput = formData.get('searchInput') as string;
    if (!searchInput || searchInput.trim() === '') {
        throw new Error('Please enter a word or translation.');
    }

    try {
        const { data } = await client.query({
            query: SEARCH_QUERY,
            variables: { input: searchInput }
        });
        return data.search;
    } catch (error) {
        console.error('Error searching for word: ', error);
    }

};


export const createWordAction = async (formData: FormData) => {
    const wordData = {
        id: formData.get('wordId'),
        text: formData.get('wordText'),
        pronunciation: formData.get('wordPronunciation'),
        type: formData.get('wordType'),
        tense: formData.get('wordTense'),
        example: formData.get('wordExample')
    }

    try{
        const { data } = await client.mutate({
            mutation: CREATEWORD_MUTATION,
            variables: { input: wordData }
        });
        return data.createWord;
    } catch (error) {
        console.error('Error creating word: ', error);
        throw new Error('Failed to create word.');

    }
};


export const createTranslationAction = async (formData: FormData) => {
    const translationData = {
        id: formData.get('translationId'),
        text: formData.get('translationText'),
        language:formData.get('translationLanguage'),
        wordId: formData.get('wordId')
    }

    try {
        const { data } = await client.mutate({
            mutation: CREATETRANSLATION_MUTATION,
            variables: { input: translationData }
        });
        return data.createTranslation;
    } catch (error) {
        console.error('Error creating translation: ', error);
        throw new Error('Failed to create translation.');
    }
};


export const updateWordAction = async (formData: FormData) => {
    const wordData = {
        id: formData.get('wordId'),
        text: formData.get('wordText'),
        pronunciation: formData.get('wordPronunciation'),
        type: formData.get('wordType'),
        tense: formData.get('wordTense'),
        example: formData.get('wordExample')
    }

    try {
        const { data } = await client.mutate({
            mutation: UPDATEWORD_MUTATION,
            variables: { input: wordData }
        });
        return data.updateWord;
    } catch (error) {
        console.error('Error updating word: ', error);
        throw new Error('Failed to update word.');
    }
};


export const updateTranslationAction = async (formData: FormData) => {
    const translationData = {
        id: formData.get('translationId'),
        text: formData.get('translationText'),
        language: formData.get('translationLanguage'),
        wordId: formData.get('wordId')
    }

    try{
        const { data } = await client.mutate({
            mutation: UPDATETRANSLATION_MUTATION,
            variables: { input: translationData }
        });
        return data.updateTranslation;
    } catch (error) {
        console.error('Error updating translation: ', error);
        throw new Error('Failed to update translation.');
    }
}


type Tdata = {
    id: string,
    wordId: string,
    language: string,
    text: string
};
export const deleteTranslationAndWordAction = async (tData: Tdata) => {

    try {
        const { data } = await client.mutate({
            mutation: DELETETRANSLATIONANDWORD_MUTATION,
            variables: { input: tData }
        });
        return data.deleteTranslationAndWord;
    } catch (error) {
        console.error('Error deleting translation and word: ', error);
        throw new Error('Failed to delete translation and word.');
    }
};


