// components/TopBar.jsx
import { Container, Row, Col } from 'react-bootstrap';

const TopBar = () => {
  return (
    <div className="bg-light py-1 border-bottom small topbar">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-start">
            <a href="/contact" > Book Free Consultancy</a>
          </Col>
          <Col xs={12} md={6} className="text-end">
          <a href="mailto:info@flexipaysystems.com">info@flexipaysystems.com</a> | 
    <a href="tel:+447828693818">07828693818</a> | 
    Mon - Fri: 10am - 6pm </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
