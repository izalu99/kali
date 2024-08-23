
import SearchBar from "@/components/searchbar";
import WordCard from "@/components/wordCard";
import TranslationCard from "@/components/translationCard";

const adminPage = () => {

    const testWord = {
        id: "1",
        text: "wada",
        type: "adjective",
        tense: "present",
        example: "Ai wada?"
    }

    const testTranslation = {
        id: "trans-001",
        text: "there is; the existence of",
        language: "english",
        wordId: "1"
    }
    return (
        <div className='flex flex-col'>
            <h1>Admin Page</h1>      
            <SearchBar />
            <div className='flex flex-wrap justify-evenly m-10'>
                <WordCard initialWord={testWord} Title= {"Update"} CrudAction={"Update"} />
                <TranslationCard initialTranslation={testTranslation} Title= {"New Translation"} CrudAction={"Create Translation"} />
            </div>
        </div>
    )
}

export default adminPage