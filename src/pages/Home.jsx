import React from 'react';
import { Container } from 'react-bootstrap';
import HeroSection from '../components/HeroSection'; // Your HeroSection component
import ServicesGrid from '../components/ServicesGrid'; // Your ServicesGrid component
import Testimonials from '../components/Testimonials'; // Your Testimonials component
import ContactForm from '../components/ContactForm'; // Your ContactForm component





const HomePage = () => {
  return (
    <>

      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <Container  className="py-5 text-center" data-aos="fade-up">
       
        <ServicesGrid />
      </Container>

      {/* Testimonials Section */}
      <Container  className="py-5" data-aos="fade-up">
        <Testimonials />
      </Container>

      {/* Contact Section (Optional: Can be a form or just a link) */}
      <Container  className="py-5 text-center" data-aos="fade-up">
         <ContactForm />
      </Container>

      
    </>
  );
};

export default HomePage;
