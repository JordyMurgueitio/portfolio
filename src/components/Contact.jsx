import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

function Contact () {
    const [sectionRef, sectionVisible] = useScrollReveal();
    const contactMethods = [
        {
            name: "GitHub",
            icon: "fa fa-github",
            url: "https://github.com/JordyMurgueitio",
            description: "Check out my repos",
            accent: "github"
        },
        {
            name: "LinkedIn", 
            icon: "fa fa-linkedin",
            url: "https://www.linkedin.com/in/jordy-murgueitio/",
            description: "Let's connect",
            accent: "linkedin"
        },
        {
            name: "Email",
            icon: "fa fa-envelope", 
            url: "mailto:jordinho.15@gmail.com",
            description: "jordinho.15@gmail.com",
            accent: "email"
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
            {/* Floating orbs */}
            <div className="contact-orbs" aria-hidden="true">
                <div className="contact-orb contact-orb--1"></div>
                <div className="contact-orb contact-orb--2"></div>
            </div>

            <div ref={sectionRef} className={`contact-content scroll-reveal ${sectionVisible ? 'visible' : ''}`}>
                <div className="contact-header">
                    <span className="section-label">Get In Touch</span>
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
                            className={`contact-method contact-method--${method.accent}`}
                        >
                            <div className="contact-icon">
                                <i className={method.icon}></i>
                            </div>
                            <span className="contact-name">{method.name}</span>
                            <span className="contact-desc">{method.description}</span>
                            <span className="contact-arrow">
                                <i className="fa fa-arrow-right"></i>
                            </span>
                        </a>
                    ))}
                </div>
                
                <div className="contact-cta-group">
                    <button className="download-cv-button" onClick={handleDownloadCV}>
                        <i className="fa fa-download"></i> 
                        <span>Download Resume</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Contact;