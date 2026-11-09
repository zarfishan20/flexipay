import { useEffect, useState } from 'react';
import { Quote } from './Icons';

const quotes = [
  { q: 'Reliable and professional!', who: 'Sarah M.' },
  { q: 'Helped us streamline payroll.', who: 'John D.' },
  { q: 'Highly recommend FlexiPay.', who: 'Anita R.' },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % quotes.length), 5500);
    return () => clearInterval(t);
  }, [active]);

  return (
    <section className="section testimonials" id="testimonials">
      <div className="wrap testimonials__grid">
        <div data-aos="fade-up">
          <p className="eyebrow">Testimonials</p>
          <h2>What our clients <em>tell us</em></h2>
          <div className="testimonials__nav" role="tablist" aria-label="Testimonials">
            {quotes.map((q, i) => (
              <button key={q.who} role="tab" aria-selected={i === active} className={i === active ? 'is-active' : ''} onClick={() => setActive(i)}>
                <span className="mono">0{i + 1}</span> {q.who}
              </button>
            ))}
          </div>
        </div>

        <div className="quote-stage" data-aos="fade-up" data-aos-delay="100">
          <Quote width={64} height={64} className="quote-stage__mark" />
          {quotes.map((q, i) => (
            <figure key={q.who} className={`quote ${i === active ? 'is-active' : ''}`} aria-hidden={i !== active}>
              <blockquote>“{q.q}”</blockquote>
              <figcaption>— {q.who}</figcaption>
            </figure>
          ))}
          <div className="quote-stage__bar"><span key={active} /></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
