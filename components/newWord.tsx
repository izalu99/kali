// NewWord component handle the new word button, form and its submission

'use client'
import React, { useState } from 'react';
import NewWordForm from './newWordForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const NewWord = () => {
    const [isNewWordBtnClicked, setIsNewWordBtnClicked] = useState(false);
    const [newWordForms, setNewWordForms] = useState<number[]>([]);
    const [showPopup, setShowPopup] = useState(false);

    const handleNewWordBtn = () => {
        if (newWordForms.length < 3){
            setIsNewWordBtnClicked(true);
            setNewWordForms([...newWordForms, newWordForms.length + 1]);
        }   else {
            setShowPopup(true);
        }
        
    };

    const handleCloseBtn = (index: number) => {
        setNewWordForms(newWordForms.filter((_, i) => i !== index));
        if (newWordForms.length === 1) {
            setIsNewWordBtnClicked(false);
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='font-serif p-4'>
            <button 
                onClick={handleNewWordBtn} 
                className='bg-blue-500 text-white font-medium text-sm lg:text-lg rounded-lg p-2 mx-auto hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 flex items-center space-x-2'
            >
                <FontAwesomeIcon icon={faPlus} />
                <span>New Word</span>
            </button>
            {newWordForms.map((_, index) =>(
                <div key={index} className="relative mt-4">
                    <button 
                        onClick={()=>handleCloseBtn(index)} 
                        className="absolute top-0 right-0 bg-red-500 text-white font-medium text-sm lg:text-lg rounded-lg px-2 pb-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200 flex items-center space-x-2"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                        <span>Close</span>
                    </button>
                    <NewWordForm />
                </div>
            ))}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p className="text-black">3 max new word forms at a time.</p>
                        <button 
                            onClick={handleClosePopup} 
                            className="mt-2 bg-blue-500 text-white font-medium text-sm lg:text-lg rounded-lg p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewWord;