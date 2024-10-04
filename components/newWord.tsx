// NewWord component handle the new word button, form and its submission

'use client'
import NewWordForm from './newWordForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import useNewWord from '@/hooks/componentHooks/useNewWord';

const NewWord = () => {

    const {
        newWordForms,
        showPopup,
        formContainerRef,
        handleNewWordBtn,
        handleCloseBtn,
        handleClosePopup
    } = useNewWord();
    

    return (
        <div className='font-serif p-4'>
            <button 
                onClick={handleNewWordBtn} 
                className='bg-blue-300 hover:bg-black text-black hover:text-chiffon font-medium text-sm lg:text-lg rounded-lg p-2 mx-auto focus:outline-none transition-colors duration-200 flex items-center space-x-2'>
                <FontAwesomeIcon icon={faPlus} />
                <span>New Word</span>
            </button>
            <div ref={formContainerRef}>
                {newWordForms.map((_, index) =>(
                    <div key={index} className="relative mt-4">
                        <button 
                            onClick={()=>handleCloseBtn(index)} 
                            className=" bg-black rounded-tr-lg absolute top-0 right-0 text-chiffon font-medium text-sm lg:text-lg px-2 pb-1 hover:text-darkRed transition-colors duration-200 flex items-center space-x-2"
                        >
                            <span>Close</span>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <NewWordForm />
                    </div>
                ))}
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-chiffon p-4 rounded-lg shadow-lg">
                        <p className="text-black">3 max new word forms at a time.</p>
                        <button 
                            onClick={handleClosePopup} 
                            className="mt-2 bg-darkRed text-chiffon font-medium text-sm lg:text-lg rounded-lg p-2 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
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