import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (


<Navbar bg="light" expand="lg" className="shadow-sm p-3 fixed-top">
<Container>
  <Navbar.Brand href="/" data-aos="fade-down" className='navbar-brand'>FlexiPay</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/" >Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/services">Services</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      <Nav.Link as={Link} to="/requestquote" >Request a Quote</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  );
};
export default NavbarComponent;