import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container id="contact" className="py-5" data-aos="fade-up">
    
      <h2 className="text-center mb-4">Get in Touch</h2>
            <p>We would love to hear from you. Please fill out the form below, and we'll get back to you!</p>
           
      <Row>
    

        {/* Contact Form */}
        <Col md={12} className=" mb-4">
      
             <form
              name="contact"  // Form name (this will help Netlify handle the submission)
              method="POST"
              data-netlify="true"  // Netlify form handler
              data-netlify-honeypot="bot-field"  // Honeypot field to prevent bots
              className="contact-form"
            >
              {/* Hidden input for Netlify form */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="form-control"
                  rows="4"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="btn">
                Send Message
              </Button>
            </form>
         
        </Col>


    {/* Contact Information */}
    <Col md={12} className="text-center mb-4">
 
            <h5>Contact Information</h5>
            <p>Phone: <a href="tel:+441234567890">01234 567 890</a></p>
            <p>Address: 4 Wangey Road, Chadwell Heath, London, RM6 4D</p>
            <p>Email: <a href="mailto:info@flexipaysystems.com">info@flexipaysystems.com</a></p>
      
        </Col>

      </Row>

      {/* Map Section */}
      <div className="map-responsive mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.635654335552!2d0.12930551576959593!3d51.5718033131727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a68f7b7c3c47%3A0x9d5d71564e7a2f2b!2s4%20Wangey%20Rd%2C%20Chadwell%20Heath%2C%20London%20RM6%204D%2C%20UK!5e0!3m2!1sen!2suk!4v1684019035103!5m2!1sen!2suk"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="FlexiPay Location"
        ></iframe>
      </div>
    </Container>
  );
};

export default Contact;
