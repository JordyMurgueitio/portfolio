import { useState } from 'react';
import weather from '../assets/weather-app.png'
// Add your internal tool screenshots/videos here:
// import supportDashboard from '../assets/support-dashboard.png' (or .gif or .mp4)
// import crmTool from '../assets/crm-tool.png'
// import dataAnalytics from '../assets/data-analytics.png'

function Projects() {
    const [expandedProject, setExpandedProject] = useState(0); // First project expanded by default
    const projects = [
        // PROFESSIONAL / INTERNAL TOOLS
        {
            title: "Internal Support Dashboard",
            description: "Production-level Vue.js and Express.js application designed for support teams to manage and resolve customer issues efficiently. Features real-time ticket tracking, advanced SQL query builder for customer data retrieval, custom filtering and search functionality, and interactive data visualizations. Successfully reduced average ticket resolution time by 30% and is actively used by 15+ team members daily. Implements RESTful API architecture with secure authentication and role-based access control.",
            techStack: ["Vue.js", "Express.js", "SQL", "Node.js", "REST API", "Authentication"],
            image: null, // ADD YOUR SCREENSHOT/GIF HERE: supportDashboard
            video: null, // OPTIONAL: Add video demo path
            liveUrl: null, // Can't share - internal tool
            githubUrl: null, // Can't share - proprietary code
            status: "production",
            year: "2024-Present",
            isInternal: true,
            impact: ["30% faster resolution time", "15+ daily active users", "Real-time updates"]
        },
        {
            title: "CRM Email Campaign System",
            description: "Comprehensive email template builder and automation system for marketing campaigns. Built 25+ responsive HTML email templates using Liquid templating language, ensuring cross-client compatibility across Gmail, Outlook, Apple Mail, and mobile platforms. Integrated with Braze platform for automated campaign deployment. Features include dynamic content personalization, A/B testing support, and analytics tracking. Improved campaign deployment speed by 40% and maintained 98%+ rendering consistency.",
            techStack: ["HTML", "CSS", "Liquid", "Braze", "JavaScript", "Responsive Design"],
            image: null, // ADD YOUR SCREENSHOT HERE: crmTool
            video: null,
            liveUrl: null,
            githubUrl: null,
            status: "production",
            year: "2023-2024",
            isInternal: true,
            impact: ["25+ templates created", "98% compatibility rate", "40% faster deployment"]
        },
        {
            title: "Data Analytics Dashboard",
            description: "Internal data visualization and reporting tool built with Vue.js for monitoring key business metrics and customer insights. Features include real-time data updates via WebSocket connections, customizable dashboard widgets, SQL query interface for ad-hoc analysis, and automated report generation. Integrates with Kibana for log analysis and provides actionable insights for cross-functional teams. Reduced manual reporting time by 50% and enabled data-driven decision making across departments.",
            techStack: ["Vue.js", "Express.js", "Kibana", "SQL", "WebSocket", "Data Visualization"],
            image: null, // ADD YOUR SCREENSHOT HERE: dataAnalytics
            video: null,
            liveUrl: null,
            githubUrl: null,
            status: "production",
            year: "2024",
            isInternal: true,
            impact: ["50% less manual reporting", "Real-time metrics", "Cross-team visibility"]
        },
        
        // PERSONAL PROJECTS
        {
            title: "Weather App",
            description: "Real-time weather application with location-based forecasts. Clean UI with dynamic weather data and responsive design.",
            techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
            image: weather,
            video: null,
            liveUrl: "https://jordymurgueitio.github.io/weather-app/",
            githubUrl: "https://github.com/JordyMurgueitio/weather-app",
            status: "live",
            year: "2024",
            isInternal: false
        },
        {
            title: "Todo App",
            description: "Task management application built with React. Features add, edit, delete functionality with local storage persistence.",
            techStack: ["React", "JavaScript", "CSS", "Local Storage"],
            image: null,
            video: null,
            liveUrl: "#",
            githubUrl: "#",
            status: "development",
            year: "2024",
            isInternal: false
        }
    ];

    const toggleProject = (index) => {
        setExpandedProject(expandedProject === index ? null : index);
    };

    return (
        <section id='projects-section'>
            <div className="projects-header">
                <h2>Featured Projects</h2>
                <p>Professional work that makes an impact</p>
            </div>
            <div className="projects-accordion">
                {projects.map((project, index) => {
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
                                    <span className="accordion-year">{project.year}</span>
                                    <i className={`fa fa-chevron-${isExpanded ? 'up' : 'down'} accordion-icon`}></i>
                                </div>
                            </div>

                            {/* Expandable Content */}
                            <div className="accordion-content">
                                <div className="accordion-content-inner">
                                    {/* Media Section */}
                                    {project.video ? (
                                        <div className="project-media">
                                            <video className="project-video" autoPlay loop muted playsInline>
                                                <source src={project.video} type="video/mp4" />
                                            </video>
                                        </div>
                                    ) : project.image ? (
                                        <div className="project-media">
                                            <img className="project-image" src={project.image} alt={project.title} />
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
                                                <h6>💪 Key Impact:</h6>
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
                                            <h6>🛠️ Tech Stack:</h6>
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
                <p>💼 Professional tools + 🚀 Personal projects = Full-stack experience</p>
                <a href="https://github.com/JordyMurgueitio" target="_blank" rel="noopener noreferrer" className="view-all-btn">
                    <i className="fa fa-github"></i>
                    <span>More on GitHub</span>
                </a>
            </div>
        </section>
    );
}

export default Projects;