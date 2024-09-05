const AtoZ = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return (
        <div className='sticky top-0 grid grid-cols-10 gap-1'>
            {letters.map((letter) => (
                <button key={letter} 
                className='text-xs text-center font-serif font-semibold text-black p-4 rounded-lg hover:text-darkRed'>
                {letter}</button>
            ))}
        </div>
    );
}

export default AtoZ;