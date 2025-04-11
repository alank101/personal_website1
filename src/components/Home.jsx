const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                    <h1 className="text-5xl font-bold text-green-600 mb-6 text-center">Welcome to My Portfolio</h1>
                    
                    <div className="space-y-6">
                        <p className="text-xl text-gray-700 leading-relaxed text-center">
                            Hi there! I'm a passionate developer who loves creating beautiful and functional web applications.
                            Explore my projects and get in touch to collaborate!
                        </p>
                        
                        <div className="flex justify-center space-x-4 mt-8">
                            <a 
                                href="/projects" 
                                className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
                            >
                                View My Projects
                            </a>
                            <a 
                                href="/contact" 
                                className="px-6 py-3 bg-white border-2 border-green-500 text-green-600 font-medium rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
                            >
                                Contact Me
                            </a>
                        </div>
                        
                        <div className="bg-gradient-to-r from-teal-100 to-green-100 rounded-xl p-6 mt-12">
                            <h2 className="text-2xl font-semibold text-teal-700 mb-4 text-center">What I Do</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <span className="text-3xl mb-2 block">💻</span>
                                    <h3 className="text-lg font-medium text-green-700">Web Development</h3>
                                    <p className="text-gray-600">Creating responsive and interactive websites</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <span className="text-3xl mb-2 block">🎨</span>
                                    <h3 className="text-lg font-medium text-green-700">UI/UX Design</h3>
                                    <p className="text-gray-600">Designing beautiful and intuitive interfaces</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <span className="text-3xl mb-2 block">🚀</span>
                                    <h3 className="text-lg font-medium text-green-700">Performance</h3>
                                    <p className="text-gray-600">Optimizing for speed and efficiency</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 