import { Link } from 'react-router-dom';
import { Mail, Phone, Clock } from './Icons';

const TopBar = () => (
  <div className="topbar">
    <div className="wrap topbar__inner">
      <Link to="/contact" className="topbar__cta">
        <span className="pulse-dot" aria-hidden="true" /> Book a free consultation
      </Link>
      <div className="topbar__meta">
        <a href="mailto:info@flexipaysystems.com"><Mail width={14} height={14} /> info@flexipaysystems.com</a>
        <a href="tel:+447828693818"><Phone width={14} height={14} /> 07828 693818</a>
        <span className="topbar__hours"><Clock width={14} height={14} /> Mon – Fri · 10am – 6pm</span>
      </div>
    </div>
  </div>
);

export default TopBar;
