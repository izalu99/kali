import Link from "next/link";

const Footer = () => {
    return (
        <footer className='bg-transparent p-8 text-chiffon'>
            <div className='container mx-auto text-center'>
                <p className='mb-5'>
                &copy; {new Date().getFullYear()} kali. All rights reserved.
                </p>
                <div className='hover:underline'>
                    <Link href='/about'> About Kali </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;