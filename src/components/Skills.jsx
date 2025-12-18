import './Skills.css';

function Skills () {
    const skillsData = [
        {
            category: "Frontend Development",
            icon: "fa-solid fa-laptop-code",
            skills: [
                { name: "HTML", icon: "fa fa-html5" },
                { name: "CSS", icon: "fa-brands fa-css3-alt" },
                { name: "JavaScript", icon: "fa-brands fa-square-js" },
                { name: "React", icon: "fa-brands fa-react" },
                { name: "Vue.js", icon: "fa-brands fa-vuejs" },
                { name: "Liquid", icon: "fa-solid fa-droplet" }
            ]
        },
        {
            category: "Backend & Database",
            icon: "fa-solid fa-server",
            skills: [
                { name: "Express.js", icon: "fa-brands fa-node-js" },
                { name: "SQL", icon: "fa-solid fa-database" }
            ]
        },
        {
            category: "Tools & Platforms",
            icon: "fa-solid fa-toolbox",
            skills: [
                { name: "Git", icon: "fa-brands fa-git-alt" },
                { name: "GitHub", icon: "fa-brands fa-github" },
                { name: "AWS", icon: "fa-brands fa-aws" },
                { name: "Postman", icon: "fa-solid fa-rocket" },
                { name: "Jira", icon: "fa-solid fa-tasks" },
                { name: "Figma", icon: "fa-brands fa-figma" },
                { name: "Intercom", icon: "fa-solid fa-comments" },
                { name: "Braze", icon: "fa-solid fa-envelope" },
                { name: "Kibana", icon: "fa-solid fa-chart-bar" }
            ]
        }
    ];

    return (
        <section id='skills-section'>
            <div className='skills-header'>
                <h2>Technical Skills</h2>
                <p>
                    Technologies I use professionally and in personal projects. 
                    Check out my Experience and Projects sections to see them in action.
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
                                <div key={skillIndex} className='skill-card'>
                                    <div className='skill-icon'>
                                        <i className={skill.icon}></i>
                                    </div>
                                    <p className='skill-name'>{skill.name}</p>
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