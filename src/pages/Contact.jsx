import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';
import PageHero from '../components/PageHero';
import { MAP_SRC } from '../components/ContactForm';
import { Phone, Mail, Pin, Clock, ArrowRight } from '../components/Icons';

const Contact = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setFormStatus(null);
    try {
      await emailjs.sendForm(
        'service_64wx75k',
        'template_9j3u1rs',
        formRef.current,
        'Vvqims1TIdWXHU3s7'
      );
      setFormStatus({ type: 'success', message: 'Your message has been sent successfully!' });
      formRef.current.reset();
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | FlexiPay</title>
        <meta name="description" content="Get in touch with the FlexiPay team for enquiries about our bookkeeping and payroll services." />
        <meta name="keywords" content="contact FlexiPay, support, enquiry, business help, accountancy contact UK" />
        <link rel="canonical" href="https://flexipaysystems.com/contact" />
      </Helmet>

      <PageHero eyebrow="Contact" title={<>Get in <em>touch</em></>}>
        <p>We would love to hear from you. Fill out the form below and we’ll get back to you.</p>
      </PageHero>

      <section className="section" id="contact">
        <div className="wrap form-layout">
          <form ref={formRef} onSubmit={sendEmail} className="form-card" data-aos="fade-up">
            {formStatus && (
              <div className={`alert alert--${formStatus.type}`} role="status">{formStatus.message}</div>
            )}
            <div className="field-grid">
              <label className="field"><span>Name*</span><input type="text" name="name" required placeholder="Your full name" /></label>
              <label className="field"><span>Email*</span><input type="email" name="email" required placeholder="Your email address" /></label>
              <label className="field"><span>Phone*</span><input type="tel" name="phone" required placeholder="Your contact number" /></label>
              <label className="field"><span>Subject*</span><input type="text" name="subject" required placeholder="Subject or purpose" /></label>
              <label className="field field--full"><span>Message / Requirements*</span><textarea name="message" rows={5} required placeholder="Briefly describe your needs or request a consultation" /></label>
            </div>
            <button type="submit" className="btn btn--primary btn--lg" disabled={sending}>
              {sending ? 'Sending…' : <>Send message <ArrowRight width={18} height={18} /></>}
            </button>
          </form>

          <aside className="info-card" data-aos="fade-up" data-aos-delay="120">
            <h2>Contact information</h2>
            <ul className="contact-list contact-list--light">
              <li><span className="contact-list__icon"><Phone /></span><div><small>Phone</small><a href="tel:+447828693818">07828 693818</a></div></li>
              <li><span className="contact-list__icon"><Mail /></span><div><small>Email</small><a href="mailto:info@flexipaysystems.com">info@flexipaysystems.com</a></div></li>
              <li><span className="contact-list__icon"><Pin /></span><div><small>Address</small><span>4 Wangey Road, Chadwell Heath, London, RM6 4D</span></div></li>
              <li><span className="contact-list__icon"><Clock /></span><div><small>Hours</small><span>Mon – Fri · 10am – 6pm</span></div></li>
            </ul>
            <div className="map-frame map-frame--small">
              <iframe src={MAP_SRC} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="FlexiPay Location" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
