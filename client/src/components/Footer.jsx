const Footer = () => {
    return (
        <footer className='flex items-center justify-center h-12 bg-blue-400 fixed bottom-0 left-0 right-0 z-10'>
            <p className=' text-white font-bold '>todo © {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;