const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-commerce Website",
            description: "A full-featured e-commerce platform with product listings, shopping cart, and payment integration.",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            image: "https://via.placeholder.com/600x400?text=E-commerce+Website"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A productivity app that helps users organize tasks, set reminders, and track progress.",
            technologies: ["React", "Firebase", "Material UI"],
            image: "https://via.placeholder.com/600x400?text=Task+Management+App"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "A weather application that displays current and forecasted weather data for any location.",
            technologies: ["React", "OpenWeather API", "Chart.js"],
            image: "https://via.placeholder.com/600x400?text=Weather+Dashboard"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">My Projects</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div 
                            key={project.id} 
                            className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-green-700 mb-2">{project.title}</h2>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span 
                                            key={index} 
                                            className="px-3 py-1 bg-gradient-to-r from-green-100 to-teal-100 text-green-700 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects; 