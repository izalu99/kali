
// NewWord component handle the new word button, form and its submission

'use client'
import React, {useState} from 'react';
import NewWordForm from './newWordForm';


const NewWord = () => {
    const [isNewWordBtnClicked, setIsNewWordBtnClicked] = useState(false);

    

    const handleNewWordBtn= () => {
        setIsNewWordBtnClicked(true);
    };

    const handleCloseBtn = () => {
        setIsNewWordBtnClicked(false);
    };

    
    
    return(
        <div className='font-serif'>
            <button onClick={handleNewWordBtn} className='font-serif bg-blue-500 text-white font-medium text-sm lg:text-lg rounded-lg p-2 mx-auto'>
                + New Word
            </button>
            {isNewWordBtnClicked && (
                <div className="relative">
                    <button onClick={handleCloseBtn} className="absolute top-0 right-0 bg-red-500 text-white font-medium text-sm lg:text-lg rounded-lg px-2 pb-1">Close</button>
                    <NewWordForm />
                </div>
            )}
        </div>
    )
};

export default NewWord;