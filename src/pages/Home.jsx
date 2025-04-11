import React from 'react';
import { Container } from 'react-bootstrap';
import HeroSection from '../components/HeroSection'; // Your HeroSection component
import ServicesGrid from '../components/ServicesGrid'; // Your ServicesGrid component
import Testimonials from '../components/Testimonials'; // Your Testimonials component
import ContactForm from '../components/ContactForm'; // Your ContactForm component
import Recognition from '../components/Recognitions';





const HomePage = () => {
  return (
    <>
     
      {/* Hero Section */}
      <HeroSection />

        {/* Services Section */}
  
        <ServicesGrid />
      
        <Recognition/>
      
      {/* Testimonials Section */}
     
        <Testimonials />

      {/* Contact Section (Optional: Can be a form or just a link) */}
   
         <ContactForm />
    
    </>
  );
};

export default HomePage;
