import React from 'react';
import { Container } from 'react-bootstrap';


const Terms = () => {
    return (
     <Container id="terms" className="py-5 text-center" data-aos="fade-up">
 <h1 className="terms-title">Terms & Conditions</h1>
            <p><strong>Effective Date:</strong> 11 May 2025</p>

            <h2 className="terms-subheading">1. Services Offered</h2>
            <p>
              FlexiPay provides bookkeeping, payroll, and related accountancy
              services to individuals and businesses.
            </p>

            <h2 className="terms-subheading">2. Use of Our Website</h2>
            <ul className="terms-list">
              <li>Do not misuse or attempt to gain unauthorized access to our systems.</li>
              <li>You must not use our content for illegal or unauthorized purposes.</li>
              <li>All content and intellectual property on the site belongs to FlexiPay.</li>
            </ul>

            <h2 className="terms-subheading">3. Payments & Billing</h2>
            <p>
              Invoices for our services are issued monthly/annually (as agreed), and
              payment is due upon receipt unless otherwise stated.
            </p>

            <h2 className="terms-subheading">4. Confidentiality</h2>
            <p>
              Both parties agree to keep all sensitive financial and business
              information confidential unless required by law.
            </p>

            <h2 className="terms-subheading">5. Limitation of Liability</h2>
            <p>
              While we strive for accuracy, FlexiPay is not liable for any loss or
              damages arising from the use of our services or website.
            </p>

            <h2 className="terms-subheading">6. Termination</h2>
            <p>
              Either party may terminate the service agreement with written notice,
              subject to agreed terms.
            </p>

            <h2 className="terms-subheading">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of <strong>United Kingdom</strong>.
            </p>

            <h2 className="terms-subheading">8. Contact</h2>
            <p>
              For questions regarding these terms, contact us at:<br />
              <strong>info@flexipaysystems.com</strong>
            </p>
      </Container>
    );
  };
  
  export default Terms;