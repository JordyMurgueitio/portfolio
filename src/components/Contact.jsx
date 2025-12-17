function Contact () {
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
            <h2>Get In Touch</h2>
            <p>Ready to bring your next project to life? Let's connect and discuss how I can contribute to your team!</p>
            <div className="contact-container">
                <a href="https://github.com/JordyMurgueitio" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <i className="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/jordy-murgueitio/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a href="mailto:your.email@example.com" title="Email">
                    <i className="fa fa-envelope"></i>
                </a>
            </div>
            <button className="download-cv-button" onClick={handleDownloadCV}>
                <i className="fa fa-download"></i> Download CV
            </button>
        </section>
    );
}

export default Contact;