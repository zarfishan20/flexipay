import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { ArrowRight, Check } from '../components/Icons';

const RequestQuote = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setFormStatus(null);
    formRef.current.elements.date.value = new Date().toLocaleString();
    try {
      await emailjs.sendForm(
        'service_64wx75k',
        'template_1b7o776',
        formRef.current,
        'Vvqims1TIdWXHU3s7'
      );
      setFormStatus({ type: 'success', message: 'Your request has been submitted successfully!' });
      formRef.current.reset();
    } catch (error) {
      setFormStatus({ type: 'error', message: 'There was an issue submitting your request. Please try again later.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Request a Quote | FlexiPay</title>
        <meta name="description" content="Request a personalized quote for your business’s bookkeeping and payroll needs with FlexiPay." />
        <meta name="keywords" content="get a quote, bookkeeping quote, payroll pricing, FlexiPay estimate, accounting, HMRC" />
        <link rel="canonical" href="https://flexipaysystems.com/requestquote" />
      </Helmet>

      <PageHero eyebrow="Request a quote" title={<>A clear price, <em>before</em> we start</>}>
        <p>Tell us a little about your business. The more detail you share, the more accurate your quote.</p>
      </PageHero>

      <section className="section" id="quote">
        <div className="wrap form-layout form-layout--quote">
          <aside className="quote-side" data-aos="fade-right">
            <h2>What happens next</h2>
            <ol className="steps">
              <li><span className="mono">01</span> We review your details, usually within one working day.</li>
              <li><span className="mono">02</span> We call to confirm anything we need to know.</li>
              <li><span className="mono">03</span> You receive a fixed quote, with no obligation.</li>
            </ol>
            <ul className="checklist checklist--compact">
              <li><Check width={16} height={16} /> Payroll</li>
              <li><Check width={16} height={16} /> Bookkeeping</li>
              <li><Check width={16} height={16} /> VAT returns</li>
            </ul>
          </aside>

          <form ref={formRef} onSubmit={sendEmail} className="form-card" data-aos="fade-up">
            {formStatus && (
              <div className={`alert alert--${formStatus.type}`} role="status">{formStatus.message}</div>
            )}
            <input type="hidden" name="date" defaultValue="" />

            <fieldset>
              <legend><span className="mono">A</span> About you</legend>
              <div className="field-grid">
                <label className="field"><span>Name*</span><input type="text" name="name" required /></label>
                <label className="field"><span>Company*</span><input type="text" name="company" required /></label>
                <label className="field"><span>Phone Number*</span><input type="tel" name="phone" required placeholder="Tel" /></label>
                <label className="field"><span>Email*</span><input type="email" name="email" required /></label>
              </div>
            </fieldset>

            <fieldset>
              <legend><span className="mono">B</span> Your business</legend>
              <div className="field-grid">
                <label className="field"><span>Profession</span><input type="text" name="profession" placeholder="Trade/Profession" /></label>
                <label className="field"><span>Town/City</span><input type="text" name="town" placeholder="Town/City" /></label>
              </div>
              <div className="field-grid field-grid--3">
                <label className="field"><span>Years Trading</span><input type="number" name="yearsTrading" placeholder="e.g. 5" min="0" /></label>
                <label className="field"><span>Approximate Turnover</span><input type="number" name="turnover" placeholder="e.g. 100000" min="0" /></label>
                <label className="field"><span>Number of Employees</span><input type="number" name="employees" min="0" /></label>
              </div>
              <div className="field-grid">
                <label className="field"><span>Legal Status of Business*</span>
                  <select name="legalStatus" required defaultValue="">
                    <option value="">Select…</option>
                    <option value="Sole Trader">Sole Trader</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Limited Company">Limited Company</option>
                    <option value="Limited Liability Partnership">Limited Liability Partnership</option>
                  </select>
                </label>
                <label className="field"><span>Are you VAT Registered?*</span>
                  <select name="vatRegistered" required defaultValue="">
                    <option value="">Select…</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend><span className="mono">C</span> What you need</legend>
              <div className="field-grid">
                <label className="field field--full"><span>Accounting System Used</span><input type="text" name="accountingSystem" placeholder="e.g. QuickBooks" /></label>
                <label className="field"><span>Services Required</span><input type="text" name="servicesRequired" placeholder="e.g. Payroll, Bookkeeping" /></label>
                <label className="field"><span>Financial Year End</span><input type="text" name="financialYearEnd" placeholder="e.g. 31 March" /></label>
                <label className="field field--full"><span>Additional Comments (optional)</span><textarea name="comments" rows={3} /></label>
              </div>
            </fieldset>

            <label className="check">
              <input type="checkbox" name="privacyPolicy" required />
              <span>By submitting this form you agree to our <Link to="/privacy-policy">privacy policy</Link>.</span>
            </label>

            <button type="submit" className="btn btn--primary btn--lg" disabled={sending}>
              {sending ? 'Submitting…' : <>Submit request <ArrowRight width={18} height={18} /></>}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default RequestQuote;
