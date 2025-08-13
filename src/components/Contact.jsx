function Contact () {
    return (
        <section id="contact-section">
            <h2>Contact Me</h2>
            <p>If you'd like to get in touch, feel free to reach out!</p>
            <div className="contact-container">
                <a href="https://github.com/JordyMurgueitio" target="_blank">
                    <i className="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/jordy-murgueitio/" target="_blank">
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>
            <button className="download-cv-button">Download CV</button>
        </section>
    );
}

export default Contact;