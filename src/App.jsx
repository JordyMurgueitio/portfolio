import './App.css'
import jordyImg from './assets/jordy-image.jpeg'

function App() {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li><a href="#about">About me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id='about'>
        <h2>About Me</h2>
        <p>Welcome to my portfolio! I'm Jordy, a passionate developer with experience in various technologies.</p>
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