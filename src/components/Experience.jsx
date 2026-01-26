import './Experience.css';

function Experience() {
    const experiences = [
        {
            title: "Support Developer",
            company: "Current Position",
            period: "Present",
            description: "Building internal tools and applications using Vue.js and Express.js. Responsible for database querying to resolve customer issues, debugging existing code, and maintaining system reliability. Collaborate with cross-functional teams to identify root causes and validate fixes.",
            technologies: ["Vue.js", "Express.js", "SQL", "JavaScript", "Debugging", "AWS"]
        },
        {
            title: "HTML Developer",
            company: "CRM Team",
            period: "1+ Year",
            description: "Developed responsive HTML email templates for marketing campaigns and customer communications. Worked closely with the CRM team to implement email automation workflows, ensuring cross-client compatibility and optimal rendering across different email platforms.",
            technologies: ["HTML", "CSS", "Liquid", "Email Development", "Braze", "Responsive Design"]
        }
    ];

    return (
        <section id="experience-section">
            <div className="experience-header">
                <h2>Professional Experience</h2>
            </div>
            <div className="experience-container">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <div className="experience-timeline">
                            <div className="timeline-dot"></div>
                            <div className="timeline-line"></div>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header-info">
                                <h3 className="experience-title">{exp.title}</h3>
                                <span className="experience-period">{exp.period}</span>
                            </div>
                            <h4 className="experience-company">{exp.company}</h4>
                            <p className="experience-description">{exp.description}</p>
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
