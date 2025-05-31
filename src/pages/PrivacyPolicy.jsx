

import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import BackButton from "../components/BackButton";

const PrivacyPolicy = () => {
    return (

<>

<Helmet>
        <title>Privacy Policy | FlexiPay</title>
        <meta name="description" content="Learn how FlexiPay collects, stores, and protects your data. View our full privacy policy here." />
        <meta name="keywords" content="FlexiPay, privacy policy, data protection, bookkeeping, payroll" />
        <link rel="canonical" href="https://flexipaysystems.com/privacy-policy" />
      </Helmet>


    <Container id="privacy" className="py-5 text-center" data-aos="fade-up">
<BackButton />
<h1 className="privacy-title">Privacy Policy</h1>
            <p><strong>Effective Date:</strong> 11 May 2025</p>
            <p>
              At <strong>FlexiPay</strong>, your privacy is important to us. This Privacy Policy
              outlines how we collect, use, store, and protect your information
              when you use our services or visit our website.
            </p>

            <h2 className="privacy-subheading">1. Information We Collect</h2>
            <ul className="privacy-list">
              <li>Personal identification (Name, Email, Phone number)</li>
              <li>Business details (Company name, address, financial data)</li>
              <li>Communication records</li>
              <li>Website usage data via cookies and analytics tools</li>
            </ul>

            <h2 className="privacy-subheading">2. How We Use Your Information</h2>
            <ul className="privacy-list">
              <li>Provide and manage our bookkeeping and payroll services</li>
              <li>Communicate with you regarding your account or inquiries</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>

            <h2 className="privacy-subheading">3. Data Sharing & Security</h2>
            <p>
              We do <strong>not</strong> sell your personal data. We may share your information
              with trusted partners or legal authorities where necessary. Your
              data is stored securely with industry-standard protections in place.
            </p>

            <h2 className="privacy-subheading">4. Your Rights</h2>
            <ul className="privacy-list">
              <li>Access your data</li>
              <li>Request corrections</li>
              <li>Ask us to delete your data</li>
              <li>Withdraw consent for data use</li>
            </ul>
            <p>To exercise any of these rights, contact us at: <strong>info@flexipaysystems.com</strong></p>

            <h2 className="privacy-subheading">5. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience and
              collect anonymous analytics. You can manage cookie settings through
              your browser.
            </p>

            <h2 className="privacy-subheading">6. Contact Us</h2>
            <p>
              For any privacy-related questions, contact us at:<br />
              <strong>info@flexipaysystems.com</strong>
            </p>
      
      </Container>


      </>
    );
  };
  
  export default PrivacyPolicy;
  