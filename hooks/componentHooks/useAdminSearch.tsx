
import { useState, useTransition } from "react";
import { searchAction } from "@/app/actions/actions";
import { Word } from "@/components/search";

const useAdminSearch = () => {
    const [input, setInput] = useState('');
    const [searchResults,setSearchResults] = useState<Word[]>([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isPending, startTransition] = useTransition();
    const [limit] = useState<number>(10);
    const [offset, setOffset] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    
    const handleSearch = async (formData: FormData) => {
        try {
            const {results, hasMore} = await searchAction(formData, limit, 0) as {results: any; hasMore: boolean};
            setSearchResults(results);
            setHasMore(hasMore);
            setHasSearched(true);
            setErrorMessage('');
        } catch (error: any) {
            setErrorMessage(error.message);
            setHasSearched(false);
        }
    }

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
      }
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        startTransition(() => {
            handleSearch(formData);
        });
    };


    return {
        input,
        setInput,
        searchResults,
        hasSearched,
        errorMessage,
        isPending,
        hasMore,
        handleSubmit,
        handleLoadMore,
    };

}

export default useAdminSearch;