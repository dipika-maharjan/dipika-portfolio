import '../styles/HeroSection.css';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import dipikaImage from '../assets/images/dipika-image.png';

export default function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={0}
      >
        <motion.h2 variants={fadeInUp} custom={1}>
          Hi, I'm Dipika
        </motion.h2>

        <motion.p variants={fadeInUp} custom={2}>
          Aspiring Front-End Developer & UI/UX Enthusiast
        </motion.p>

        <motion.div className="hero-button" variants={fadeInUp} custom={3}>
          <a href="/Dipika-Resume.pdf" download>
            <button className="download-btn">Download Resume</button>
          </a>
          <a href="#contact">
            <button className="contact-btn">Contact</button>
          </a>
        </motion.div>

        <motion.div className="hero-icon-wrapper" variants={fadeInUp} custom={4}>
          <div className="hero-icon">
            <a href="mailto:maharjandipika49@gmail.com">
              <EmailIcon fontSize="large" />
            </a>
            <a href="https://github.com/dipika-maharjan" target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/dipika-maharjan-50b019291/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <p className="hero-subtext">
            5+ Projects Built • React & Figma • Currently Learning
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={5}
      >
        <motion.img
          src={dipikaImage}
          alt="hero image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </section>
  );
}
