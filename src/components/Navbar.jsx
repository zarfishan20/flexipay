import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight } from './Icons';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="wrap nav__inner">
        <Link to="/" className="nav__brand" aria-label="FlexiPay home">
          <img src="/logo.png" alt="" width="46" height="37" />
          <span>Flexi<em>Pay</em></span>
        </Link>

        <nav className="nav__links" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/requestquote" className="btn btn--accent nav__cta">
            Request a quote <ArrowUpRight width={16} height={16} />
          </Link>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span />
        </button>
      </div>

      <div className="nav__drawer" aria-hidden={!open}>
        {[...links, { to: '/requestquote', label: 'Request a quote' }].map((l, i) => (
          <NavLink key={l.to} to={l.to} end={l.end} style={{ '--i': i }} className={({ isActive }) => `nav__drawer-link ${isActive ? 'is-active' : ''}`} tabIndex={open ? 0 : -1}>
            <span className="mono">0{i + 1}</span>{l.label}
          </NavLink>
        ))}
        <div className="nav__drawer-foot">
          <a href="tel:+447828693818">07828 693818</a>
          <a href="mailto:info@flexipaysystems.com">info@flexipaysystems.com</a>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
