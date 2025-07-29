import '../styles/Projects.css';
import { motion } from 'framer-motion'; // 👈 Import Framer
import weatherImage from '../assets/images/weather.png';
import interiorImage from '../assets/images/interior.png';
import codepenImage from '../assets/images/code-pen.JPG';
import amazonImage from '../assets/images/amazon.png';
import mentalhealthImage from '../assets/images/mentalhealth.png';
import bmiImage from '../assets/images/bmi.png';

export default function Projects() {
    return (
        <motion.section
            id="projects"
            className="projects-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            <motion.div
                className="projects-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h3>
                    <i className="fa-solid fa-file-code"></i>Projects I've Built
                </h3>
                <p>Here’s a glimpse into what I’ve been building — from fun mini tools to frontend projects and user-first designs.</p>
                <br />

                <div className="project-card">
                    {[ 
                        {
                            title: "Weather App",
                            image: weatherImage,
                            description: "A responsive weather dashboard built using React. Fetches real-time weather data via OpenWeather API.",
                            tools: "React, API",
                            link: "https://github.com/dipika-maharjan/Weather-App",
                            button: "View Project"
                        },
                        {
                            title: "Interior Design Inspiration",
                            image: interiorImage,
                            description: "A concept app where users can explore rustic living room designs for home inspiration.",
                            tools: "PostgreSQL, Express, React, Node.js",
                            link: "https://github.com/dipika-maharjan/web-frontend",
                            extraLink: "https://github.com/dipika-maharjan/web-backend",
                            button: "Frontend Repo",
                            extraButton: "Backend Repo"
                        },
                        {
                            title: "Code-Pen",
                            image: codepenImage,
                            description: "A minimal live code editor built with React, allowing users to write and preview HTML, CSS, and JavaScript.",
                            tools: "React, Vite, CodeMirror",
                            link: "https://github.com/dipika-maharjan/code-pen",
                            button: "View Project"
                        },
                        {
                            title: "Amazon Clone (HTML/CSS)",
                            image: amazonImage,
                            description: "A fully responsive clone of the Amazon homepage layout, built with pure HTML and CSS.",
                            tools: "HTML, CSS",
                            link: "https://github.com/dipika-maharjan/Amazon-Clone-Project",
                            button: "View Project"
                        },
                        {
                            title: "Mental Health App (UI/UX)",
                            image: mentalhealthImage,
                            description: "A mobile app prototype designed to promote mindful self-care called YouMatter.",
                            tools: "Figma, UX Research, Prototyping",
                            link: "https://www.figma.com/proto/1rhWS3uH0wiizhpqjYwILs/Mental-Health-App?node-id=46-12&starting-point-node-id=46%3A12",
                            button: "View Project"
                        },
                        {
                            title: "BMI Calculator App",
                            image: bmiImage,
                            description: "Currently building a BMI and health plan generator using React for frontend and Flask for backend.",
                            tools: "React, Python Flask, Axios",
                            link: "https://github.com/iamsabinakhanal/Smart-BMI-calculator",
                            button: "In Progress"
                        }
                    ].map((project, index) => (
                        <motion.div
                            className="project-box"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-details">
                                <h4>{project.title}</h4>
                                <img src={project.image} alt={project.title} />
                                <p>{project.description}</p>
                                <br />
                                <p><strong>Tools Used:</strong> {project.tools}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button>{project.button}</button>
                                </a>
                                {project.extraLink && (
                                    <a href={project.extraLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem' }}>
                                        <button>{project.extraButton}</button>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}
