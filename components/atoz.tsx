const AtoZ = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return (
        <div className='p-8 sticky grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2'>
            {letters.map((letter) => (
                <button key={letter} 
                className='min-w-[44px] max-w-[144px] text-xs text-center align-middle font-serif font-semibold text-black p-4 rounded-full  bg-lightGray hover:text-chiffon hover:bg-darkRed'>
                {letter}</button>
            ))}
        </div>
    );
}

export default AtoZ;