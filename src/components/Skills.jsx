import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

function Skills () {
    const [headerRef, headerVisible] = useScrollReveal();
    const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });
    const [footerRef, footerVisible] = useScrollReveal();

    const skillsData = [
        {
            category: "Frontend Development",
            icon: "fa-solid fa-laptop-code",
            accent: "cyan",
            skills: [
                { name: "HTML", icon: "fa fa-html5", level: "Advanced" },
                { name: "CSS", icon: "fa-brands fa-css3-alt", level: "Advanced" },
                { name: "JavaScript", icon: "fa-brands fa-square-js", level: "Advanced" },
                { name: "React", icon: "fa-brands fa-react", level: "Intermediate" },
                { name: "Vue.js", icon: "fa-brands fa-vuejs", level: "Intermediate" },
                { name: "Liquid", icon: "fa-solid fa-droplet", level: "Advanced" }
            ]
        },
        {
            category: "Backend & Database",
            icon: "fa-solid fa-server",
            accent: "green",
            skills: [
                { name: "Express.js", icon: "fa-brands fa-node-js", level: "Intermediate" },
                { name: "SQL", icon: "fa-solid fa-database", level: "Advanced" }
            ]
        },
        {
            category: "Tools & Platforms",
            icon: "fa-solid fa-toolbox",
            accent: "amber",
            skills: [
                { name: "Git", icon: "fa-brands fa-git-alt", level: "Advanced" },
                { name: "GitHub", icon: "fa-brands fa-github", level: "Advanced" },
                { name: "AWS", icon: "fa-brands fa-aws", level: "Intermediate" },
                { name: "Postman", icon: "fa-solid fa-rocket", level: "Advanced" },
                { name: "Jira", icon: "fa-solid fa-tasks", level: "Advanced" },
                { name: "Figma", icon: "fa-brands fa-figma", level: "Intermediate" },
                { name: "Intercom", icon: "fa-solid fa-comments", level: "Advanced" },
                { name: "Braze", icon: "fa-solid fa-envelope", level: "Advanced" }
            ]
        }
    ];

    const totalSkills = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0);

    return (
        <section id='skills-section'>
            {/* Animated grid background */}
            <div className="skills-grid-bg" aria-hidden="true"></div>

            <div ref={headerRef} className={`skills-header scroll-reveal ${headerVisible ? 'visible' : ''}`}>
                <span className="section-label">What I Work With</span>
                <h2>Technical Skills</h2>
                <p>
                    Technologies I use professionally and in personal projects.
                </p>
                <div className="skills-summary">
                    <div className="summary-pill">
                        <i className="fa-solid fa-layer-group"></i>
                        <span>{skillsData.length} Categories</span>
                    </div>
                    <div className="summary-pill">
                        <i className="fa-solid fa-code"></i>
                        <span>{totalSkills} Technologies</span>
                    </div>
                </div>
            </div>
            
            <div ref={gridRef} className={`skills-categories scroll-reveal ${gridVisible ? 'visible' : ''}`}>
                {skillsData.map((category, index) => (
                    <div key={index} className={`skills-category skills-category--${category.accent} stagger-${index + 1}`}>
                        <div className='category-header'>
                            <div className={`category-icon-wrap category-icon--${category.accent}`}>
                                <i className={category.icon}></i>
                            </div>
                            <div className="category-title-group">
                                <h3>{category.category}</h3>
                                <span className="category-count">{category.skills.length} skills</span>
                            </div>
                        </div>
                        <div className='skills-grid'>
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className={`skill-card skill-card--${category.accent}`}>
                                    <div className='skill-icon'>
                                        <i className={skill.icon}></i>
                                    </div>
                                    <p className='skill-name'>{skill.name}</p>
                                    <span className={`skill-level skill-level--${skill.level.toLowerCase()}`}>
                                        {skill.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div ref={footerRef} className={`skills-footer scroll-reveal ${footerVisible ? 'visible' : ''}`}>
                <p>Always open to learn and explore new technologies.</p>
            </div>
        </section>
    );
}

export default Skills;