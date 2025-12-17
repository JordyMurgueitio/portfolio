import weather from '../assets/weather-app.png'

function Projects() {
    const projects = [
        {
            title: "Weather App",
            description: "Real-time weather application with location-based forecasts. Clean UI with dynamic weather data and responsive design.",
            techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
            image: weather,
            liveUrl: "https://jordymurgueitio.github.io/weather-app/",
            githubUrl: "https://github.com/JordyMurgueitio/weather-app",
            status: "live",
            year: "2024"
        },
        {
            title: "Todo App",
            description: "Task management application built with React. Features add, edit, delete functionality with local storage persistence.",
            techStack: ["React", "JavaScript", "CSS", "Local Storage"],
            image: null,
            liveUrl: "#",
            githubUrl: "#",
            status: "development",
            year: "2024"
        }
    ];

    return (
        <section id='projects-section'>
            <div className="projects-header">
                <h2>Featured Projects</h2>
                <p>Real-world applications built to solve problems and create better user experiences</p>
                <div className="filter-tags">
                    <span className="filter-tag active">All Projects</span>
                    <span className="filter-tag">Web Apps</span>
                    <span className="filter-tag">React</span>
                </div>
            </div>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className={`project-box project-${index + 1}`}>
                        <div className="project-badges">
                            <div className="project-number">0{index + 1}</div>
                            <div className={`project-status status-${project.status}`}>
                                {project.status === 'live' ? '● Live' : '● In Progress'}
                            </div>
                        </div>
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
                            <div className="project-header-info">
                                <h5 className="project-title">{project.title}</h5>
                                <span className="project-year">{project.year}</span>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="tech-stack">
                                {project.techStack.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a className="project-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-external-link"></i> 
                                    <span>Live Demo</span>
                                </a>
                                <a className="project-link github-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github"></i> 
                                    <span>View Code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="projects-cta">
                <p>More projects coming soon as I continue building and learning!</p>
                <a href="https://github.com/JordyMurgueitio" target="_blank" rel="noopener noreferrer" className="view-all-btn">
                    <i className="fa fa-github"></i>
                    <span>View All on GitHub</span>
                </a>
            </div>
        </section>
    );
}

export default Projects;