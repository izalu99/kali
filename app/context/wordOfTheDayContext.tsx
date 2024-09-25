'use client'

import { getRandomWord, searchRandomWordAction } from "@/app/actions/actions"
import React, { useState, useEffect, useCallback, createContext, ReactNode } from "react";
import { getContentForWordOfTheDay } from "@/content/queries";

interface WordContextProps {
    word: any;
    translation: any;
    refreshWord: () => void;
    heading: string;
}


export const WordContext = createContext<WordContextProps | undefined>(undefined);

export const WordOTDProvider = ({ children }: { children: ReactNode }) => {

    const [heading, setHeading] = useState<string>('');

    const fetchContent = async () => {
        try {
            const data = await getContentForWordOfTheDay();
            const { heading } = data.wordOfTheDayCollection.items[0];
            setHeading(heading);
        } catch (error) {
            console.error('Error fetching word of the day content:', error);
        }
    };

    const [word, setWord] = useState<any>(null);
    const [translation, setTranslation] = useState<any>(null);

    const getWord = useCallback(async () => {
        const randomWord = await getRandomWord(searchRandomWordAction);
        if (randomWord) {
            setWord(randomWord);
            if (randomWord.translations.length > 0) {
                const randomTranslation = randomWord.translations[0];
                setTranslation(randomTranslation);
            }
        }
    }, []);

    useEffect(() => {
        getWord();
    }, [getWord]);

    useEffect(() => {
        fetchContent();
    }, []);

    return (
        <WordContext.Provider value={{ word, translation, refreshWord: getWord, heading }}>
            {children}
        </WordContext.Provider>
    );
}
