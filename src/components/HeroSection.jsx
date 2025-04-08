import { Container, Button } from "react-bootstrap";


const HeroSection = () => {
  return (

<Container 
fluid
className="hero-section text-center py-5 d-flex align-items-center justify-content-center" 
id="home" 
data-aos="fade-up">
<div className="hero-content">
  <h1 className="display-4 fw-bold">Welcome to FlexiPay</h1>
  <p className="lead">Accounting solutions tailored for your business</p>
  <Button size="lg" href="#quote" className="cta-button">
    Request a Quote
    </Button>
</div>
</Container>
  );
};

export default HeroSection;