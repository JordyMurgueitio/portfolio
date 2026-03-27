import './global.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import LiveDemo from './components/LiveDemo'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <LiveDemo />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App