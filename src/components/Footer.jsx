import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <span className="footer-logo">
                        <span className="logo-bracket">&lt;</span>
                        <span className="logo-text">JM</span>
                        <span className="logo-bracket">/&gt;</span>
                    </span>
                </div>

                <div className="footer-links">
                    <a href="#about-section">About</a>
                    <a href="#skills-section">Skills</a>
                    <a href="#experience-section">Experience</a>
                    <a href="#projects-section">Projects</a>
                    <a href="#contact-section">Contact</a>
                </div>

                <div className="footer-socials">
                    <a href="https://github.com/JordyMurgueitio" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fa fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jordy-murgueitio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="mailto:jordinho.15@gmail.com" aria-label="Email">
                        <i className="fa fa-envelope"></i>
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Jordy Murgueitio</p>
            </div>
        </footer>
    );
}

export default Footer;
