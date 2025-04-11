import { Routes, Route } from 'react-router-dom';
import Header from './header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    )
}

export default App;