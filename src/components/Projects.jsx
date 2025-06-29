import '../styles/Projects.css';
import weatherImage from '../assets/images/weather.png';
import interiorImage from '../assets/images/interior.png';
import currencyImage from '../assets/images/currency.png';
import amazonImage from '../assets/images/amazon.png';
import mentalhealthImage from '../assets/images/mentalhealth.png';
import bmiImage from '../assets/images/bmi.png';

export default function Projects(){
    return(
        <section className="projects-container">
            <div className="projects-content">
                <h3>Projects I've Built</h3>
                <p>Here’s a glimpse into what I’ve been building — from fun mini tools to frontend projects and user-first designs.</p>
                <br></br>
                <div className='project-card'>
                    <div className="project-box">
                        <div className='project-details'>
                            <h4>Weather App</h4>
                            <img src = {weatherImage} alt = "weather img"/>
                            <p>A responsive weather dashboard built using React. 
                                Fetches real-time weather data via OpenWeather API.</p>
                                <br></br>
                                <p><strong>Tools Used:</strong> React, API</p>
                            <button>View Project</button>
                        </div>
                    </div>

                    <div className="project-box">
                        <div className='project-details'>
                            <h4>Interior Design Inspiration</h4>
                            <img src = {interiorImage} alt = "interior img"/>
                            <p>A concept app where users can explore rustic living room designs for home inspiration. </p>
                            <br></br>
                            <p><strong>Tools Used:</strong> PostgreSQL, Express, React, Node.js</p>
                            <button>View Project</button>
                        </div>
                    </div>

                    <div className="project-box">
                        <div className='project-details'>
                            <h4>Currency Converter</h4>
                            <img src = {currencyImage} alt = "currency img"/>
                            <p>A fun, interactive currency converter mini project to master core JavaScript logic and DOM manipulation.</p>
                            <br></br>
                            <p><strong>Tools Used:</strong> HTML, CSS, JavaScript</p>
                            <button>View Project</button>
                        </div>
                    </div>

                    <div className="project-box">
                        <div className='project-details'>
                            <h4>Amazon Clone (HTML/CSS)</h4>
                            <img src = {amazonImage} alt = "amazon img"/>
                            <p>A fully responsive clone of the Amazon homepage layout, built with pure HTML and CSS. </p>
                            <br></br>
                            <p><strong>Tools Used:</strong> HTML, CSS</p>
                            <button>View Project</button>
                        </div>
                    </div>

                    <div className="project-box">
                        <div className='project-details'>
                            <h4>Mental Health App (UI/UX)</h4>
                            <img src = {mentalhealthImage} alt = "mental health img"/>
                            <p>A mobile app prototype designed to promote mindful self-care called YouMatter.</p>
                            <br></br>
                            <p><strong>Tools Used:</strong> Figma, UX Research, Prototyping</p>
                            <button>View Project</button>
                        </div>
                    </div>

                    <div className="project-box">
                        <div className='project-details'>
                            <h4>BMI Calculator App</h4>
                            <img src = {bmiImage} alt = "bmi img"/>
                            <p>Currently building a BMI and health plan generator using React for frontend and Flask (Python) for backend. </p>
                            <br></br>
                            <p><strong>Tools Used:</strong> React, Python Flask, Axios</p>
                            <button>In progress</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}