import { Link } from 'react-router-dom';
import { ArrowRight, Check } from './Icons';

const ticker = ['Payroll', 'RTI submissions', 'Bookkeeping', 'VAT returns', 'Auto-enrolment', 'P60s & P11Ds', 'Bank reconciliations', 'Year-end reports'];

const HeroSection = () => (
  <section className="hero" id="home">
    <div className="hero__glow" aria-hidden="true" />
    <div className="wrap hero__grid">
      <div className="hero__copy">
        <p className="eyebrow reveal" style={{ '--d': '0ms' }}>Payroll &amp; bookkeeping · London</p>
        <h1 className="reveal" style={{ '--d': '90ms' }}>
          Payroll that lands <em>on&nbsp;time.</em><br />
          Books that <span className="underline-swash">balance.</span>
        </h1>
        <p className="lead reveal" style={{ '--d': '180ms' }}>
          FlexiPay runs the numbers for small and medium-sized UK businesses: payslips, HMRC filings, pensions and tidy monthly accounts, handled by people who pick up the phone.
        </p>
        <div className="hero__actions reveal" style={{ '--d': '270ms' }}>
          <Link to="/contact" className="btn btn--primary btn--lg">Book a consultation <ArrowRight width={18} height={18} /></Link>
          <Link to="/services" className="btn btn--ghost btn--lg">See what we handle</Link>
        </div>
        <ul className="hero__ticks reveal" style={{ '--d': '360ms' }}>
          <li><Check width={16} height={16} /> HMRC-compliant</li>
          <li><Check width={16} height={16} /> Fixed, agreed fees</li>
          <li><Check width={16} height={16} /> One named contact</li>
        </ul>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="payslip">
          <div className="payslip__head">
            <span className="payslip__brand">Flexi<em>Pay</em></span>
            <span className="mono">PAYSLIP · EXAMPLE</span>
          </div>
          <div className="payslip__who">
            <div><small>Employee</small><strong>R. Okafor</strong></div>
            <div><small>Period</small><strong className="mono">M07 · Oct</strong></div>
          </div>
          <dl className="payslip__rows">
            <div><dt>Basic pay</dt><dd className="mono">£2,416.67</dd></div>
            <div><dt>Overtime</dt><dd className="mono">£183.40</dd></div>
            <div className="neg"><dt>PAYE tax</dt><dd className="mono">−£311.20</dd></div>
            <div className="neg"><dt>National Insurance</dt><dd className="mono">−£148.06</dd></div>
            <div className="neg"><dt>Pension (5%)</dt><dd className="mono">−£107.29</dd></div>
          </dl>
          <div className="payslip__net">
            <span>Net pay</span>
            <strong className="mono">£2,033.52</strong>
          </div>
          <div className="payslip__stamp">Paid</div>
        </div>

        <div className="chip chip--rti">
          <span className="chip__dot" />
          <div><strong>RTI submitted</strong><small className="mono">HMRC · accepted</small></div>
        </div>
        <div className="chip chip--recon">
          <svg viewBox="0 0 120 36" width="120" height="36"><polyline points="0,30 18,24 34,27 52,15 70,18 88,8 104,11 120,3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <div><strong>Books reconciled</strong><small className="mono">Bank ↔ ledger · 0 gaps</small></div>
        </div>
      </div>
    </div>

    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {[...ticker, ...ticker].map((t, i) => (<span key={i}>{t}<i>✦</i></span>))}
      </div>
    </div>
  </section>
);

export default HeroSection;
