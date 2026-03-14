import { useState, useEffect, useMemo } from 'react';
import jordyImg from '../assets/Jordycolor.png'
import './About.css';

function About () {
    const impacts = useMemo(() => [
        'Built 4+ production tools from scratch',
        'Reduced support escalations to engineering',
        'Automated manual workflows for teams',
        'Ship features across the full stack'
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
                    {/* Terminal-style hero */}
                    <div className='terminal-window'>
                        <div className='terminal-header'>
                            <div className='terminal-dots'>
                                <span className='dot dot-red'></span>
                                <span className='dot dot-yellow'></span>
                                <span className='dot dot-green'></span>
                            </div>
                            <span className='terminal-title'>jordy@portfolio ~ %</span>
                        </div>
                        <div className='terminal-body'>
                            <div className='terminal-line'>
                                <span className='terminal-prompt'>$</span>
                                <span className='terminal-command'>whoami</span>
                            </div>
                            <div className='terminal-output'>
                                <h1 className='hero-name'>Jordy Murgueitio</h1>
                                <p className='hero-role'>Support Developer &amp; Internal Tools Builder</p>
                            </div>
                            <div className='terminal-line'>
                                <span className='terminal-prompt'>$</span>
                                <span className='terminal-command'>cat impact.log</span>
                            </div>
                            <div className='terminal-output terminal-typing'>
                                <span className="typing-text">{displayText}</span>
                                <span className="typing-cursor">|</span>
                            </div>
                        </div>
                    </div>

                    <p className='hero-description'>
                        I build internal tools that make teams faster. Currently shipping production features with 
                        <strong>Vue.js</strong>, <strong>Express.js</strong>, and <strong>SQL</strong> — turning repetitive 
                        support problems into self-service solutions that save hours every week.
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
                    <div className='image-backdrop'></div>
                    <div className='image-glow'></div>
                    <img src={jordyImg} className='hero-image' alt="Jordy Murgueitio - Support Developer & Tools Builder" />
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