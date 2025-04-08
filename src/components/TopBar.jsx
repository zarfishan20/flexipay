// components/TopBar.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TopBar = () => {
  return (
    <div className="bg-light py-1 border-bottom small">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-start">
            <a href="#book" className="text-primary fw-bold"> Book Free Consultancy</a>
          </Col>
          <Col md={6} className="text-end">
             info@flexipaysystems.com |  01234 567890 |  Mon - Fri: 9am - 5pm
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
