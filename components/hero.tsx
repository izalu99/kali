import Link from "next/link";


const Hero = () => {
    return (
        <div className="rounded-md pt-20 pb-20 m-auto flex flex-col font-serif justify-center text-center bg-gradient-to-r from-blue-500 to-purple-500 text-chiffon">
            <h1 className="text-xl px-10 ">Welcome to kali.</h1>
            <p className='text-lg mb-8 px-10'> A library for learners in the meaning, history and usage of kankanaey words and phrases, one of the many dialects of the Cordilleras.</p>
            <div className='mt-10 flex flex-wrap justify-center items-center space-x-4'>
                <Link href="/browse">
                    <button className="
                    min-w-[120px]
                    max-w-[200px]
                    text-sm
                    text-center
                    align-middle
                    font-serif
                    font-semibold
                    text-chiffon
                    p-4
                    rounded-full
                    bg-red-600
                    hover:text-chiffon
                    hover:bg-darkRed
                    duration-300
                    ease-in-out
                    ">
                        <span>Dive into the alphabet</span>
                    </button>
                </Link>
                <Link href="/about">
                    <button className="
                    min-w-[120px]
                    max-w-[200px]
                    text-sm
                    text-center
                    align-middle
                    font-serif
                    font-semibold
                    text-chiffon
                    p-4
                    rounded-full
                    bg-red-600
                    hover:text-chiffon
                    hover:bg-darkRed
                    duration-300
                    ease-in-out">
                            <span>About this project</span>
                    </button>
                </Link>
            </div>
      </div>
    );
};

export default Hero;