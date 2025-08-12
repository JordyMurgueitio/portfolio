import jordyImg from '../assets/Jordycolor.png'
function About () {
    return (
        <section id='about-section'>
            <div className='about-text-container'>        
                <h2>
                    Hi, <br />
                    I'm Jordy, <br /> 
                    Front-end developer
                </h2>
                <p>
                    Passionate about building responsive, user-friendly websites and apps. 
                    Skilled in HTML, CSS, JavaScript, React, and SQL, 
                    I focus on creating smooth, functional experiences that look great and work seamlessly. 
                    I enjoy solving problems, refining details, and bringing ideas to life through clean, efficient code.
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