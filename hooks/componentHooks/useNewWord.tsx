'use client'
import React, { useState, useRef } from 'react';


const useNewWord = () => {
    const [newWordForms, setNewWordForms] = useState<number[]>([]);
    const [showPopup, setShowPopup] = useState(false);
    const formContainerRef = useRef<HTMLDivElement>(null);

    const handleNewWordBtn = () => {
        if (newWordForms.length < 3){
            setNewWordForms([...newWordForms, newWordForms.length + 1]);
            setTimeout(() => {
                formContainerRef.current?.scrollIntoView({behavior: 'smooth'});
            }, 100);
        }   else {
            setShowPopup(true);
        }
        
    };

    const handleCloseBtn = (index: number) => {
        setNewWordForms(newWordForms.filter((_, i) => i !== index));
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return {
        newWordForms,
        showPopup,
        formContainerRef,
        handleNewWordBtn,
        handleCloseBtn,
        handleClosePopup
    }
}

export default useNewWord;