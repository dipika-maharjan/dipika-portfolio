import '../styles/HeroSection.css';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import heroImage from '../assets/images/heroImage.JPG';

export default function HeroSection(){
  return(
    <section className="hero-section">
      <div className='hero-content'>
        <h2>Hi, I'm Dipika</h2>

        <p>Aspiring Front-End Developer & UI/UX Enthusiast</p>

        <Button
          variant="contained"
          endIcon={<KeyboardArrowDownIcon />}>About Me
        </Button>      


        <div className='hero-icon'>
          <a href="mailto:maharjandipika49@gmail.com" target="_blank" rel="email">
            <EmailIcon fontSize="large" />
          </a>

          <a href="https://github.com/dipika-maharjan" target="_blank" rel="github">
            <GitHubIcon fontSize="large" />
          </a>

          <a href="https://www.linkedin.com/in/dipika-maharjan-50b019291/" target="_blank" rel="linkedin">
            <LinkedInIcon fontSize="large" />
          </a>

          <Button variant="contained" endIcon={<FileDownloadIcon />} href='/assets/Resume.pdf'>Download Resume</Button>
        </div>   
      </div>

        <div className="hero-image">
          <img src = {heroImage} alt = "hero image"/>
        </div>

    </section>
  )
}