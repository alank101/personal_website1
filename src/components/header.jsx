const Header = () => {
    return (
        <header className="bg-gradient-to-r from-green-500 to-teal-500 shadow-md">
            <nav className="container mx-auto px-4 py-4">
                <ul className="flex justify-center space-x-8">
                    <li>
                        <a href="/" className="text-white hover:text-green-100 transition-colors duration-200 flex items-center">
                            <span className="mr-2">🏠</span> Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-white hover:text-green-100 transition-colors duration-200 flex items-center">
                            <span className="mr-2">👤</span> About
                        </a>
                    </li>
                    <li>
                        <a href="/projects" className="text-white hover:text-green-100 transition-colors duration-200 flex items-center">
                            <span className="mr-2">💼</span> Projects
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-white hover:text-green-100 transition-colors duration-200 flex items-center">
                            <span className="mr-2">📧</span> Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;