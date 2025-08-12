import weather from '../assets/weather-app.png'
import filmFinder from '../assets/film-app.png'

function Projects() {
    return (
        <section id='projects-section'>
            <div className="projects-header">
                <h2>Projects</h2>
                <p>Here are some of my recent projects:</p>
            </div>
            <div className="projects-container">
                <div className="project-box">
                    <img className="project-image" src={filmFinder} alt="Film Finder" />
                    <h5 className="project-title">Film Finder</h5>
                    <a className="project-link" href="https://jordymurgueitio.github.io/film-finder-app/" target="_blank">Open project</a>
                </div>
                <div className="project-box">
                    <img className="project-image" src={weather} alt="Weather App" />
                    <h5 className="project-title">Weather App</h5>
                    <a className="project-link" href="https://jordymurgueitio.github.io/weather-app/" target="_blank">Open project</a>
                </div>
            </div>
    </section>
    );
}

export default Projects;