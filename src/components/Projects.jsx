import { useState } from 'react';
import demoSpecie from '../assets/demo-specie.mp4'
import demoSoReplica from '../assets/demo-so-replica.mp4'
import demoCodeSnippet from '../assets/demo-code-snippet.mp4'
import demoWeatherApp from '../assets/demo-weather-app.mp4'
import demoPreplyEmail from '../assets/demo-preply-email.mp4'
import './Projects.css';

function Projects() {
    const [filter, setFilter] = useState('all'); // 'all', 'professional', 'personal'

    const projects = [
        // PROFESSIONAL / INTERNAL TOOLS
        {
            title: "Internal Creation Support Tool",
            description: "Developed an internal feature that allows support agents to create and manage farm-related data (species, colors, warehouses, airlines) directly in the system without needing engineering escalation. Built with Vue.js on the frontend and Express.js on the backend the tool queries multiple database tables, includes validation to prevent duplicate records, and ensures data integrity.",
            techStack: ["Vue.js", "Express.js", "SQL"],
            video: demoSpecie,
            liveUrl: null, // Can't share - internal tool
            githubUrl: null, // Can't share - proprietary code
            status: "production",
            isInternal: true,
            impact: ["Faster resolution time", "Less escalations to the tech team", "Real-time updates"]
        },
        {
            title: "Order Replication Internal Feature",
            description: "Developed an internal tool that allows users to replicate orders for a specific farm and a restricted date range. Built with Vue.js and Express.js, the tool enforces multiple safety and validation rules to protect data integrity. Users are limited to a maximum date range of 7 days, and security filters prevent the same replication link from being executed more than once. Each replication action is logged and displayed, allowing the team to track executions and ensure accountability",
            techStack: ["Vue.js", "Express.js"],
            video: demoSoReplica,
            liveUrl: null,
            githubUrl: null,
            status: "production",
            isInternal: true,
            impact: ["Less escalations to the tech team", "No human error (link was manually created before)", "No order duplications"]
        },
        {
            title: "Code Snippet Manager",
            description: "Personal code snippet library built with React and Vite. Used for personal documentation. Supports multi-code-block snippets, real-time search/filter, category grouping, and list/grid view modes. Includes local storage persistence and JSON export/import functionality. Features a clean, minimal UI with dark-themed code blocks and responsive design.",
            techStack: ["HTML", "CSS", "JavaScript", "React"],
            video: demoCodeSnippet,
            liveUrl: 'https://jordymurgueitio.github.io/code-snippet-app/',
            githubUrl: 'https://github.com/JordyMurgueitio/code-snippet-app',
            status: "live",
            isInternal: false
        },
        {
            title: "HTML Email Template",
            description: "Responsive HTML email template designed for Preply. Built with table-based layout for maximum email client compatibility. Features optimized inline CSS, fallback fonts, and tested across major email clients (Gmail, Outlook, Apple Mail). Includes mobile-responsive design with conditional comments for Outlook-specific rendering.",
            techStack: ["HTML", "CSS", "Email Design", "Responsive Design"],
            video: demoPreplyEmail,
            liveUrl: null,
            githubUrl: null,
            status: "production",
            isInternal: true
        },
        {
            title: "Weather App",
            description: "Weather app built with vanilla JavaScript that fetches real-time data from OpenWeatherMap API. Search any city or use geolocation to get current conditions, 5-day forecast, and detailed metrics like humidity, wind speed, sunrise/sunset times. Features include Celsius/Fahrenheit toggle, recent search history stored locally, smart caching to reduce API calls, and dynamic backgrounds that change based on weather conditions.",
            techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
            video: demoWeatherApp,
            liveUrl: "https://jordymurgueitio.github.io/weather-app/",
            githubUrl: "https://github.com/JordyMurgueitio/weather-app",
            status: "live",
            isInternal: false
        }
    ];

    const filteredProjects = projects.filter(project => {
        if (filter === 'all') return true;
        if (filter === 'professional') return project.isInternal;
        if (filter === 'personal') return !project.isInternal;
        return true;
    });

    return (
        <section id='projects-section'>
            <div className="projects-header">
                <h2>Projects</h2>
                
                {/* Filter Tabs */}
                <div className="project-filters">
                    <button 
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All ({projects.length})
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'professional' ? 'active' : ''}`}
                        onClick={() => setFilter('professional')}
                    >
                        <i className="fa fa-briefcase"></i> Professional ({projects.filter(p => p.isInternal).length})
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'personal' ? 'active' : ''}`}
                        onClick={() => setFilter('personal')}
                    >
                        <i className="fa fa-code"></i> Personal ({projects.filter(p => !p.isInternal).length})
                    </button>
                </div>
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <div 
                        key={index} 
                        className={`project-card ${project.isInternal ? 'internal-card' : 'personal-card'}`}
                    >
                        {/* Video Section */}
                        {project.video ? (
                            <div className="card-video">
                                <video 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                >
                                    <source src={project.video} type="video/mp4" />
                                </video>
                            </div>
                        ) : (
                            <div className="card-video placeholder">
                                <i className="fa fa-lock"></i>
                                <p>NDA Protected</p>
                            </div>
                        )}

                        {/* Content Section */}
                        <div className="card-content">
                            <div className="card-header">
                                <h3>{project.title}</h3>
                                <div className="card-badges">
                                    <span className={`status-badge ${project.status}`}>
                                        {project.status === 'production' ? '● Production' : '● Live'}
                                    </span>
                                    {project.isInternal && (
                                        <span className="type-badge">
                                            <i className="fa fa-briefcase"></i> Professional
                                        </span>
                                    )}
                                </div>
                            </div>

                            <p className="card-description">{project.description}</p>

                            {/* Impact Section */}
                            {project.impact && (
                                <div className="card-impact">
                                    <strong>Key Impact:</strong>
                                    <ul>
                                        {project.impact.map((item, idx) => (
                                            <li key={idx}>
                                                <i className="fa fa-check-circle"></i> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Tech Stack */}
                            <div className="card-tech">
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            {/* Links */}
                            {project.isInternal ? (
                                <div className="card-nda">
                                    <i className="fa fa-lock"></i> Code unavailable per NDA
                                </div>
                            ) : (
                                <div className="card-links">
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-external-link"></i> Live Demo
                                    </a>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-github"></i> View Code
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="projects-cta">
                <a href="https://github.com/JordyMurgueitio" target="_blank" rel="noopener noreferrer" className="view-all-btn">
                    <i className="fa fa-github"></i>
                    <span>More on GitHub</span>
                </a>
            </div>
        </section>
    );
}

export default Projects;