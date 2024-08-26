
import Search from "@/components/search";
import WordCard from "@/components/wordCard";
import TranslationCard from "@/components/translationCard";
import NewWord from "@/components/newWord";

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
            <Search />
            <NewWord />
        </div>
    )
}

export default adminPage