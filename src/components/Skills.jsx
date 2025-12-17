function Skills () {
    return (
        <section id='skills-section'>
            <div className='skills-header'>
                <h2>Technical Skills</h2>
                <p>
                    Full-stack developer with professional experience in web development, 
                    email development, and internal tooling. Proficient in modern frameworks and development tools.
                </p>
            </div>
            
            <div className='skills-categories'>
                <div className='skills-category'>
                    <h3>Frontend</h3>
                    <div className='skills-container'>
                        <div className='skill-card'>
                            <i className="fa fa-html5"></i>
                            <p>HTML</p>
                        </div>
                        <div className='skill-card'>
                            <i className="fa-brands fa-css3-alt"></i>
                            <p>CSS</p>
                        </div>
                        <div className='skill-card'>
                            <i className="fa-brands fa-square-js"></i>
                            <p>JavaScript</p>
                        </div>
                        <div className='skill-card'>
                            <i className="fa-brands fa-react"></i>
                            <p>React</p>
                        </div>
                        <div className='skill-card'>
                            <i className="fa-brands fa-vuejs"></i>
                            <p>Vue.js</p>
                        </div>
                        <div className='skill-card'>
                            <i className="fa-solid fa-code"></i>
                            <p>Liquid</p>
                        </div>
                    </div>
                </div>

                <div className='skills-category'>
                    <h3>Backend & Database</h3>
                    <div className='skills-container'>
                        <div className='skill-card'>
                            <i className="fa-brands fa-node-js"></i>
                            <p>Express.js</p>
                        </div>
                        <div className='skill-card'>
                            <i className="fa-solid fa-database"></i>
                            <p>SQL</p>
                        </div>
                    </div>
                </div>

                <div className='skills-category'>
                    <h3>Tools & Platforms</h3>
                    <div className='skills-container'>
                        <div className='skill-card'>
                            <i className="fa-brands fa-git-alt"></i>
                            <p>Git</p>
                        </div>
                        <div className='skill-card'>
                            <i className="fa-brands fa-github"></i>
                            <p>GitHub</p>
                        </div>
                        <div className='skill-card'>
                            <i className="fa-brands fa-aws"></i>
                            <p>AWS</p>
                        </div>
                        <div className='skill-card'>
                            <i className="fa-solid fa-rocket"></i>
                            <p>Postman</p>
                        </div>
                        <div className='skill-card'>
                            <i className="fa-solid fa-tasks"></i>
                            <p>Jira</p>
                        </div>
                        <div className='skill-card'>
                            <i className="fa-brands fa-figma"></i>
                            <p>Figma</p>
                        </div>
                        <div className='skill-card'>
                            <i className="fa-solid fa-comments"></i>
                            <p>Intercom</p>
                        </div>
                        <div className='skill-card'>
                            <i className="fa-solid fa-envelope"></i>
                            <p>Braze</p>
                        </div>
                        <div className='skill-card'>
                            <i className="fa-solid fa-chart-bar"></i>
                            <p>Kibana</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;