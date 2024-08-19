'use client'
import React, { useState } from 'react';

const WordCard = ({ initialWord , initialTranslation}: { initialWord: any, initialTranslation: any }) => {
    
    const [word, setWord] = useState(initialWord);
    const [translation, setTranslation] = useState(initialTranslation);

    const handleWordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value);
    }

    const handleTranslationChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTranslation(e.target.value);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Word: ',word,);
        console.log('Translation:', translation)
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Word:
                    <input type="text" value={word} onChange={handleWordChange}/>
                </label>
            </div>
            <div>
                <label>
                    Translation:
                    <input type="text" value={translation} onChange={handleTranslationChange}/>
                </label>
            </div>
            <button type="submit">Submit</button>

        </form>
    );
};

export default WordCard;