

const about = () => {
    const heading = 'About kali';
    const description = `
    kali is a dictionary and kind of a translator app for the kankanaey dialect.\n
    The kankanaey dialect is spoken in the Cordillera region of the Philippines.\n
    The purpose of this app is to help people learn the kankanaey dialect.\n
    It is for those who have since learned other languages and want to keep their mother tongue.\n
    It is for those who grew up far from the mother land and want to keep in touch with their roots.\n
    It is also for the curious who want to learn a new dialect or language.\n
    The app is a work in progress; may it be useful.
    `;
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center text-chiffon font-serif'>
            <h1 className='font-bold sm:text-2xl md:text-3xl lg:text-4xl justify-self-center'>
                {heading}
            </h1>
            <p className='font-light px-36 py-15 md:px-52 lg:px-64 xl:px-96 sm:text-md md:text-lg lg:text-xl justify-self-center text-center' style={{whiteSpace: 'pre-line'}}>
                {description}
            </p>
        </div>
    );
}

export default about;