function Skills () {
    return (
        <section id='skills'>
            <h2>Skills</h2>
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
                    <i className="fa-solid fa-database"></i>
                    <p>SQL</p>
                </div>
                <div className='skill-card'>
                    <i className="fa-brands fa-git-alt"></i>
                    <p>GIT</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;