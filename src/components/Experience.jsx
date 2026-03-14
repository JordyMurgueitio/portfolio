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
            description: "I build the internal tools my team actually needs. When support agents were spending 15+ minutes per data lookup across multiple systems, I built self-service tools that let them find answers in seconds — no engineering escalation required.",
            highlights: [
                {
                    problem: "Agents manually searched 3+ systems to find order data",
                    action: "Built a DB retrieval tool with Express.js + SQL that searches by PO or date",
                    result: "Reduced lookup time from ~15 min to under 30 seconds"
                },
                {
                    problem: "Order replication required engineers to manually create database links",
                    action: "Built a self-service replication tool with safety validations and audit logging",
                    result: "Eliminated manual link creation and prevented duplicate orders"
                },
                {
                    problem: "New data entries (species, colors, warehouses) required engineering tickets",
                    action: "Built a creation tool with duplicate detection and real-time validation",
                    result: "Support team became self-sufficient — ~40% fewer escalations to engineering"
                }
            ],
            technologies: ["Vue.js", "Express.js", "SQL", "JavaScript", "Debugging", "AWS"]
        },
        {
            title: "HTML Developer",
            company: "CRM Team",
            period: "1+ Year",
            isCurrent: false,
            description: "Owned the email template pipeline for the entire marketing team. Took broken, inconsistent email layouts and turned them into a reliable, tested system that worked across every major email client.",
            highlights: [
                {
                    problem: "Email templates broke on Outlook and rendered inconsistently across clients",
                    action: "Rebuilt templates with table-based layouts and conditional comments for Outlook",
                    result: "Achieved consistent rendering across Gmail, Outlook, and Apple Mail"
                },
                {
                    problem: "Marketing team manually sent each campaign — slow and error-prone",
                    action: "Implemented Braze automation workflows with Liquid templating",
                    result: "Automated campaign delivery, reducing manual work by hours per week"
                },
                {
                    problem: "No mobile-responsive email templates existed",
                    action: "Designed and built responsive templates used across all campaigns",
                    result: "Templates adopted company-wide for all marketing communications"
                }
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
                            
                            {/* Key highlights — Problem → Action → Result */}
                            <div className="experience-highlights">
                                <span className="highlights-label">
                                    <i className="fa-solid fa-trophy"></i> Key Achievements
                                </span>
                                <div className="par-list">
                                    {exp.highlights.map((h, hIdx) => (
                                        <div key={hIdx} className="par-item">
                                            <div className="par-row par-problem">
                                                <span className="par-tag">Problem</span>
                                                <span>{h.problem}</span>
                                            </div>
                                            <div className="par-row par-action">
                                                <span className="par-tag">Action</span>
                                                <span>{h.action}</span>
                                            </div>
                                            <div className="par-row par-result">
                                                <span className="par-tag">Result</span>
                                                <span>{h.result}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
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
