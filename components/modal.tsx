const Modal = ({ message, onClose }: any) => (
    <div className="fixed inset-0 flex items-center justify-center bg-darkRed bg-opacity-50">
        <div className="bg-chiffon p-4 rounded-lg shadow-lg">
            <p className='text-black'>{message}</p>
            <button onClick={onClose} className="mt-4 bg-sunglow hover:bg-mikadoYellow text-black p-2 rounded-lg">Close</button>
        </div>
    </div>
);

export default Modal;