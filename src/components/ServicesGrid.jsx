import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  return (

<Container 
fluid
className="services text-center py-5 d-flex align-items-center justify-content-center" 

data-aos="fade-up">
  <h5>OUR SERVICES</h5>
<h2 className="text-center mb-4">Streamline Your Business Growth</h2>
<Row className='g-4'>
  <Col md={6}>
  <Card className="p-3 shadow-sm text-center hover-effect h-100">
    <h5>Payroll Management</h5>
    <p>At FlexiPay, we offer reliable and fully managed payroll services to ensure your employees are paid accurately and on time, every time. From payslip generation and HMRC submissions to pension contributions and year-end reports, we handle it all—so you don’t have to. </p>
    </Card>
    </Col>
  <Col md={6}>
  <Card className="p-3 shadow-sm text-center hover-effect h-100">
    <h5>Bookkeeping</h5>
    <p>At FlexiPay, we take the stress out of managing your day-to-day finances. Our bookkeeping services are designed to keep your records accurate, organized, and up to date—giving you complete visibility over your business’s finances.</p>
    </Card>
    </Col>
 
</Row>
</Container>
  );
};

export default Services;