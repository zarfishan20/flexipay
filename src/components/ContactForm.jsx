import { Link } from 'react-router-dom';
import { Phone, Mail, Pin, ArrowRight } from './Icons';

export const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.635654335552!2d0.12930551576959593!3d51.5718033131727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a68f7b7c3c47%3A0x9d5d71564e7a2f2b!2s4%20Wangey%20Rd%2C%20Chadwell%20Heath%2C%20London%20RM6%204D%2C%20UK!5e0!3m2!1sen!2suk!4v1684019035103!5m2!1sen!2suk";

const ContactUs = () => (
  <section className="section home-contact" id="contact-home">
    <div className="wrap home-contact__grid">
      <div data-aos="fade-up">
        <p className="eyebrow">Contact us</p>
        <h2>Come and say <em>hello.</em></h2>
        <ul className="contact-list">
          <li><span className="contact-list__icon"><Phone /></span><div><small>Phone</small><a href="tel:+447828693818">07828 693818</a></div></li>
          <li><span className="contact-list__icon"><Mail /></span><div><small>Email</small><a href="mailto:info@flexipaysystems.com">info@flexipaysystems.com</a></div></li>
          <li><span className="contact-list__icon"><Pin /></span><div><small>Address</small><span>4 Wangey Road, Chadwell Heath, London, RM6 4D</span></div></li>
        </ul>
        <Link to="/contact" className="btn btn--primary">Send us a message <ArrowRight width={18} height={18} /></Link>
      </div>
      <div className="map-frame" data-aos="fade-up" data-aos-delay="120">
        <iframe src={MAP_SRC} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="FlexiPay Location" />
      </div>
    </div>
  </section>
);

export default ContactUs;
