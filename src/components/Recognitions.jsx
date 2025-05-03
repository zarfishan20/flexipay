import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
const Recognition = () => {

return(

<Container
fluid
className="py-5 my-5 d-flex flex-column align-items-center justify-content-center" 
id="recognition" 
data-aos="fade-up">

<h5>RECOGNIZED EXCELLENCE</h5>
<h2 className="text-center mb-4">Recognitions & Certifications</h2>
<p>We've earned prestigious awards & accreditations recognizing our excellence and commitment.</p>
<Row>
  <Col md={4}>
  <Card className="p-3 shadow-sm  hover-effect">
    <h5>Certified Business Consultant</h5>
    <h6>January 2022</h6>
    <p>Recognized for expertise and professionalism in consulting services.</p>
    </Card>
    </Col>
  <Col md={4}>
  <Card className="p-3 shadow-sm  hover-effect">
    <h5>Consulting Excellence Award</h5>
    <h6>March 2020</h6>
    <p>Acknowledged for outstanding performance in the consulting industry.</p>
    </Card>
    </Col>

    <Col md={4}>
  <Card className="p-3 shadow-sm hover-effect">
    <h5>Top Consulting Firm of the Year</h5>
    <h6>June 2021</h6>
    <p>Awarded for exceptional contributions and strategic consulting solutions.</p>
    </Card>
    </Col>
 
</Row>




</Container>

);


};
export default Recognition;