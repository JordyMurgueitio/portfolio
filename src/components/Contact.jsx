import './Contact.css';

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
            url: "mailto:jordinho.15@gmail.com",
            description: "Send a message"
        }
    ];

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/portfolio/resume-2026.pdf';
        link.download = 'Jordy_Murgueitio_CV.pdf';
        link.click();
    };

    return (
        <section id="contact-section">
            <div className="contact-content">
                <div className="contact-header">
                    <h2>Let's Work Together</h2>
                    <p>I'm always interested in discussing new opportunities and exciting challenges.</p>
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
                            <span>Available for new opportunities</span>
                        </div>
                        
                        <p className="contact-message">
                            I'm currently open to junior to mid-level full-stack or front-end developer positions. 
                            Feel free to reach out through any of the channels listed.
                        </p>
                        
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