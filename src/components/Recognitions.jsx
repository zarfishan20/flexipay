import { Award } from './Icons';

const items = [
  { date: 'January 2022', title: 'Certified Business Consultant', text: 'Recognised for expertise and professionalism in consulting services.' },
  { date: 'June 2021', title: 'Top Consulting Firm of the Year', text: 'Awarded for exceptional contributions and strategic consulting solutions.' },
  { date: 'March 2020', title: 'Consulting Excellence Award', text: 'Acknowledged for outstanding performance in the consulting industry.' },
];

const Recognition = () => (
  <section className="section recognition" id="recognition">
    <div className="wrap recognition__grid">
      <div className="recognition__intro" data-aos="fade-right">
        <p className="eyebrow eyebrow--light">Recognised excellence</p>
        <h2>Recognitions &amp; <em>certifications</em></h2>
        <p>We’ve earned awards and accreditations that recognise our standards and our commitment to clients.</p>
        <div className="seal" aria-hidden="true">
          <svg viewBox="0 0 200 200">
            <defs><path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
            <text><textPath href="#seal-circle">ACCURATE · ON TIME · HMRC COMPLIANT · ACCURATE · ON TIME · </textPath></text>
          </svg>
          <Award width={40} height={40} />
        </div>
      </div>

      <ul className="ledger">
        {items.map((it, i) => (
          <li key={it.title} data-aos="fade-up" data-aos-delay={i * 100}>
            <span className="ledger__date mono">{it.date}</span>
            <div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
            <span className="ledger__idx mono">0{i + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Recognition;
