

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Testimonials = () => {
  return (

<Container id="services" className="py-5 text-center" data-aos="fade-up">
<h5>TESTIMONIALS</h5>
        <h2 className="text-center mb-4">Client Testimonials for FlexiPay</h2>
        <Row>
          <Col md={4}><Card className="p-3 shadow-sm"><p >"Reliable and professional!"</p><strong>– Sarah M.</strong></Card></Col>
          <Col md={4}><Card className="p-3 shadow-sm"><p>"Helped us streamline payroll."</p><strong>– John D.</strong></Card></Col>
          <Col md={4}><Card className="p-3 shadow-sm"><p>"Highly recommend FlexiPay."</p><strong>– Anita R.</strong></Card></Col>
        </Row>
      </Container>
       );
      };
      
      export default Testimonials;