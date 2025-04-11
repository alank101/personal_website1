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
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">React</span>
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">JavaScript</span>
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">HTML</span>
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">CSS</span>
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">Tailwind</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-teal-100 to-green-100 rounded-xl p-6">
                            <h2 className="text-2xl font-semibold text-teal-700 mb-4">My Interests</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Web Development</li>
                                <li>UI/UX Design</li>
                                <li>Open Source</li>
                                <li>New Technologies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 