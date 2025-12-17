import jordyImg from '../assets/Jordycolor.png'
function About () {
    return (
        <section id='about-section'>
            <div className='hero-container'>
                <div className='hero-content'>
                    <div className='hero-greeting'>
                        <span className='greeting-text'>Hello, I'm</span>
                        <h1 className='hero-name'>Jordy Murgueitio</h1>
                        <h2 className='hero-title'>Full-Stack Developer</h2>
                    </div>
                    <p className='hero-description'>
                        Professional developer with over a year of experience building web applications, email templates, 
                        and internal tools. Currently working as a Support Developer, specializing in <strong>Vue.js</strong> and <strong>Express.js</strong> 
                        applications, database querying, and code debugging. Previously worked as an HTML Developer for CRM teams, 
                        creating responsive email campaigns. I'm passionate about solving complex problems, optimizing user experiences, 
                        and building scalable solutions that make a real impact.
                    </p>
                    <div className='hero-actions'>
                        <a href="#contact" className='btn btn-primary'>
                            <span>Get In Touch</span>
                            <i className="fa fa-arrow-right"></i>
                        </a>
                        <a href="#projects" className='btn btn-secondary'>
                            <span>View My Work</span>
                        </a>
                    </div>
                    <div className='hero-stats'>
                        <div className='stat-item'>
                            <span className='stat-number'>1+</span>
                            <span className='stat-label'>Years Experience</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-number'>3+</span>
                            <span className='stat-label'>Projects Built</span>
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