import CeptorClub from '../images/CeptorClub.png'
import Games from '../images/Games.png'
import StrumOnIn from '../images/StrumOnIn.png'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Strum on In - Mock E-Commerce Website - FullStack Academy - May 2023",
            description: "A mock E-Commerce website for guitars completed as part of FullStack Academy's curriculum. I primairly focused on setting up the backend using PostgreSQL and Express.",
            technologies: ["React", "Node.js", "PostgreSQL", "Express"],
            image: StrumOnIn,
            github: "https://github.com/guitar-strings-123/capstone-project",
            video: "https://www.youtube.com/watch?v=your-video-id",
            website: "",
        },
        {
            id: 2,
            title: "Ceptor Club Games Team - Hackathon Project - Ceptor Club - December 2023",
            description: "Hackathon project for a group combining Art, Technology, and Gaming. This helped me learn how to work with MongoDB and how to connect it to the frontend.",
            technologies: ["React", "MongoDB", "TailwindCSS"],
            image: CeptorClub,
            github: "https://github.com/ceptor-club/Ceptor-Tech/tree/alan-save-character",
            video: "https://www.loom.com/share/3c50c0f600084f76bb8d7e1edcdf8122",
            website: "",
        },
        {
            id: 3,
            title: "Ceptor Club Mechanics Team - Hackathon Project - Ceptor Club - May 2024",
            description: "I worked on providing a simple character quiz to be able to help newcomers to D&D create a character and play right away! Started creating a way to save it to both our MongoDB and to the user's wallet by creating my first BlockChain Contract!",
            technologies: ["React", "MongoDB", "TailwindCSS"],
            image: CeptorClub,
            github: "https://github.com/tippi-fifestarr/Ceptor-scaffold-OP/tree/alan-quiz",
            video: "https://www.loom.com/share/53542a130d25440584352da30d94e5f6",
            website: "",
        },
        {
            id: 4,
            title: "Ceptor Club Introduction - Ceptor Club - June 2023",
            description: "My very first project outside of Boot Camp. I took a PHP style character gerneator quiz and turned it into a React component.",
            technologies: ["React", "TailwindCSS"],
            image: CeptorClub,
            github: "https://github.com/yourusername/ceptor-intro",
            video: "https://drive.google.com/file/d/1VIOyum02D1nlj90MooWB4W40zHczsEO3/view?usp=sharing",
            website: "",
        },
        {
            id: 5,
            title: "Games",
            description: "This site showcases games I’ve developed, including Connect 4 (built with HTML/CSS/JS during FullStack Academy) and Unruly (a React app inspired by Simon Tatham’s Puzzles). Each game features unique challenges and ongoing improvements, like upgrading Connect 4 to React with AI enhancements and expanding Unruly with dynamic board sizes.",
            technologies: ["React", "TailwindCSS"],
            image: Games,
            github: "https://github.com/alank101/puzzle-games",
            video: "",
            website: "https://reliable-semolina-30ab21.netlify.app/",
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
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gradient-to-r from-green-100 to-teal-100 text-green-700 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                            GitHub
                                        </a>
                                    )}
                                    {project.video && (
                                        <a
                                            href={project.video}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                            </svg>
                                            Demo
                                        </a>
                                    )}
                                    {project.website && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="..." />
                                            </svg>
                                            {"Live Site"}
                                        </a>
                                    )}

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