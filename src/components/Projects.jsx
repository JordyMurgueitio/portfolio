import { useState } from 'react';
import demoSpecie from '../assets/demo-specie.mp4'
import demoSoReplica from '../assets/demo-so-replica.mp4'
import demoCodeSnippet from '../assets/demo-code-snippet.mp4'
import demoWeatherApp from '../assets/demo-weather-app.mp4'
import demoPreplyEmail from '../assets/demo-preply-email.mp4'
import './Projects.css';

function Projects() {
    const [expandedProject, setExpandedProject] = useState(0); // First project expanded by default
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

    const toggleProject = (index) => {
        setExpandedProject(expandedProject === index ? null : index);
    };

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
            <div className="projects-accordion">
                {filteredProjects.map((project, index) => {
                    const isExpanded = expandedProject === index;
                    
                    return (
                        <div 
                            key={index} 
                            className={`accordion-project ${isExpanded ? 'expanded' : 'collapsed'} ${project.isInternal ? 'internal-project' : ''}`}
                        >
                            {/* Clickable Header - Always Visible */}
                            <div 
                                className="accordion-header" 
                                onClick={() => toggleProject(index)}
                            >
                                <div className="accordion-header-left">
                                    <div className="accordion-number">0{index + 1}</div>
                                    <div className="accordion-title-group">
                                        <h3 className="accordion-title">{project.title}</h3>
                                        <div className="accordion-badges">
                                            <span className={`accordion-status status-${project.status}`}>
                                                {project.status === 'production' ? '● Production' : project.status === 'live' ? '● Live' : '● In Progress'}
                                            </span>
                                            {project.isInternal && (
                                                <span className="accordion-internal-badge">
                                                    <i className="fa fa-briefcase"></i> Professional
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-header-right">
                                    <i className={`fa fa-chevron-${isExpanded ? 'up' : 'down'} accordion-icon`}></i>
                                </div>
                            </div>

                            {/* Expandable Content */}
                            <div className="accordion-content">
                                <div className="accordion-content-inner">
                                    {/* Media Section */}
                                    {project.video ? (
                                        <div className="project-media">
                                            <video 
                                                className="project-video" 
                                                autoPlay 
                                                loop 
                                                muted 
                                                playsInline
                                            >
                                                <source src={project.video} type="video/mp4" />
                                            </video>
                                        </div>
                                    ) : (
                                        <div className="project-media placeholder">
                                            <div className="placeholder-icon">
                                                <i className={project.isInternal ? "fa fa-briefcase" : "fa fa-code"}></i>
                                                <p>{project.isInternal ? "NDA Protected" : "Coming Soon"}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Details Section */}
                                    <div className="project-details">
                                        <p className="project-description">{project.description}</p>
                                        
                                        {/* Impact Metrics */}
                                        {project.impact && (
                                            <div className="project-impact">
                                                <h6>Key Impact:</h6>
                                                <ul>
                                                    {project.impact.map((item, impactIndex) => (
                                                        <li key={impactIndex}>
                                                            <i className="fa fa-check-circle"></i> {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        
                                        {/* Tech Stack */}
                                        <div className="project-tech">
                                            <h6>Tech Stack:</h6>
                                            <div className="tech-stack">
                                                {project.techStack.map((tech, techIndex) => (
                                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* Actions */}
                                        {project.isInternal ? (
                                            <div className="internal-note">
                                                <i className="fa fa-lock"></i>
                                                <span>Internal company tool - code unavailable per NDA</span>
                                            </div>
                                        ) : (
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
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
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