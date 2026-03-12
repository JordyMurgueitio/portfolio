import { useState, useEffect, useMemo } from 'react';
import jordyImg from '../assets/Jordycolor.png'
import './About.css';

function About () {
    const roles = useMemo(() => ['Support Developer', 'Full-Stack Developer', 'Problem Solver', 'React Developer'], []);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        let timeout;

        if (!isDeleting && displayText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        } else if (isDeleting) {
            timeout = setTimeout(() => {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
            }, 40);
        } else {
            timeout = setTimeout(() => {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
            }, 80);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRoleIndex, roles]);

    return (
        <section id='about-section'>
            {/* Floating particles background */}
            <div className="hero-particles">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
                <div className="particle particle-5"></div>
                <div className="particle particle-6"></div>
            </div>

            <div className='hero-container'>
                <div className='hero-content'>
                    <div className='hero-greeting'>
                        <span className='greeting-text'>Hello, I'm</span>
                        <h1 className='hero-name'>Jordy Murgueitio</h1>
                        <h2 className='hero-title'>
                            <span className="typing-text">{displayText}</span>
                            <span className="typing-cursor">|</span>
                        </h2>
                    </div>
                    <p className='hero-description'>
                        Developer with over a year of experience building web applications, internal tools, and email templates. 
                        Currently working as a Support Developer, 
                        collaborating across the stack with <strong>React</strong>, <strong>Vue.js</strong>, <strong>Express.js</strong>, and <strong>SQL</strong> databases to debug and ship production features.
                    </p>
                    <div className='hero-actions'>
                        <a href="#contact-section" className='btn btn-primary'>
                            <span>Get In Touch</span>
                            <i className="fa fa-arrow-right"></i>
                        </a>
                        <a href="#projects-section" className='btn btn-secondary'>
                            <span>View My Work</span>
                        </a>
                    </div>
                    <div className='hero-stats'>
                        <div className='stat-item'>
                            <span className='stat-number'>1+</span>
                            <span className='stat-label'>Years Experience</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-number'>9+</span>
                            <span className='stat-label'>Technologies</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-number'>4+</span>
                            <span className='stat-label'>Production Tools</span>
                        </div>
                    </div>
                </div>
                <div className='hero-image-container'>
                    <div className='image-backdrop'></div>
                    <div className='image-glow'></div>
                    <img src={jordyImg} className='hero-image' alt="Jordy Murgueitio - Full-Stack Developer" />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Scroll down</span>
            </div>
        </section>
    );
}

export default About;