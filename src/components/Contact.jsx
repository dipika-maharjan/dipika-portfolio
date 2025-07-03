import { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch("https://formspree.io/f/xovwblby", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then(() => {
        setShowPopup(true);
        form.reset(); // clear form
        setTimeout(() => setShowPopup(false), 4000); // auto close after 4s
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <section id='contact' className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-heading">
            <h3>Let's Connect</h3>
            <p>
              I’m always open to new opportunities and collaborations about design and development.
              <br />
              Drop me a message and I’ll get back to you soon!
            </p>
          </div>
          <div className="contact-details">
            <a href="mailto:maharjandipika49@gmail.com">
              <i className="fa-solid fa-envelope"></i>
              <span>maharjandipika49@gmail.com</span>
            </a>
            <a>
              <i className="fa-solid fa-location-dot"></i>
              <span>Kirtipur, Kathmandu</span>
            </a>
            <a href="tel:9766540931">
              <i className="fa-solid fa-phone"></i>
              <span>9766540931</span>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name='name' placeholder='Your name' required />
            </div>

            <div className="form-group">
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' placeholder='Your email address' required />
            </div>

            <div className="form-group">
              <label htmlFor='message'>Message</label>
              <input type='text' id='message' name='message' placeholder='Any messages...' required />
            </div>

            <button type='submit'>Send Message</button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <p>Thank you! Your message has been sent.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
