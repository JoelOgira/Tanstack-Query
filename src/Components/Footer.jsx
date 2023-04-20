const Footer = () => {
    const now = new Date();
    const thisYear = now.getFullYear();

    return (        
    <footer className="bg-white shadow dark:bg-gray-900 fixed bottom-0 w-full">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <span className="block text-sm text-gray-500 text-center dark:text-gray-400">Tanstack_Query_Crud &copy; {thisYear}. All Rights Reserved</span>
        </div>
    </footer>
    )
}

export default Footer;