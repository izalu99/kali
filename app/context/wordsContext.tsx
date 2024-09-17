'use client'
import { getWords } from "@/app/actions/actions";
import { useState, useEffect, useCallback, useTransition, createContext, ReactNode} from "react";


interface WordsContextType {
    words: any[];
    isPending: boolean;
    refresh: () => void;
}
export const WordsContext = createContext<WordsContextType | null>(null);


export const WordsProvider = ({children} : {children: ReactNode}) => {
    const [words, setWords] = useState<any[]>([]);
    const [isPending, startTransition] = useTransition();
    const getWordsData = useCallback(async () => {
        const wordsData = await getWords();
        if (wordsData) {
            setWords(wordsData);
        } else {
            setWords([]);
            console.error('Error getting words data.');
        }
    }, []);

    useEffect(() => {
        startTransition(() => { getWordsData() });
    }, [getWordsData, startTransition]);

    return (
        <WordsContext.Provider value={{words, isPending, refresh: getWordsData}}>
            {children}
        </WordsContext.Provider>
    )
};
