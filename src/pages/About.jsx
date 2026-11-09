import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageHero from '../components/PageHero';
import { ArrowRight } from '../components/Icons';

const values = [
  { k: 'Reliability', v: 'Deadlines are fixed points. Payday and HMRC dates are planned backwards, not chased.' },
  { k: 'Efficiency', v: 'Sensible software, clean processes and no duplicated effort. Your time stays yours.' },
  { k: 'Clarity', v: 'Plain-English reports and a named contact, so you always know where the numbers stand.' },
];

const About = () => (
  <>
    <Helmet>
      <title>About Us | FlexiPay</title>
      <meta name="description" content="Learn about FlexiPay – a trusted UK-based firm specializing in tailored bookkeeping and payroll solutions." />
      <meta name="keywords" content="about FlexiPay, UK accountancy firm, our story, bookkeeping experts" />
      <link rel="canonical" href="https://flexipaysystems.com/about" />
    </Helmet>

    <PageHero eyebrow="Our story" title={<>Expert consulting solutions <em>for your business</em></>} />

    <section className="section about">
      <div className="wrap about__grid">
        <div className="about__pull" data-aos="fade-right">
          <p>“We exist to make the financial side of running a business feel <em>simple.</em>”</p>
        </div>
        <div className="about__body prose" data-aos="fade-up">
          <p className="dropcap">
            FlexiPay, a modern accountancy firm headquartered in Romford, United Kingdom, emerged with a vision to streamline the financial operations of businesses. With a niche in bookkeeping and payroll services, we have honed our expertise to cater to the needs of small and medium-sized enterprises.
          </p>
          <p>
            Founded on principles of reliability and efficiency, FlexiPay has evolved into a trusted partner for numerous businesses, providing tailored financial solutions. Our journey from inception to our current standing underscores our commitment to simplifying the financial landscape for our valued clients.
          </p>
          <Link to="/contact" className="btn btn--primary">Get in touch <ArrowRight width={18} height={18} /></Link>
        </div>
      </div>

      <div className="wrap">
        <ul className="values">
          {values.map((x, i) => (
            <li key={x.k} data-aos="fade-up" data-aos-delay={i * 100}>
              <span className="mono">0{i + 1}</span>
              <h3>{x.k}</h3>
              <p>{x.v}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default About;
