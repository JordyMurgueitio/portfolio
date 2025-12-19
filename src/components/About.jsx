import jordyImg from '../assets/Jordycolor.png'
import './About.css';

function About () {
    return (
        <section id='about-section'>
            <div className='hero-container'>
                <div className='hero-content'>
                    <div className='hero-greeting'>
                        <span className='greeting-text'>Hello, I'm</span>
                        <h1 className='hero-name'>Jordy Murgueitio</h1>
                        <h2 className='hero-title'>Front-End Developer</h2>
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
                    </div>
                </div>
                <div className='hero-image-container'>
                    <div className='image-backdrop'></div>
                    <div className='image-glow'></div>
                    <img src={jordyImg} className='hero-image' alt="Jordy Murgueitio - Full-Stack Developer" />
                </div>
            </div>
        </section>
    );
}

export default About;