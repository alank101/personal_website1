import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4">
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-gray-600 hover:text-gray-900 font-medium">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="text-gray-600 hover:text-gray-900 font-medium">
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;