import '../styles/Contact.css';

export default function Contact(){
    return(
        <section className="contact-container">
            <div className="contact-heading">
                <h3>Let's Connect</h3>
                <p>I’m always open to new opportunities and collaborations about design and development. <br></br>
                    Drop me a message and I’ll get back to you soon!</p>
            </div>

            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' placeholder='Your name' required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' placeholder='Your email address' required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor='message'>Message</label>
                        <input type='text' id='message' placeholder='Any messages...' required/>
                    </div>

                    <button type='submit'>Send Message</button>

                </form>
            </div>
        </section>
    )
}