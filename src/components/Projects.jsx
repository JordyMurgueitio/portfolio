function Projects() {
    return (
        <section id='project-section'>
            <div className="projects-header">
                <h2>Projects</h2>
                <p>Here are some of my recent projects:</p>
            </div>
            <div className="projects-container">
                <div className="project-box">
                    <img className="project-image" src="" alt="" />
                    <h5 className="project-title">Film Finder</h5>
                    <a className="project-link" href="./projects/film-finder/index.html" target="_blank">Open project</a>
                </div>
                <div className="project-box">
                    <img className="project-image" src="" alt="" />
                    <h5 className="project-title">Weather App</h5>
                    <a className="project-link" href="./projects/weather-app/index.html" target="_blank">Open project</a>
                </div>
            </div>
    </section>
    );
}

export default Projects;