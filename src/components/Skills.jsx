function Skills () {
    const skillsData = [
        {
            category: "Frontend Development",
            icon: "fa-solid fa-laptop-code",
            skills: [
                { name: "HTML", icon: "fa fa-html5", level: "advanced" },
                { name: "CSS", icon: "fa-brands fa-css3-alt", level: "advanced" },
                { name: "JavaScript", icon: "fa-brands fa-square-js", level: "intermediate" },
                { name: "React", icon: "fa-brands fa-react", level: "intermediate" },
                { name: "Vue.js", icon: "fa-brands fa-vuejs", level: "intermediate" },
                { name: "Liquid", icon: "fa-solid fa-droplet", level: "intermediate" }
            ]
        },
        {
            category: "Backend & Database",
            icon: "fa-solid fa-server",
            skills: [
                { name: "Express.js", icon: "fa-brands fa-node-js", level: "intermediate" },
                { name: "SQL", icon: "fa-solid fa-database", level: "intermediate" }
            ]
        },
        {
            category: "Tools & Platforms",
            icon: "fa-solid fa-toolbox",
            skills: [
                { name: "Git", icon: "fa-brands fa-git-alt", level: "intermediate" },
                { name: "GitHub", icon: "fa-brands fa-github", level: "intermediate" },
                { name: "AWS", icon: "fa-brands fa-aws", level: "beginner" },
                { name: "Postman", icon: "fa-solid fa-rocket", level: "intermediate" },
                { name: "Jira", icon: "fa-solid fa-tasks", level: "intermediate" },
                { name: "Figma", icon: "fa-brands fa-figma", level: "beginner" },
                { name: "Intercom", icon: "fa-solid fa-comments", level: "beginner" },
                { name: "Braze", icon: "fa-solid fa-envelope", level: "intermediate" },
                { name: "Kibana", icon: "fa-solid fa-chart-bar", level: "beginner" }
            ]
        }
    ];

    return (
        <section id='skills-section'>
            <div className='skills-header'>
                <h2>Technical Skills</h2>
                <p>
                    Hands-on experience with modern web technologies and development tools.
                    Built real-world applications and solved complex problems in professional environments.
                </p>
            </div>
            
            <div className='skills-categories'>
                {skillsData.map((category, index) => (
                    <div key={index} className='skills-category' style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className='category-header'>
                            <i className={category.icon}></i>
                            <h3>{category.category}</h3>
                        </div>
                        <div className='skills-grid'>
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className={`skill-card skill-${skill.level}`}>
                                    <div className='skill-icon'>
                                        <i className={skill.icon}></i>
                                    </div>
                                    <div className='skill-info'>
                                        <p className='skill-name'>{skill.name}</p>
                                        <div className='skill-level'>
                                            <span className='level-indicator'></span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className='skills-footer'>
                <p>Always learning and exploring new technologies to stay current in the ever-evolving web development landscape.</p>
            </div>
        </section>
    );
}

export default Skills;