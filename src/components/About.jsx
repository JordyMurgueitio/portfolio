import jordyImg from '../assets/Jordycolor.png'
function About () {
    return (
        <section id='about-section'>
            <div className='about-text-container'>        
                <h2>
                    Hi, <br />
                    I'm Jordy, <br /> 
                    Full-Stack Developer
                </h2>
                <p>
                    Professional developer with over a year of experience building web applications, email templates, 
                    and internal tools. Currently working as a Support Developer, specializing in Vue.js and Express.js 
                    applications, database querying, and code debugging. Previously worked as an HTML Developer for CRM teams, 
                    creating responsive email campaigns. I'm passionate about solving complex problems, optimizing user experiences, 
                    and building scalable solutions that make a real impact.
                </p>
                <div className='buttons-container'>
                    <a href="#contact">Contact Me</a>
                    <a href="#projects">View Projects</a>
                </div>
            </div>
            <img src={jordyImg} className='jordy-image' alt="Jordy Image" />
        </section>
    );
}

export default About;