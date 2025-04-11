const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                    <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">About Me</h1>
                    
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Hello! I'm a passionate developer who loves creating beautiful and functional web applications. 
                            I specialize in React and modern web technologies.
                        </p>
                        
                        <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-xl p-6">
                            <h2 className="text-2xl font-semibold text-green-700 mb-4">My Skills</h2>
                            <div className="flex flex-wrap gap-3">
                                {/* Frontend Core */}
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">HTML</span>
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">CSS</span>
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">JavaScript</span>
                                
                                {/* Frontend Frameworks */}
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">React</span>
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">Tailwind</span>
                                
                                {/* Programming Languages */}
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">Python</span>
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">Swift</span>
                                
                                {/* Backend */}
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">Node.js</span>
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">Express</span>
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">MongoDB</span>
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">SQL</span>
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">PostgreSQL</span>
                                
                                {/* Additional Skills */}
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">Git</span>
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">RESTful APIs</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-teal-100 to-green-100 rounded-xl p-6">
                            <h2 className="text-2xl font-semibold text-teal-700 mb-4">My Interests</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-lg font-medium text-green-700 mb-2">Professional</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Web Development</li>
                                        <li>Blockchain Development</li>
                                        <li>Mobile App Development</li>
                                        <li>Progressive Web Apps</li>
                                        <li>Web Accessibility</li>
                                        <li>Agile Methodologies</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-green-700 mb-2">Personal</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Video Games</li>
                                        <li>Music</li>
                                        <li>Reading</li>
                                        <li>Coffee Enthusiast</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 