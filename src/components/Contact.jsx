import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

function Contact () {
    const [sectionRef, sectionVisible] = useScrollReveal();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState(null); // 'sending' | 'success' | 'error'

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');
        
        try {
            const response = await fetch('https://formspree.io/f/mvzwqywq', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setFormStatus('error');
            }
        } catch {
            setFormStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        if (formStatus) setFormStatus(null);
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

                {/* Contact Form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about the opportunity..."
                            rows="5"
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="submit-btn"
                        disabled={formStatus === 'sending'}
                    >
                        {formStatus === 'sending' ? (
                            <><i className="fa fa-spinner fa-spin"></i> Sending...</>
                        ) : (
                            <><i className="fa fa-paper-plane"></i> Send Message</>
                        )}
                    </button>
                    {formStatus === 'success' && (
                        <p className="form-message form-message--success">
                            <i className="fa fa-check-circle"></i> Message sent! I'll get back to you soon.
                        </p>
                    )}
                    {formStatus === 'error' && (
                        <p className="form-message form-message--error">
                            <i className="fa fa-exclamation-circle"></i> Something went wrong. Try emailing me directly.
                        </p>
                    )}
                </form>

                <div className="contact-divider">
                    <span>or reach me directly</span>
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