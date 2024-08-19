
import SearchBar from "@/components/searchbar";
import WordCard from "@/components/wordCard";

const adminPage = () => {
    return (
        <div>
            <h1>Admin Page</h1>      
            <SearchBar />
            <WordCard initialWord="Hello" initialTranslation="Hallo" />

        </div>
    )
}

export default adminPage