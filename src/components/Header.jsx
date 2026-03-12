import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about-section');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Scroll spy: detect which section is in view
            const sections = ['about-section', 'skills-section', 'experience-section', 'projects-section', 'contact-section'];
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <nav className="nav-container">
                <a href="#about-section" className="nav-logo">
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-text">JM</span>
                    <span className="logo-bracket">/&gt;</span>
                </a>

                <button
                    className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
                    <li><a href="#about-section" className={activeSection === 'about-section' ? 'active' : ''} onClick={handleNavClick}>About</a></li>
                    <li><a href="#skills-section" className={activeSection === 'skills-section' ? 'active' : ''} onClick={handleNavClick}>Skills</a></li>
                    <li><a href="#experience-section" className={activeSection === 'experience-section' ? 'active' : ''} onClick={handleNavClick}>Experience</a></li>
                    <li><a href="#projects-section" className={activeSection === 'projects-section' ? 'active' : ''} onClick={handleNavClick}>Projects</a></li>
                    <li><a href="#contact-section" className={`nav-cta ${activeSection === 'contact-section' ? 'active' : ''}`} onClick={handleNavClick}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

