import { Link } from 'react-router-dom';
import { ArrowUpRight, Payroll, Ledger } from './Icons';

const Services = () => (
  <section className="section home-services">
    <div className="wrap">
      <div className="section-head" data-aos="fade-up">
        <p className="eyebrow">Our services</p>
        <h2>Two things, done <em>properly.</em></h2>
        <p className="section-head__aside">We keep our focus narrow on purpose. Payroll and bookkeeping are what we do, every day, for businesses like yours.</p>
      </div>

      <div className="svc-grid">
        <article className="svc-card svc-card--dark" data-aos="fade-up">
          <span className="svc-card__num mono">01</span>
          <div className="svc-card__icon"><Payroll width={28} height={28} /></div>
          <h3>Payroll Management</h3>
          <p>At FlexiPay, we offer reliable and fully managed payroll services to ensure your employees are paid accurately and on time, every time. From payslip generation and HMRC submissions to pension contributions and year-end reports, we handle it all, so you don’t have to.</p>
          <ul className="tags"><li>Payslips</li><li>RTI</li><li>Pensions</li><li>P60 / P11D</li></ul>
          <Link to="/services" className="svc-card__link">Explore payroll <ArrowUpRight width={18} height={18} /></Link>
        </article>

        <article className="svc-card svc-card--paper" data-aos="fade-up" data-aos-delay="120">
          <span className="svc-card__num mono">02</span>
          <div className="svc-card__icon"><Ledger width={28} height={28} /></div>
          <h3>Bookkeeping</h3>
          <p>At FlexiPay, we take the stress out of managing your day-to-day finances. Our bookkeeping services are designed to keep your records accurate, organised, and up to date, giving you complete visibility over your business’s finances.</p>
          <ul className="tags"><li>Reconciliations</li><li>VAT returns</li><li>P&amp;L</li><li>Balance sheet</li></ul>
          <Link to="/services" className="svc-card__link">Explore bookkeeping <ArrowUpRight width={18} height={18} /></Link>
        </article>
      </div>

      <ol className="process" data-aos="fade-up">
        <li><span className="mono">Step 1</span><h4>Free consultation</h4><p>A short call to understand your team, your software and your deadlines.</p></li>
        <li><span className="mono">Step 2</span><h4>Clean handover</h4><p>We set up your payroll and ledgers, and bring any loose records up to date.</p></li>
        <li><span className="mono">Step 3</span><h4>Every month, sorted</h4><p>Payslips go out, filings go in, and you get clear reports you can act on.</p></li>
      </ol>
    </div>
  </section>
);

export default Services;
