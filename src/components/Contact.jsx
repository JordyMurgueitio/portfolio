function Contact () {
    const contactMethods = [
        {
            name: "GitHub",
            icon: "fa fa-github",
            url: "https://github.com/JordyMurgueitio",
            description: "View my code"
        },
        {
            name: "LinkedIn", 
            icon: "fa fa-linkedin",
            url: "https://www.linkedin.com/in/jordy-murgueitio/",
            description: "Let's connect"
        },
        {
            name: "Email",
            icon: "fa fa-envelope", 
            url: "mailto:your.email@example.com",
            description: "Send a message"
        }
    ];

    const handleDownloadCV = () => {
        // Create a simple text-based CV content
        const cvContent = `
JORDY MURGUEITIO
Full-Stack Developer

CONTACT INFORMATION
Email: [Your Email]
LinkedIn: https://www.linkedin.com/in/jordy-murgueitio/
GitHub: https://github.com/JordyMurgueitio

PROFESSIONAL EXPERIENCE

Support Developer | Present
• Building internal tools and applications using Vue.js and Express.js
• Database querying to resolve customer issues and maintain system reliability
• Debugging existing code and collaborating with cross-functional teams
• Technologies: Vue.js, Express.js, SQL, JavaScript

HTML Developer | CRM Team | 1+ Year
• Developed responsive HTML email templates for marketing campaigns
• Implemented email automation workflows with cross-client compatibility  
• Worked with CRM team on customer communication strategies
• Technologies: HTML, CSS, Liquid, Braze, Email Development

TECHNICAL SKILLS

Frontend: HTML, CSS, JavaScript, React, Vue.js, Liquid
Backend: Express.js, SQL
Tools & Platforms: Git, GitHub, AWS, Postman, Jira, Figma, Intercom, Braze, Kibana

FEATURED PROJECTS

Film Finder
• React-based movie discovery application with API integration
• Technologies: React, JavaScript, CSS

Weather App  
• Real-time weather application with location-based forecasts
• Technologies: HTML, CSS, JavaScript, Weather API

Todo App
• Task management application with local storage persistence
• Technologies: React, JavaScript, CSS

EDUCATION & CERTIFICATIONS
[Add your education background here]
        `.trim();

        // Create and download the file
        const blob = new Blob([cvContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Jordy_Murgueitio_CV.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    return (
        <section id="contact-section">
            <div className="contact-content">
                <div className="contact-header">
                    <h2>Let's Work Together</h2>
                    <p>Ready to bring your next project to life? I'm always interested in discussing new opportunities and exciting challenges.</p>
                </div>
                
                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Get In Touch</h3>
                        <div className="contact-methods">
                            {contactMethods.map((method, index) => (
                                <a 
                                    key={index}
                                    href={method.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="contact-method"
                                >
                                    <div className="contact-icon">
                                        <i className={method.icon}></i>
                                    </div>
                                    <div className="contact-details">
                                        <span className="contact-name">{method.name}</span>
                                        <span className="contact-description">{method.description}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="contact-cta">
                        <div className="availability-status">
                            <div className="status-indicator"></div>
                            <span>Available for new projects</span>
                        </div>
                        
                        <div className="quick-stats">
                            <div className="stat">
                                <span className="stat-number">24h</span>
                                <span className="stat-label">Response time</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">1+</span>
                                <span className="stat-label">Years experience</span>
                            </div>
                        </div>
                        
                        <button className="download-cv-button" onClick={handleDownloadCV}>
                            <i className="fa fa-download"></i> 
                            <span>Download Resume</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;