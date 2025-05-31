
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection'; // Your HeroSection component
import ServicesGrid from '../components/ServicesGrid'; // Your ServicesGrid component
import Testimonials from '../components/Testimonials'; // Your Testimonials component
import ContactForm from '../components/ContactForm'; // Your ContactForm component
import Recognition from '../components/Recognitions';





const HomePage = () => {
  return (
    <>

<Helmet>
  <title>FlexiPay | Bookkeeping & Payroll Services</title>
  <meta name="description" content="FlexiPay offers expert bookkeeping and payroll solutions for small and medium-sized businesses in the UK." />
  <meta name="keywords" content="bookkeeping, payroll, accountancy, FlexiPay,HMRC,Self assessments, sole trader, company, business accountants, business finance UK" />
  <link rel="canonical" href="https://flexipaysystems.com/" />
</Helmet>
     
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
