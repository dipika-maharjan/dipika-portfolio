import '../styles/Projects.css';
import weatherImage from '../assets/images/weather.png';
import interiorImage from '../assets/images/interior.png';
import codepenImage from '../assets/images/code-pen.JPG';
import amazonImage from '../assets/images/amazon.png';
import mentalhealthImage from '../assets/images/mentalhealth.png';
import bmiImage from '../assets/images/bmi.png';

export default function Projects(){
    return(
        <section id='projects' className="projects-container">
            <div className="projects-content">
                <h3><i class="fa-solid fa-file-code"></i>Projects I've Built</h3>
                <p>Here’s a glimpse into what I’ve been building — from fun mini tools to frontend projects and user-first designs.</p>
                <br></br>
                <div className='project-card'>
                    <div className="project-box">
                        <div className='project-details'>
                            <h4>Weather App</h4>
                            <img src = {weatherImage} alt = "weather img"/>
                            <p>A responsive weather dashboard built using React. 
                                Fetches real-time weather data via OpenWeather API.
                            </p>
                            <br></br>
                            <p><strong>Tools Used:</strong> React, API</p>
                            <a href="https://github.com/dipika-maharjan/Weather-App" target="_blank" rel="noopener noreferrer">
                                <button>View Project</button>
                            </a>
                        </div>
                    </div>

                    <div className="project-box">
                        <div className='project-details'>
                            <h4>Interior Design Inspiration</h4>
                            <img src = {interiorImage} alt = "interior img"/>
                            <p>A concept app where users can explore rustic living room designs for home inspiration. </p>
                            <br></br>
                            <p><strong>Tools Used:</strong> PostgreSQL, Express, React, Node.js</p>
                            <a href="https://github.com/dipika-maharjan/web-frontend" target="_blank" rel="noopener noreferrer">
                                <button>Frontend Repo</button>
                            </a>

                            <a href="https://github.com/dipika-maharjan/web-backend" target="_blank" rel="noopener noreferrer" style={{marginLeft: '1rem'}}>
                                <button>Backend Repo</button>
                            </a>
                        </div>
                    </div>

                    <div className="project-box">
                        <div className='project-details'>
                            <h4>Code-Pen</h4>
                            <img src = {codepenImage} alt = "codepen img"/>
                            <p>A minimal live code editor built with React, allowing users to write and preview HTML, CSS, and JavaScript code in real-time.</p>
                            <br></br>
                            <p><strong>Tools Used:</strong> React, Vite, CodeMirror</p>
                            <a href="https://github.com/dipika-maharjan/code-pen" target="_blank" rel="noopener noreferrer">
                                <button>View Project</button>
                            </a>
                        </div>
                    </div>

                    <div className="project-box">
                        <div className='project-details'>
                            <h4>Amazon Clone (HTML/CSS)</h4>
                            <img src = {amazonImage} alt = "amazon img"/>
                            <p>A fully responsive clone of the Amazon homepage layout, built with pure HTML and CSS. </p>
                            <br></br>
                            <p><strong>Tools Used:</strong> HTML, CSS</p>
                            <a href="https://github.com/dipika-maharjan/Amazon-Clone-Project" target="_blank" rel="noopener noreferrer">
                                <button>View Project</button>
                            </a>
                        </div>
                    </div>

                    <div className="project-box">
                        <div className='project-details'>
                            <h4>Mental Health App (UI/UX)</h4>
                            <img src = {mentalhealthImage} alt = "mental health img"/>
                            <p>A mobile app prototype designed to promote mindful self-care called YouMatter.</p>
                            <br></br>
                            <p><strong>Tools Used:</strong> Figma, UX Research, Prototyping</p>
                            <a href="https://www.figma.com/proto/1rhWS3uH0wiizhpqjYwILs/Mental-Health-App?node-id=46-12&starting-point-node-id=46%3A12&t=PhVdC0zi5Z8OBYHM-1" target="_blank" rel="noopener noreferrer">
                                <button>View Project</button>
                            </a>
                        </div>
                    </div>

                    <div className="project-box">
                        <div className='project-details'>
                            <h4>BMI Calculator App</h4>
                            <img src = {bmiImage} alt = "bmi img"/>
                            <p>Currently building a BMI and health plan generator group project using React for frontend and Flask (Python) for backend. </p>
                            <br></br>
                            <p><strong>Tools Used:</strong> React, Python Flask, Axios</p>
                            <a href="https://github.com/iamsabinakhanal/Smart-BMI-calculator" target="_blank" rel="noopener noreferrer">
                                <button>In Progress</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}