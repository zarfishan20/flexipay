import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  return (

<Container id="services" className="py-5 text-center" data-aos="fade-up">
<h2 className="text-center mb-4">Our Services</h2>
<Row>
  <Col md={6}>
  <Card className="p-3 shadow-sm text-center hover-effect">
    <h5>Payroll Management</h5>
    <p>HMRC-compliant payroll processing for your team.</p>
    </Card>
    </Col>
  <Col md={6}>
  <Card className="p-3 shadow-sm text-center hover-effect">
    <h5>Bookkeeping</h5>
    <p>Accurate record-keeping, reconciliations, and reports.</p>
    </Card>
    </Col>
 
</Row>
</Container>
  );
};

export default Services;