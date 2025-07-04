import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          Designed & Developed by Dipika Maharjan
          <br />
          © 2025. All rights reserved.
        </p>
      </div>

      <div className="footer-links">
        <a href="mailto:maharjandipika49@gmail.com">
          <i className="fa-solid fa-envelope"></i> Email
        </a>
        <a
          href="https://github.com/dipika-maharjan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i> GitHub
        </a>
        <a
          href="https://linkedin.com/in/dipika-maharjan-50b019291"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </footer>
  );
}
