'use client';

import { useEffect, useState, useTransition } from "react";
import { searchAction } from '@/app/actions/actions';
import { getContentForSearch } from "@/content/queries";

export interface Translation {
    id: string;
    text: string;
    language: string;
    wordId: number;
}
  
export interface Word {
id: string;
text: string;
pronunciation: string;
type: string;
tense: string;
example: string;
translations: Translation[];
}


const useSearch = () => {

    const [heading, setHeading] = useState<string>('');
    const [searchResultsHeading, setSearchResultsHeading] = useState<string>('');
    const [input, setInput] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Word[]>([]);
    const [hasSearched, setHasSearched] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isPending, startTransition] = useTransition();
    const [limit] = useState<number>(10);
    const [offset, setOffset] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);

    useEffect(() => {
        const fetchContent = async () => {
        try {
            const data = await getContentForSearch();
            const { heading, searchResultsHeading } = data.searchCollection.items[0];
            setHeading(heading);
            setSearchResultsHeading(searchResultsHeading);
        } catch (error) {
            console.error('Error fetching search content:', error);
        }
        };

        fetchContent();
    }, []);

    const handleSearch = async (formData: FormData) => {
        try {
        setOffset(0);
        const { results, hasMore } = await searchAction(formData, limit, 0) as { results: any; hasMore: boolean; };
        console.log(results);
        setSearchResults(results);
        setHasMore(hasMore)
        setHasSearched(true);
        setErrorMessage('');
        } catch (error: any) {
        setErrorMessage(error.message);
        setHasSearched(false);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        startTransition(() => {
        handleSearch(formData);
        });
    };

    const handleLoadMore = async () => {
        try{
        const newOffset = offset + limit;
        setOffset(newOffset);
        const formData = new FormData();
        formData.append('searchInput', input);
        const { results, hasMore } = await searchAction(formData, limit, newOffset) as { results: any; hasMore: boolean; };
        setSearchResults((prevResults: Word[]) => [...prevResults, ...results]);
        setHasMore(hasMore);
        console.log(results);
        } catch (error) {
        console.error('Error loading more search results: ', error);

        }
    };

    return {
        heading,
        searchResultsHeading,
        input,
        setInput,
        searchResults,
        hasSearched,
        errorMessage,
        isPending,
        limit,
        offset,
        hasMore,
        handleSubmit,
        handleLoadMore
    };



}

export default useSearch;