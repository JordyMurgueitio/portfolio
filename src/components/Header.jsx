import './Header.css';

function Header() {
    return (
    <header className="header">
        <nav>
            <ul>
                <li><a href="#about-section">About me</a></li>
                <li><a href="#skills-section">Skills</a></li>
                <li><a href="#experience-section">Experience</a></li>
                <li><a href="#projects-section">Projects</a></li>
                <li><a href="#contact-section">Contact</a></li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;

