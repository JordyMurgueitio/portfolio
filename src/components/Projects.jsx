import { useState, useRef, useEffect, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import demoSpecie from '../assets/new-species-demo.mp4'
import demoSoReplica from '../assets/demo-so-replica.mp4'
import demoCodeSnippet from '../assets/demo-code-snippet.mp4'
import demoWeatherApp from '../assets/demo-weather-app.mp4'
import demoPreplyEmail from '../assets/demo-preply-email.mp4'
import demoAlianzaApi from '../assets/alianza-api-demo.mp4'
import demoCsc from '../assets/csc-demo.mp4'
import './Projects.css';

function LazyVideo({ src }) {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const handleMouseEnter = useCallback(() => {
        videoRef.current?.play().catch(() => {});
    }, []);

    const handleMouseLeave = useCallback(() => {
        const v = videoRef.current;
        if (v) { v.pause(); v.currentTime = 0; }
    }, []);

    return (
        <div
            ref={containerRef}
            className="card-video"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isVisible ? (
                <video ref={videoRef} loop muted playsInline preload="metadata">
                    <source src={src} type="video/mp4" />
                </video>
            ) : (
                <div className="video-placeholder-loading">
                    <i className="fa fa-spinner fa-pulse"></i>
                </div>
            )}
            <div className="video-overlay">
                <i className="fa fa-play-circle"></i>
            </div>
        </div>
    );
}

function Projects() {
    const [filter, setFilter] = useState('all');
    const [showAll, setShowAll] = useState(false);
    const [expandedProject, setExpandedProject] = useState(null);
    const gridRef = useRef(null);
    const [headerRef, headerVisible] = useScrollReveal();
    const [projectsRef, projectsVisible] = useScrollReveal({ threshold: 0.05 });

    // Combine refs for the grid
    const setGridRefs = (el) => {
        gridRef.current = el;
        projectsRef.current = el;
    };

    const handleLoadMore = () => {
        if (!showAll) {
            setShowAll(true);
            setTimeout(() => {
                const cards = gridRef.current?.querySelectorAll('.project-card');
                if (cards && cards[4]) {
                    cards[4].scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        } else {
            setShowAll(false);
            gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const projects = [
        // PROFESSIONAL / INTERNAL TOOLS
        {
            title: "Internal Creation Support Tool",
            problem: "Support agents had to submit engineering tickets to add basic data (species, colors, warehouses) — bottlenecking both teams.",
            solution: "Built a self-service creation tool with real-time validation and duplicate detection using Vue.js and Express.js.",
            description: "Developed an internal feature that allows support agents to create and manage farm-related data (species, colors, warehouses, airlines) directly in the system without needing engineering escalation. Built with Vue.js on the frontend and Express.js on the backend the tool queries multiple database tables, includes validation to prevent duplicate records, and ensures data integrity.",
            techStack: ["Vue.js", "Express.js", "SQL"],
            video: demoSpecie,
            liveUrl: null,
            githubUrl: null,
            status: "production",
            isInternal: true,
            isFeatured: true,
            impact: ["~40% fewer engineering escalations", "Real-time validation prevents data errors", "Support team fully self-sufficient"],
            caseStudy: {
                context: "The support team needed to add new species, farm colors, and warehouse data multiple times per week. Every request required filing an engineering ticket, which took 1-2 business days to resolve — blocking agents and overloading the dev team.",
                approach: "I built a Vue.js frontend with Express.js API that queries multiple database tables. The tool validates inputs against existing records in real time, preventing duplicates before they reach the database. Each creation event is logged for accountability.",
                challenges: "The main challenge was ensuring data integrity across related tables — creating a new species also requires associating related color and warehouse records. I built a multi-step form with rollback logic so partial creations never corrupt the database.",
                architecture: "Vue.js Frontend → Express.js REST API → SQL Database (multi-table joins + validation)",
                results: ["Eliminated engineering tickets for data entry tasks", "~40% reduction in support-to-engineering escalations", "Real-time duplicate detection prevents bad data", "Used daily by 50+ support agents"]
            }
        },
        {
            title: "Order Replication Internal Feature",
            problem: "Order replication required engineers to manually create database links — error-prone and caused duplicate orders.",
            solution: "Built a self-service replication tool with safety validations, 7-day date limits, and single-use link enforcement.",
            description: "Developed an internal tool that allows users to replicate orders for a specific farm and a restricted date range. Built with Vue.js and Express.js, the tool enforces multiple safety and validation rules to protect data integrity. Users are limited to a maximum date range of 7 days, and security filters prevent the same replication link from being executed more than once. Each replication action is logged and displayed, allowing the team to track executions and ensure accountability",
            techStack: ["Vue.js", "Express.js"],
            video: demoSoReplica,
            liveUrl: null,
            githubUrl: null,
            status: "production",
            isInternal: true,
            isFeatured: true,
            impact: ["Zero duplicate orders since launch", "No manual link creation needed", "Full audit trail of every replication"],
            caseStudy: {
                context: "When customers needed order replications, engineers manually created database replication links. This was slow (1-2 day turnaround), error-prone (wrong date ranges caused duplicates), and untracked — nobody knew who ran what.",
                approach: "I built a guided form that enforces a 7-day maximum date range and generates single-use replication links. The backend validates every request, and each execution is logged with user, timestamp, and farm details for full accountability.",
                challenges: "The critical challenge was preventing the same link from being executed twice, which would create duplicate orders worth thousands of dollars. I implemented a token-based system where each link is invalidated after first use, with server-side enforcement.",
                architecture: "Vue.js Form → Express.js API (validation + token generation) → SQL Database (single-use enforcement + audit log)",
                results: ["Zero duplicate orders since deployment", "Eliminated 100% of manual link creation", "Every replication is tracked and auditable", "15-minute process reduced to 2 minutes"]
            }
        },
        {
            title: "DB Data Retrieval Tool",
            problem: "Support agents spent ~15 minutes per lookup searching across multiple disconnected systems for order data.",
            solution: "Built an Express.js + SQL tool that searches production data by PO number or date, delivering results in seconds.",
            description: "Internal tool that allows customer support agents to search and retrieve actual database data from each farm by PO number or date. Built with Vue.js frontend and Express.js backend, the tool provides direct visibility into production database records, enabling agents to quickly access critical information without requiring engineering support.",
            techStack: ["Vue.js", "Express.js", "SQL"],
            video: demoAlianzaApi,
            liveUrl: null,
            githubUrl: null,
            status: "production",
            isInternal: true,
            isFeatured: false,
            impact: ["Lookup time: ~15 min → under 30 seconds", "Zero engineering escalations for data lookups", "Used daily by 50+ support agents"]
        },
        {
            title: "Customer Score Card",
            problem: "Trainees and managers had no centralized place to view company metrics — data was scattered across spreadsheets and tools.",
            solution: "Built an internal dashboard that aggregates real-time company metrics from multiple database sources into one view.",
            description: "Internal dashboard that displays relevant data for each company. Built with Vue.js and Express.js, the tool provides a centralized place for trainees and managers to view up-to-date, company-specific metrics and information. Features real-time data retrieval from multiple database sources.",
            techStack: ["Vue.js", "Express.js", "SQL"],
            video: demoCsc,
            liveUrl: null,
            githubUrl: null,
            status: "production",
            isInternal: true,
            isFeatured: false,
            impact: ["Centralized data replaces scattered spreadsheets", "Real-time metrics always up to date", "Accelerated trainee onboarding"]
        },
        {
            title: "Code Snippet Manager",
            problem: "I needed personal documentation for reusable code patterns but existing tools were overkill or cloud-only.",
            solution: "Built a local-first snippet library with search, categories, and JSON export — no account or cloud dependency.",
            description: "Personal code snippet library built with React and Vite. Used for personal documentation. Supports multi-code-block snippets, real-time search/filter, category grouping, and list/grid view modes. Includes local storage persistence and JSON export/import functionality. Features a clean, minimal UI with dark-themed code blocks and responsive design.",
            techStack: ["HTML", "CSS", "JavaScript", "React"],
            video: demoCodeSnippet,
            liveUrl: 'https://jordymurgueitio.github.io/code-snippet-app/',
            githubUrl: 'https://github.com/JordyMurgueitio/code-snippet-app',
            status: "live",
            isInternal: false,
            isFeatured: true
        },
        {
            title: "HTML Email Template",
            problem: "Marketing emails broke on Outlook and had no mobile-responsive layouts across different email clients.",
            solution: "Built table-based email templates with conditional rendering for Outlook and fully responsive mobile layouts.",
            description: "Responsive HTML email template designed for Preply. Built with table-based layout for maximum email client compatibility. Features optimized inline CSS, fallback fonts, and tested across major email clients (Gmail, Outlook, Apple Mail). Includes mobile-responsive design with conditional comments for Outlook-specific rendering.",
            techStack: ["HTML", "CSS", "Email Design", "Responsive Design"],
            video: demoPreplyEmail,
            liveUrl: null,
            githubUrl: null,
            status: "production",
            isInternal: true,
            isFeatured: false
        },
        {
            title: "Weather App",
            problem: "Wanted to practice API integration, caching, and dynamic UI — built a complete app from scratch with vanilla JS.",
            solution: "Weather app with geolocation, 5-day forecast, smart API caching, and dynamic backgrounds that change with conditions.",
            description: "Weather app built with vanilla JavaScript that fetches real-time data from OpenWeatherMap API. Search any city or use geolocation to get current conditions, 5-day forecast, and detailed metrics like humidity, wind speed, sunrise/sunset times. Features include Celsius/Fahrenheit toggle, recent search history stored locally, smart caching to reduce API calls, and dynamic backgrounds that change based on weather conditions.",
            techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
            video: demoWeatherApp,
            liveUrl: "https://jordymurgueitio.github.io/weather-app/",
            githubUrl: "https://github.com/JordyMurgueitio/weather-app",
            status: "live",
            isInternal: false,
            isFeatured: false
        }
    ];

    const filteredProjects = projects.filter(project => {
        if (filter === 'all') return true;
        if (filter === 'professional') return project.isInternal;
        if (filter === 'personal') return !project.isInternal;
        return true;
    });

    // Limit displayed projects based on showAll state
    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);
    const hasMore = filteredProjects.length > 4;

    // Tech stack icon mapping
    const techIcons = {
        "Vue.js": "fab fa-vuejs",
        "Express.js": "fab fa-node-js",
        "SQL": "fas fa-database",
        "HTML": "fab fa-html5",
        "CSS": "fab fa-css3-alt",
        "JavaScript": "fab fa-js",
        "React": "fab fa-react",
        "Email Design": "fas fa-envelope",
        "Responsive Design": "fas fa-mobile-alt",
        "Weather API": "fas fa-cloud"
    };

    return (
        <section id='projects-section'>
            <div ref={headerRef} className={`projects-header scroll-reveal ${headerVisible ? 'visible' : ''}`}>
                <span className="section-label">What I've Built</span>
                <h2>Projects</h2>
                <p className="projects-subtitle">Production tools and personal projects that solve real problems.</p>
                
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

            <div ref={setGridRefs} className={`projects-grid scroll-reveal ${projectsVisible ? 'visible' : ''}`}>
                {displayedProjects.map((project, index) => (
                    <div 
                        key={project.title} 
                        className={`project-card ${project.isInternal ? 'internal-card' : 'personal-card'} ${project.isFeatured ? 'featured-card' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* Featured ribbon */}
                        {project.isFeatured && (
                            <div className="featured-ribbon">
                                <i className="fa-solid fa-star"></i> Featured
                            </div>
                        )}

                        {/* Video Section */}
                        {project.video ? (
                            <LazyVideo src={project.video} />
                        ) : (
                            <div className="card-video placeholder">
                                <i className="fa fa-lock"></i>
                                <p>NDA Protected</p>
                            </div>
                        )}

                        {/* Content Section */}
                        <div className="card-content">
                            <div className="card-header">
                                <div className="card-title-row">
                                    <span className="project-number">#{index + 1}</span>
                                    <h3>{project.title}</h3>
                                </div>
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

                            {/* Problem → Solution (new) */}
                            <div className="card-problem-solution">
                                <div className="ps-row">
                                    <span className="ps-label ps-label--problem">Problem</span>
                                    <p>{project.problem}</p>
                                </div>
                                <div className="ps-row">
                                    <span className="ps-label ps-label--solution">Solution</span>
                                    <p>{project.solution}</p>
                                </div>
                            </div>

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
                                    <span key={idx} className="tech-tag">
                                        {techIcons[tech] && <i className={techIcons[tech]}></i>}
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="card-actions">
                                {project.caseStudy && (
                                    <button 
                                        className="case-study-btn"
                                        onClick={() => setExpandedProject(project)}
                                    >
                                        <i className="fa fa-book-open"></i> Read Case Study
                                    </button>
                                )}
                                {project.isInternal ? (
                                    <div className="card-nda">
                                        <i className="fa fa-lock"></i> Code unavailable per NDA
                                    </div>
                                ) : (
                                    <div className="card-links">
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-external-link"></i> Live Demo
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-github"></i> View Code
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="projects-cta">
                {hasMore && (
                    <button 
                        onClick={handleLoadMore}
                        className="load-more-btn"
                    >
                        {showAll ? (
                            <>
                                <i className="fa fa-chevron-up"></i>
                                <span>Show Less</span>
                            </>
                        ) : (
                            <>
                                <i className="fa fa-plus-circle"></i>
                                <span>Load More Projects</span>
                            </>
                        )}
                    </button>
                )}
                <a href="https://github.com/JordyMurgueitio" target="_blank" rel="noopener noreferrer" className="view-all-btn">
                    <i className="fa fa-github"></i>
                    <span>More on GitHub</span>
                </a>
            </div>

            {/* Case Study Modal */}
            {expandedProject && (
                <div className="case-study-overlay" onClick={() => setExpandedProject(null)}>
                    <div className="case-study-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setExpandedProject(null)}>
                            <i className="fa fa-times"></i>
                        </button>
                        <div className="modal-header">
                            <span className="modal-label">Case Study</span>
                            <h3>{expandedProject.title}</h3>
                            <div className="modal-tech">
                                {expandedProject.techStack.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="cs-section">
                                <h4><i className="fa fa-crosshairs"></i> The Problem</h4>
                                <p>{expandedProject.caseStudy.context}</p>
                            </div>
                            <div className="cs-section">
                                <h4><i className="fa fa-code"></i> Technical Approach</h4>
                                <p>{expandedProject.caseStudy.approach}</p>
                            </div>
                            <div className="cs-section">
                                <h4><i className="fa fa-sitemap"></i> Architecture</h4>
                                <div className="cs-architecture">
                                    {expandedProject.caseStudy.architecture}
                                </div>
                            </div>
                            <div className="cs-section">
                                <h4><i className="fa fa-puzzle-piece"></i> Challenges</h4>
                                <p>{expandedProject.caseStudy.challenges}</p>
                            </div>
                            <div className="cs-section">
                                <h4><i className="fa fa-chart-line"></i> Results</h4>
                                <ul className="cs-results">
                                    {expandedProject.caseStudy.results.map((r, idx) => (
                                        <li key={idx}><i className="fa fa-check-circle"></i> {r}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;