import '../styles/Skills.css';
import htmlImage from '../assets/images/html.png';
import cssImage from '../assets/images/css.png';
import jsImage from '../assets/images/js.png';
import reactImage from '../assets/images/react.png';
import figmaImage from '../assets/images/figma.png';
import githubImage from '../assets/images/github.png';



export default function Skills(){
    return(
        <section className="skills-container">
            <div className="skills-heading">
                <h3>Skills</h3>
                <p>What I work with</p>
            </div>

            <div className="skills-content">
                <div className="skills">
                    <img src = {htmlImage} alt = "html image"/>
                </div>

                <div className="skills">
                    <img src = {cssImage} alt = "css image"/>
                </div>

                <div className="skills">
                    <img src={jsImage} alt = "js image"/>
                </div>

                <div className="skills">
                    <img src = {reactImage} alt = "react image"/>
                </div>

                <div className="skills">
                    <img src = {figmaImage} alt='figma image'/>
                </div>

                <div className="skills">
                    <img src = {githubImage} alt='github image'/>
                </div>
            </div>
        </section>
    )
}