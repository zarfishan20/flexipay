import React from 'react';
import { Navbar, Nav, Button, Container, Row, Col, Card, Form } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <>
      {/* Header */}
      <Navbar bg="light" expand="lg" className="shadow-sm p-3 fixed-top">
        <Container>
          <Navbar.Brand href="#">FlexiPay</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#quote">Request a Quote</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Landing Page Section */}
      <Container className="hero-section text-center py-5 d-flex align-items-center justify-content-center" id="home">
        <div>
          <h1>Welcome to FlexiPay</h1>
          <p>Accounting solutions tailored for your business</p>
          <Button variant="warning" size="lg" href="#quote">Request a Quote</Button>
        </div>
      </Container>

      {/* Services Section */}
      <Container id="services" className="py-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          <Col md={4}><Card className="p-3 shadow-sm text-center"><h5>Accounting Automation</h5></Card></Col>
          <Col md={4}><Card className="p-3 shadow-sm text-center"><h5>Invoice Management</h5></Card></Col>
          <Col md={4}><Card className="p-3 shadow-sm text-center"><h5>Tax Filing & Reports</h5></Card></Col>
        </Row>
      </Container>

      {/* About Section */}
      <Container id="about" className="py-5 text-center">
        <h2>About Us</h2>
        <p>FlexiPay is an accounting solution designed to simplify financial management for businesses of all sizes.</p>
      </Container>

      {/* Request a Quote Section */}
      <Container id="quote" className="py-5 text-center">
        <h2>Request a Quote</h2>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Your Requirements</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe your requirements" />
          </Form.Group>
          <Button variant="warning" type="submit" className="mt-3">Submit</Button>
        </Form>
      </Container>

      {/* Contact Section */}
      <Container id="contact" className="py-5 text-center">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:info@flexipay.com">info@flexipay.com</a></p>
      </Container>

      {/* Footer */}
      <footer className="text-center py-3 bg-light mt-4">
        <p>&copy; {new Date().getFullYear()}  FlexiPay | <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms</a></p>
      </footer>
    </>
  );
}

export default App;
