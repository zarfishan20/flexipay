import { Container, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'; 

const HeroSection = () => {
  return (

<Container 
fluid
className="hero-section text-center py-5 d-flex align-items-center justify-content-center" 
id="home" 
data-aos="fade-up">
<div className="hero-content shadow-sm">
  <h1 className="display-4 fw-bold">Enhance Your Business Strategies with FlexiPay </h1>
  <p className="lead">Accounting solutions tailored for your business</p>
 
    <Link to="/contact" className="cta-link">
    <Button size="lg">
    Book a Consultation
    </Button>
    </Link>
   
</div>
</Container>
  );
};

export default HeroSection;