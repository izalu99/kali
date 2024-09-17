'use client'

import { getRandomWord, searchRandomWordAction } from "@/app/actions/actions"
import React, { useState, useEffect, useCallback, createContext, ReactNode } from "react";


interface WordContextProps {
    word: any;
    translation: any;
    refreshWord: () => void;
}


export const WordContext = createContext<WordContextProps | undefined>(undefined);

export const WordOTDProvider = ({ children }: { children: ReactNode }) => {

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

        return (
            <WordContext.Provider value={{ word, translation, refreshWord: getWord }}>
                {children}
            </WordContext.Provider>
        );
}
