// components/TopBar.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TopBar = () => {
  return (
    <div className="bg-light py-1 border-bottom small topbar">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-start">
            <a href="#book" > Book Free Consultancy</a>
          </Col>
          <Col xs={12} md={6} className="text-end">
             info@flexipaysystems.com |  01234 567890 |  Mon - Fri: 9am - 5pm
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
