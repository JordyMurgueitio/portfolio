import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

function Experience() {
    const [headerRef, headerVisible] = useScrollReveal();
    const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.1 });

    const experiences = [
        {
            title: "Support Developer",
            company: "Current Position",
            period: "Present",
            isCurrent: true,
            description: "Building internal tools and applications using Vue.js and Express.js. Responsible for database querying to resolve customer issues, debugging existing code, and maintaining system reliability. Collaborate with cross-functional teams to identify root causes and validate fixes.",
            highlights: [
                "Built 4+ production internal tools from scratch",
                "Reduced support escalations to engineering team",
                "Improved resolution time with self-service data tools"
            ],
            technologies: ["Vue.js", "Express.js", "SQL", "JavaScript", "Debugging", "AWS"]
        },
        {
            title: "HTML Developer",
            company: "CRM Team",
            period: "1+ Year",
            isCurrent: false,
            description: "Developed responsive HTML email templates for marketing campaigns and customer communications. Worked closely with the CRM team to implement email automation workflows, ensuring cross-client compatibility and optimal rendering across different email platforms.",
            highlights: [
                "Built email templates used across all marketing campaigns",
                "Ensured cross-client compatibility (Gmail, Outlook, Apple Mail)",
                "Implemented automation workflows with Braze"
            ],
            technologies: ["HTML", "CSS", "Liquid", "Email Development", "Braze", "Responsive Design"]
        }
    ];

    return (
        <section id="experience-section">
            <div ref={headerRef} className={`experience-header scroll-reveal ${headerVisible ? 'visible' : ''}`}>
                <span className="section-label">Where I've Worked</span>
                <h2>Professional Experience</h2>
                <p>My journey building real-world applications and production features.</p>
            </div>
            <div ref={contentRef} className={`experience-container scroll-reveal ${contentVisible ? 'visible' : ''}`}>
                <div className="timeline-track" aria-hidden="true"></div>
                {experiences.map((exp, index) => (
                    <div key={index} className={`experience-card ${exp.isCurrent ? 'experience-card--current' : ''}`}>
                        <div className="experience-timeline">
                            <div className={`timeline-dot ${exp.isCurrent ? 'timeline-dot--active' : ''}`}>
                                {exp.isCurrent && <div className="dot-ping"></div>}
                            </div>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header-info">
                                <div className="experience-title-group">
                                    <h3 className="experience-title">{exp.title}</h3>
                                    <h4 className="experience-company">{exp.company}</h4>
                                </div>
                                <span className={`experience-period ${exp.isCurrent ? 'period--current' : ''}`}>
                                    <i className="fa-solid fa-calendar-days"></i>
                                    {exp.period}
                                    {exp.isCurrent && <span className="current-badge">Current</span>}
                                </span>
                            </div>
                            <p className="experience-description">{exp.description}</p>
                            
                            {/* Key highlights */}
                            <div className="experience-highlights">
                                <span className="highlights-label">
                                    <i className="fa-solid fa-trophy"></i> Key Achievements
                                </span>
                                <ul>
                                    {exp.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx}>
                                            <i className="fa fa-check-circle"></i>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="experience-technologies">
                                {exp.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
