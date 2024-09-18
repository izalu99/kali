'use client'
import { getWords } from "@/app/actions/actions";
import { useState, useEffect, useCallback, useTransition, createContext, ReactNode, useRef} from "react";


interface WordsContextType {
    words: any[];
    isPending: boolean;
    loadMore: () => void;
}
export const WordsContext = createContext<WordsContextType | null>(null);


export const WordsProvider = ({children} : {children: ReactNode}) => {
    const [words, setWords] = useState<any[]>([]);
    const [isPending, startTransition] = useTransition();
    const [limit] = useState<number>(10);
    const [offset, setOffset] = useState<number>(0);
    const initialFetchDone = useRef<boolean>(false);

    const getWordsData = useCallback(async (limit: number, offset:number) => {
        try{
            console.log('getting words data...');
            console.log('limit: ', limit);
            console.log('offset: ', offset);
            const wordsData = await getWords(limit, offset);
            if (wordsData) {
                setWords(prevWords => [...prevWords, ...wordsData]);
            } else {
                console.error('Error getting words data.');
            }
        } catch (error) {
            console.error('Error getting words data: ', error);
        }  
    }, []);

    useEffect(() => {
        if (!initialFetchDone.current) {
            startTransition(() => { getWordsData(limit, offset) });
            initialFetchDone.current = true;
        }
    }, [limit, offset]);


    const loadMore = () => {
        setOffset(prevOffset => {
            const newOffset = prevOffset + limit;
            startTransition(() => { getWordsData(limit, newOffset) });
            return newOffset;
        });
    };


    return (
        <WordsContext.Provider value={{words, isPending, loadMore}}>
            {children}
        </WordsContext.Provider>
    )
};
