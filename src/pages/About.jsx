
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const About = () => {
  return (

<>

<Helmet>
  <title>About Us | FlexiPay</title>
  <meta name="description" content="Learn about FlexiPay – a trusted UK-based firm specializing in tailored bookkeeping and payroll solutions." />
  <meta name="keywords" content="about FlexiPay, UK accountancy firm, our story, bookkeeping experts" />
  <link rel="canonical" href="https://flexipaysystems.com/about" />
</Helmet>



    <Container id="about" className="about-container py-5 text-center" data-aos="fade-up">
      <h2>Our Story</h2>
      <h1>Expert Consulting Solutions for Your Business</h1>
      <p>
        FlexiPay, a modern accountancy firm headquartered in Romford, United Kingdom, emerged with a vision to streamline the financial operations of businesses. With a niche in bookkeeping and payroll services, we have honed our expertise to cater to the needs of small and medium-sized enterprises.
      </p>
      <p>
        Founded on principles of reliability and efficiency, FlexiPay has evolved into a trusted partner for numerous businesses, providing tailored financial solutions. Our journey from inception to our current standing underscores our commitment to simplifying the financial landscape for our valued clients.
      </p>
      <a href="/contact">Get in Touch</a> {/* Optional link to contact section */}
    </Container>

    </>
  );
};

export default About;