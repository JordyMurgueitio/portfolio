import weather from '../assets/weather-app.png'
import filmFinder from '../assets/film-app.png'

function Projects() {
    const projects = [
        {
            title: "Film Finder",
            description: "A responsive movie discovery application built with React. Features movie search, detailed information display, and responsive design.",
            techStack: ["React", "JavaScript", "CSS", "API Integration"],
            image: filmFinder,
            liveUrl: "https://jordymurgueitio.github.io/film-finder-app/",
            githubUrl: "https://github.com/JordyMurgueitio/film-finder-app"
        },
        {
            title: "Weather App",
            description: "Real-time weather application with location-based forecasts. Clean UI with dynamic weather data and responsive design.",
            techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
            image: weather,
            liveUrl: "https://jordymurgueitio.github.io/weather-app/",
            githubUrl: "https://github.com/JordyMurgueitio/weather-app"
        },
        {
            title: "Todo App",
            description: "Task management application built with React. Features add, edit, delete functionality with local storage persistence.",
            techStack: ["React", "JavaScript", "CSS", "Local Storage"],
            image: null, // We'll add a placeholder or you can add an image later
            liveUrl: "#", // Update with actual URL when deployed
            githubUrl: "#" // Update with actual GitHub URL
        }
    ];

    return (
        <section id='projects-section'>
            <div className="projects-header">
                <h2>Featured Projects</h2>
                <p>A selection of projects showcasing my development skills and problem-solving abilities:</p>
            </div>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className={`project-box project-${index + 1}`}>
                        <div className="project-number">0{index + 1}</div>
                        {project.image ? (
                            <div className="project-image-wrapper">
                                <img className="project-image" src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <i className="fa fa-eye"></i>
                                </div>
                            </div>
                        ) : (
                            <div className="project-image-placeholder">
                                <div className="placeholder-icon">
                                    <i className="fa fa-code"></i>
                                </div>
                            </div>
                        )}
                        <div className="project-content">
                            <h5 className="project-title">{project.title}</h5>
                            <p className="project-description">{project.description}</p>
                            <div className="tech-stack">
                                {project.techStack.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a className="project-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-external-link"></i> Live Demo
                                </a>
                                <a className="project-link github-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github"></i> Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;