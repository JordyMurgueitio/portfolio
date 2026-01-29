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
                
                <div className="availability-status">
                    <div className="status-indicator"></div>
                    <span>Available for new opportunities</span>
                </div>
                
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
                            <span className="contact-name">{method.name}</span>
                        </a>
                    ))}
                </div>
                
                <button className="download-cv-button" onClick={handleDownloadCV}>
                    <i className="fa fa-download"></i> 
                    <span>Download Resume</span>
                </button>
            </div>
        </section>
    );
}

export default Contact;