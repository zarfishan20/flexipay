import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageHero from '../components/PageHero';
import { ArrowRight, Check, Payroll, Ledger } from '../components/Icons';

const services = [
  {
    id: 'payroll', icon: Payroll, title: 'Payroll Management', sub: 'HMRC-compliant payroll processing for your team.',
    items: ['HMRC-compliant payroll processing (RTI)', 'Salary, deductions, bonuses, benefits calculations', 'Automated payslips', 'Tax filings and year-end reports (P60s, P11Ds)', 'Pension scheme management and auto-enrolment'],
  },
  {
    id: 'bookkeeping', icon: Ledger, title: 'Bookkeeping', sub: 'Accurate record-keeping, reconciliations, and reports.',
    items: ['Accurate record-keeping of income and expenses', 'Bank reconciliations for accuracy', 'Financial reports (Income Statement, Balance Sheet)', 'VAT Returns preparation and filing', 'Expense management and accounts payable/receivable'],
  },
];

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Our Services | FlexiPay</title>
      <meta name="description" content="Explore our professional bookkeeping, payroll, and financial management services designed for businesses." />
      <meta name="keywords" content="bookkeeping services, payroll management, accounting, FlexiPay services, financial servicecs, London accountants, East London accountants" />
      <link rel="canonical" href="https://flexipaysystems.com/services" />
    </Helmet>

    <PageHero eyebrow="Our services" title={<>Everything between <em>payday</em> and <em>year end</em></>}>
      <p>Fully managed payroll and bookkeeping for sole traders, partnerships and limited companies across the UK.</p>
    </PageHero>

    <section className="section">
      <div className="wrap svc-detail">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <article key={s.id} id={s.id} className={`svc-row ${i % 2 ? 'svc-row--flip' : ''}`} data-aos="fade-up">
              <div className="svc-row__label">
                <span className="svc-row__num">0{i + 1}</span>
                <div className="svc-card__icon"><Icon width={28} height={28} /></div>
                <h2>{s.title}</h2>
                <p>{s.sub}</p>
              </div>
              <ul className="checklist">
                {s.items.map((it) => (<li key={it}><Check width={18} height={18} /> {it}</li>))}
              </ul>
            </article>
          );
        })}

        <div className="svc-cta" data-aos="fade-up">
          <h3>Not sure what you need?</h3>
          <p>Tell us about your business and we’ll put together a clear, fixed quote.</p>
          <Link to="/requestquote" className="btn btn--accent btn--lg">Request a quote <ArrowRight width={18} height={18} /></Link>
        </div>
      </div>
    </section>
  </>
);

export default ServicesPage;
