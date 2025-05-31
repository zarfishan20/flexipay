import React, { useRef, useState } from 'react';
import { Container, Form, Button, Alert, Row, Col  } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';





const Contact = () => {


  const formRef = useRef();
  const [formStatus, setFormStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_64wx75k', // Replace with your service ID
        'template_9j3u1rs', // Replace with your template ID
        formRef.current,
        'Vvqims1TIdWXHU3s7' // Replace with your user/public key
      );

      setFormStatus({ type: 'success', message: 'Your message has been sent successfully!' });
      formRef.current.reset();
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    }
  };



  return (

<>
<Helmet>
  <title>Contact Us | FlexiPay</title>
  <meta name="description" content="Get in touch with the FlexiPay team for enquiries about our bookkeeping and payroll services." />
  <meta name="keywords" content="contact FlexiPay, support, enquiry, business help, accountancy contact UK" />
  <link rel="canonical" href="https://flexipaysystems.com/contact" />
</Helmet>




    <Container id="contact" className="py-5" data-aos="fade-up">
    
      <h2 className="text-center mb-4">Get in Touch</h2>
            <p>We would love to hear from you. Please fill out the form below, and we'll get back to you!</p>
            {formStatus && (
        <Alert variant={formStatus.type === 'success' ? 'success' : 'danger'}>
          {formStatus.message}
        </Alert>
      )} 
      <Row>
    

        {/* Contact Form */}
        <Col md={12} className=" mb-4">
      
        <Form ref={formRef} onSubmit={sendEmail}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name*</Form.Label>
              <Form.Control type="text" name="name" required placeholder="Your full name" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" name="email" required placeholder="Your email address" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone*</Form.Label>
              <Form.Control type="tel" name="phone" required placeholder="Your contact number" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject*</Form.Label>
              <Form.Control type="text" name="subject" required placeholder="Subject or purpose" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message / Requirements*</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={4}
            required
            placeholder="Briefly describe your needs or request a consultation"
          />
        </Form.Group>

        <div className="text-center">
          <Button type="submit" className="custom-btn-primary mt-2">
            Send Message
          </Button>
        </div>
      </Form>
         
        </Col>


    {/* Contact Information */}
    <Col md={12} className="text-center mb-4">
 
            <h5>Contact Information</h5>
            <p>Phone: <a href="tel:+447828693818">07828693818</a></p>
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

    </>
  );
};

export default Contact;
