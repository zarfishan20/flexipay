import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav, Button, Container, Row, Col, Card, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import logo from "../src/logo.png";
import { Helmet } from "react-helmet";




const App = () => {
  const formRef = useRef();
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('your_service_id', 'your_template_id', formRef.current, 'your_user_id')
      .then((result) => {
        alert('Message sent successfully!');
        formRef.current.reset();
      }, (error) => {
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <>
    <Helmet>
        <title>FlexiPay Systems | Payroll & Bookkeeping Services</title>
        <meta name="description" content="FlexiPay Systems offers professional payroll and bookkeeping services in London. Trusted by small businesses across the UK." />
        <meta name="keywords" content="payroll services, bookkeeping, HMRC, accounting, FlexiPay, London accountants" />
        <meta name="author" content="FlexiPay Systems" />
        <link rel="canonical" href="https://flexipaysystems.com" />

        <meta property="og:title" content="FlexiPay Systems" />
        <meta property="og:description" content="Efficient payroll and bookkeeping services for businesses." />
        <meta property="og:image" content="https://flexipaysystems.com/preview.jpg" />
        <meta property="og:url" content="https://flexipaysystems.com" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "FlexiPay Systems",
            "url": "https://flexipaysystems.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4 Wangey Road",
              "addressLocality": "Chadwell Heath",
              "addressRegion": "London",
              "postalCode": "RM6 4D",
              "addressCountry": "UK"
            },
            "telephone": "+44 1234 567 890",
            "email": "info@flexipaysystems.com"
          }
        `}</script>
      </Helmet>
      {/* Header */}
      <Navbar bg="light" expand="lg" className="shadow-sm p-3 fixed-top">
        <Container>
          <Navbar.Brand href="#">FlexiPay</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#quote">Request a Quote</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Landing Section */}
      <Container className="hero-section text-center py-5 d-flex align-items-center justify-content-center" id="home" data-aos="fade-up">
        <div>
          <h1>Welcome to FlexiPay</h1>
          <p>Accounting solutions tailored for your business</p>
          <Button size="lg" href="#quote">Request a Quote</Button>
        </div>
      </Container>

      {/* Services */}
      <Container id="services" className="py-5 text-center" data-aos="fade-up">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          <Col md={4}><Card className="p-3 shadow-sm text-center hover-effect"><h5>Payroll Management</h5><p>HMRC-compliant payroll processing for your team.</p></Card></Col>
          <Col md={4}><Card className="p-3 shadow-sm text-center hover-effect"><h5>Bookkeeping</h5><p>Accurate record-keeping, reconciliations, and reports.</p></Card></Col>
          <Col md={4}><Card className="p-3 shadow-sm text-center hover-effect"><h5>HMRC Compliance</h5><p>Stay up to date with RTI, tax filings, and pension submissions.</p></Card></Col>
        </Row>
      </Container>

      {/* About */}
      <Container id="about" className="py-5 text-center" data-aos="fade-up">
        <h2>About Us</h2>
        <p>FlexiPay is an accounting solution designed to simplify financial management for businesses of all sizes.</p>
      </Container>

      {/* Testimonials */}
      <Container id="testimonials" className="py-5" data-aos="fade-up">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <Row>
          <Col md={4}><Card className="p-3 shadow-sm"><p>"Reliable and professional!"</p><strong>– Sarah M.</strong></Card></Col>
          <Col md={4}><Card className="p-3 shadow-sm"><p>"Helped us streamline payroll."</p><strong>– John D.</strong></Card></Col>
          <Col md={4}><Card className="p-3 shadow-sm"><p>"Highly recommend FlexiPay."</p><strong>– Anita R.</strong></Card></Col>
        </Row>
      </Container>

      {/* Pricing */}
      <Container id="pricing" className="py-5" data-aos="fade-up">
        <h2 className="text-center mb-4">Pricing Plans</h2>
        <Row>
          <Col md={4}><Card className="p-4 shadow-sm text-center"><h4>Starter</h4><h3>£49/mo</h3><ul><li>Payroll</li><li>Bookkeeping</li></ul></Card></Col>
          <Col md={4}><Card className="p-4 shadow-sm text-center"><h4>Standard</h4><h3>£89/mo</h3><ul><li>Everything in Starter</li><li>HMRC Filing</li></ul></Card></Col>
          <Col md={4}><Card className="p-4 shadow-sm text-center"><h4>Premium</h4><h3>£149/mo</h3><ul><li>All Services</li><li>Dedicated Support</li></ul></Card></Col>
        </Row>
      </Container>

      {/* Request a Quote */}
      <Container id="quote" className="py-5 text-center" data-aos="fade-up">
        <h2>Request a Quote</h2>
        <Form ref={formRef} onSubmit={sendEmail}>
          <Form.Group controlId="name"><Form.Label>Your Name</Form.Label><Form.Control type="text" name="name" placeholder="Enter your name" required /></Form.Group>
          <Form.Group controlId="email"><Form.Label>Your Email</Form.Label><Form.Control type="email" name="email" placeholder="Enter your email" required /></Form.Group>
          <Form.Group controlId="message"><Form.Label>Your Requirements</Form.Label><Form.Control as="textarea" name="message" rows={3} placeholder="Describe your requirements" required /></Form.Group>
          <Button type="submit" className="mt-3 custom-btn-primary">Submit</Button>
        </Form>
      </Container>

      {/* Contact */}
      <Container id="contact" className="py-5 text-center" data-aos="fade-up">
        <h2>Contact Us</h2>
        <p>Phone: 01234 567 890</p>
        <p>Address: 4 Wangey Road, Chadwell Heath, London, RM6 4D</p>
        <p>Email: <a href="mailto:info@flexipaysystems.com">info@flexipaysystems.com</a></p>
      
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

      {/* Footer */}
      <footer className="text-center py-3 bg-light mt-4">
        <p>&copy; {new Date().getFullYear()} FlexiPay | <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms</a></p>
      </footer>
    </>
  );
};

export default App;