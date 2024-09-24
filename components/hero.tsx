import Link from "next/link";
import { getContentForHero } from "@/content/queries";

const Hero = async () => {
    const data = await getContentForHero();
    const heroContent = data.heroCollection.items[0];
    const callToAction = heroContent.callToActionCollection.items;

    
    return (
        <div id='hero' className="rounded-md pt-20 pb-20 m-auto flex flex-col font-serif justify-center text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-30 shadow-purple-200 shadow-lg text-chiffon">
            <h1 id='heroHeading' className="text-xl px-10 ">{heroContent.heroHeading}</h1>
            <p id='heroDescription' className='text-lg mb-8 px-10'>{heroContent.heroDescription}</p>
            <div id='heroCta' className='mt-10 flex flex-wrap justify-center items-center space-x-4'>
                <Link id='heroCtaBrowseLink' href={callToAction[0].link}>
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
                    bg-purple-400
                    hover:text-chiffon
                    hover:bg-darkRed
                    duration-300
                    ease-in-out
                    shadow-lg
                    transform hover:scale-105
                    ">
                        <span id='heroCtaBrowseText'>{callToAction[0].label}</span>
                    </button>
                </Link>
                <Link id='heroCtaAboutLink' href={callToAction[1].link}>
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
                    bg-purple-400
                    hover:text-chiffon
                    hover:bg-darkRed
                    duration-300
                    ease-in-out
                    shadow-lg
                    transform hover:scale-105
                    ">
                            <span id='heroCtaAboutText'>{callToAction[1].label}</span>
                    </button>
                </Link>
            </div>
      </div>
    );
};

export default Hero;