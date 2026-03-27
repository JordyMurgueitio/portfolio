import { useState, useEffect, useMemo } from 'react';
import jordyImg from '../assets/Jordycolor.png'
import './About.css';

function About () {
    const impacts = useMemo(() => [
        'Ship full-stack features from frontend to database',
        'Built 4+ production tools used by 50+ people',
        'Leverage AI tools to build and ship faster',
        'Reduced engineering escalations by 40%'
    ], []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = impacts[currentIndex];
        let timeout;

        if (!isDeleting && displayText === current) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % impacts.length);
        } else if (isDeleting) {
            timeout = setTimeout(() => {
                setDisplayText(current.substring(0, displayText.length - 1));
            }, 30);
        } else {
            timeout = setTimeout(() => {
                setDisplayText(current.substring(0, displayText.length + 1));
            }, 60);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex, impacts]);

    return (
        <section id='about-section' aria-label='About Jordy Murgueitio'>
            <div className='hero-container'>
                <div className='hero-content'>
                    <p className='hero-greeting'>Hi, I'm</p>
                    <h1 className='hero-name'>Jordy Murgueitio</h1>
                    <p className='hero-role'>Full-Stack Developer</p>
                    <div className='hero-typewriter' aria-live="polite" aria-atomic="true">
                        <span className="typing-text">{displayText}</span>
                        <span className="typing-cursor" aria-hidden="true">|</span>
                    </div>

                    <p className='hero-description'>
                        I build full-stack production tools that solve real problems. Currently shipping features with 
                        <strong>Vue.js</strong>, <strong>Express.js</strong>, <strong>SQL</strong>, and <strong>AWS</strong> — from 
                        frontend interfaces to backend APIs and cloud infrastructure, amplified by AI-powered development tools.
                    </p>
                    <div className='hero-actions'>
                        <a href="#contact-section" className='btn btn-primary'>
                            <span>Get In Touch</span>
                            <i className="fa fa-arrow-right"></i>
                        </a>
                        <a href="#projects-section" className='btn btn-secondary'>
                            <span>See What I've Built</span>
                        </a>
                    </div>
                    <div className='hero-stats'>
                        <div className='stat-item'>
                            <span className='stat-number'>4+</span>
                            <span className='stat-label'>Production Tools Shipped</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-number'>50+</span>
                            <span className='stat-label'>Team Members Impacted</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-number'>40%</span>
                            <span className='stat-label'>Fewer Escalations</span>
                        </div>
                    </div>
                </div>
                <div className='hero-image-container'>
                    <img src={jordyImg} className='hero-image' alt="Jordy Murgueitio - Full-Stack Developer" />
                </div>
            </div>

            <div className="scroll-indicator" aria-hidden="true">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Scroll down</span>
            </div>
        </section>
    );
}

export default About;