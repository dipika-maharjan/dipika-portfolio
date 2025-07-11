import '../styles/HeroSection.css';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import heroImage from '../assets/images/heroImage.png';

export default function HeroSection(){
  return(
    <section className="hero-section">
      <div className='hero-content'>
        <h2>Hi, I'm Dipika</h2>

        <p>Aspiring Front-End Developer & UI/UX Enthusiast</p>

        <div className="hero-button">
          <a href="/Dipika-Resume.pdf" download>
            <button className="download-btn">
              Download Resume <i className="fa-solid fa-download"></i>
            </button>
          </a>
          
          <a href="#contact">
            <button className="contact-btn">Contact</button>
          </a>
        </div>

        {/* <Button variant="contained" endIcon={<FileDownloadIcon />} href='/assets/Resume.pdf'>Download Resume</Button>

        <Button
          variant="contained"
          endIcon={<KeyboardArrowDownIcon />}>Contact
        </Button>   */}


        <div className='hero-icon-wrapper'>
          <div className='hero-icon'>
            <a href="mailto:maharjandipika49@gmail.com" target="_blank" rel="noopener noreferrer">
              <EmailIcon fontSize="large" />
            </a>

            <a href="https://github.com/dipika-maharjan" target="_blank" rel="noopener noreferrer">  {/* Use rel="noopener noreferrer" for security when using target="_blank" // - "noopener" prevents access to window.opener (protects your site) // - "noreferrer" hides the referrer info from the new tab */}
              <GitHubIcon fontSize="large" />
            </a>

            <a href="https://www.linkedin.com/in/dipika-maharjan-50b019291/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>

          <p className='hero-subtext'>5+ Projects Built • React & Figma • Currently Learning</p>
        </div>

      </div>

        <div className="hero-image">
          <img src = {heroImage} alt = "hero image"/>
        </div>

    </section>
  )
}