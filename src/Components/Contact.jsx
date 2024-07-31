import React from 'react'
import Navbar from "../Components/Navbar";
import'./Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  return (
    <div>
      <Navbar/>

    
    <div id="contact">
      <div className="divider"></div>
      <p className="sub-para">
        Please feel free to reach out to me via the contact information provided below. Whether you have questions, inquiries, or simply want to connect, I'm always available to engage in meaningful discussions. Your feedback and input are highly valued and appreciated. Looking forward to hearing from you soon....
      </p> 
      <div className="contact-row">
        <div className="contact-left">
          <div className="icon-box">
            <div className="icon12">
            <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="info">
              <h5>Email:</h5>
              <p><a href="mailto:adhyanshun@gmail.com" className="email-link">adhyanshun@gmail.com</a></p>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon12">
            <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="info">
              <h5>Linkedin:</h5>
              <p><a href="www.linkedin.com/in/adhyanshu "className='linkedin-link'>My LinkedIn Profile..</a></p>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon12">
            <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="info">
              <h5>Location:</h5>
              <p>Bhubaneswar, India</p>
            </div>
          </div>
          <div className="map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239486.6672798155!2d85.65563581983349!3d20.301129051650506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1708286597033!5m2!1sen!2sin"
              width="100%" height="550" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <div className="contact-right">
          <form action="">
            <input type="text" name="name" id="name" placeholder="Your Name" />
            <input type="email" name="email" id="email" placeholder="Your Email" />
            <input type="text" name="subject" id="subject" placeholder="Subject" />
            <textarea name="msg" id="msg" rows="21" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Contact