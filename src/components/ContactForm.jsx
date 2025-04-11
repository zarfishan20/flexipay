
import { Container } from "react-bootstrap";

const ContactUs = () => {
  return (

<Container 
fluid
 id="contact" className="hero-section text-center py-5 d-flex align-items-center justify-content-center " data-aos="fade-up">
<h2>Contact Us</h2>
<p>Phone: 01234 567 890</p>
<p>Address: 4 Wangey Road, Chadwell Heath, London, RM6 4D</p>
<p>Email: <a href="mailto:info@flexipaysystems.com">info@flexipaysystems.com</a></p>

  <div className="map-responsive">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.635654335552!2d0.12930551576959593!3d51.5718033131727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a68f7b7c3c47%3A0x9d5d71564e7a2f2b!2s4%20Wangey%20Rd%2C%20Chadwell%20Heath%2C%20London%20RM6%204D%2C%20UK!5e0!3m2!1sen!2suk!4v1684019035103!5m2!1sen!2suk"
      width="100%"
      height="200"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="FlexiPay Location"
    ></iframe>
  </div>

</Container>
  );
};

export default ContactUs;