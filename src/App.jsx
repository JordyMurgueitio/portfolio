import './App.css'
import jordyImg from './assets/jordycolor.png'

function App() {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li><a href="#about-section">About me</a></li>
            <li><a href="#skills-section">Skills</a></li>
            <li><a href="#projects-section">Projects</a></li>
            <li><a href="#contact-section">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id='about-section'>
        <div className='about-text-container'>        
          <h2>Hi, <br />
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
      <section id='skills'>
        <h2>Skills</h2>
        <div className='skills-container'>
          <div className='skill-card'>
            <i class="fa fa-html5"></i>
            <p>HTML</p>
          </div>
          <div className='skill-card'>
            <i class="fa-brands fa-css3-alt"></i>
            <p>CSS</p>
          </div>
          <div className='skill-card'>
            <i class="fa-brands fa-square-js"></i>
            <p>JavaScript</p>
          </div>
          <div className='skill-card'>
            <i class="fa-brands fa-react"></i>
            <p>React</p>
          </div>
          <div className='skill-card'>
            <i class="fa-solid fa-database"></i>
            <p>SQL</p>
          </div>
          <div className='skill-card'>
            <i class="fa-brands fa-git-alt"></i>
            <p>GIT</p>
          </div>
        </div>
      </section>
      <section id='projects'>
        <h2>Projects</h2>
        <p>Here are some of my recent projects:</p>
        <div className="projects-container">
            <div className="project-box">
                <img className="project-image" src="" alt="" />
                <h5 className="project-title">Film Finder</h5>
                <a className="project-link" href="./projects/film-finder/index.html" target="_blank">Open project</a>
            </div>
            <div className="project-box">
                <img className="project-image" src="" alt="" />
                <h5 className="project-title">Weather App</h5>
                <a className="project-link" href="./projects/weather-app/index.html" target="_blank">Open project</a>
            </div>
        </div>
      </section>
    </>
  )
}

export default App