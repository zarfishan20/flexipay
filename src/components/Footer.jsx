import { Link } from 'react-router-dom';
import { ArrowUpRight } from './Icons';

const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <div className="footer__cta">
        <p className="eyebrow eyebrow--light">Ready when you are</p>
        <h2>Hand over the numbers.<br /><em>Keep the evenings.</em></h2>
        <Link to="/requestquote" className="btn btn--accent btn--lg">Get your quote <ArrowUpRight width={18} height={18} /></Link>
      </div>

      <div className="footer__grid">
        <div>
          <Link to="/" className="footer__brand">Flexi<em>Pay</em></Link>
          <p>Payroll and bookkeeping for UK small businesses, run from Chadwell Heath, London.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/requestquote">Request a quote</Link>
        </div>
        <div>
          <h3>Visit</h3>
          <p>4 Wangey Road<br />Chadwell Heath<br />London, RM6 4D</p>
        </div>
        <div>
          <h3>Talk</h3>
          <a href="tel:+447828693818">07828 693818</a>
          <a href="mailto:info@flexipaysystems.com">info@flexipaysystems.com</a>
          <p className="muted">Mon – Fri · 10am – 6pm</p>
        </div>
      </div>

      <div className="footer__base">
        <span>&copy; {new Date().getFullYear()} FlexiPay Systems</span>
        <span>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
          <a href="https://caramelwebstudios.com" target="_blank" rel="noopener noreferrer">Powered by Caramel Web Studios</a>
        </span>
      </div>
    </div>
    <div className="footer__wordmark" aria-hidden="true">FlexiPay</div>
  </footer>
);

export default Footer;
