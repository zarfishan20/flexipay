import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {

  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

   // Close navbar on outside click
   useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expanded]);

  return (

<Navbar bg=""
 expand="lg" 
 expanded={expanded}
 onToggle={(value) => setExpanded(value)}
 className="text-primary"
 ref={navRef} >
<Container>
  <Navbar.Brand href="/" data-aos="fade-down" className='navbar-brand'>
  FlexiPay
  </Navbar.Brand>
  <Navbar.Toggle 
  aria-controls="basic-navbar-nav" 
  />
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