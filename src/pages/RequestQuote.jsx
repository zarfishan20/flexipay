
import  { useRef, useState } from 'react';
import { Container, Form, Button, Alert,Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';



const RequestQuote = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState(null); // For feedback after form submission

  // Handle form submission
  const sendEmail = async (e) => {
    e.preventDefault(); 

    try {
      // Sending email using EmailJS
      await emailjs.sendForm(
        'service_wzsvcuq', 
        'template_1b7o776', 
        formRef.current, 
        'Vvqims1TIdWXHU3s7'
      );

      // On success
      setFormStatus({
         type: 'success', 
         message: 'Your request has been submitted successfully!' 
        });
    } catch (error) {
      // On error
      setFormStatus({ 
        type: 'error', 
        message: 'There was an issue submitting your request. Please try again later.'
       });
    }

    // Reset form after submission
    formRef.current.reset();
  };

  return (
<>
<Helmet>
  <title>Request a Quote | FlexiPay</title>
  <meta name="description" content="Request a personalized quote for your business’s bookkeeping and payroll needs with FlexiPay." />
  <meta name="keywords" content="get a quote, bookkeeping quote, payroll pricing, FlexiPay estimate, accounting, HMRC" />
  <link rel="canonical" href="https://flexipaysystems.com/requestquote" />
</Helmet>



<Container id="quote" className="py-5 " data-aos="fade-up">
<h2 className="text-center mb-4">Request a Quote</h2>

{/* Show success or error message */}
{formStatus && (
        <Alert variant={formStatus.type === 'success' ? 'success' : 'danger'}>
          {formStatus.message}
        </Alert>
      )}

<Form ref={formRef} onSubmit={sendEmail}>
<input type="hidden" name="date" value={new Date().toLocaleString()} />

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name*</Form.Label>
              <Form.Control type="text" name="name" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Company*</Form.Label>
              <Form.Control type="text" name="company" required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control type="tel" name="phone" required placeholder="Tel" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Profession</Form.Label>
              <Form.Control type="text" name="profession" placeholder="Trade/Profession" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Town/City</Form.Label>
              <Form.Control type="text" name="town" placeholder="Town/City" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Years Trading</Form.Label>
              <Form.Control type="number" name="yearsTrading" placeholder="e.g. 5" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Approximate Turnover</Form.Label>
              <Form.Control type="number" name="turnover" placeholder="e.g. 100000" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Number of Employees</Form.Label>
              <Form.Control type="number" name="employees" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Accounting System Used</Form.Label>
          <Form.Control type="text" name="accountingSystem" placeholder="e.g. QuickBooks" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Services Required</Form.Label>
          <Form.Control type="text" name="servicesRequired" placeholder="e.g. Payroll, Bookkeeping" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Financial Year End</Form.Label>
          <Form.Control type="text" name="financialYearEnd" placeholder="e.g. 31 March" />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Legal Status of Business</Form.Label>
              <Form.Select name="legalStatus" required>
                <option value="">Select...</option>
                <option value="Sole Trader">Sole Trader</option>
                <option value="Partnership">Partnership</option>
                <option value="Limited Company">Limited Company</option>
                <option value="Limited Liability Partnership">Limited Liability Partnership</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Are you VAT Registered?</Form.Label>
              <Form.Select name="vatRegistered" required>
                <option value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Additional Comments (optional)</Form.Label>
          <Form.Control as="textarea" name="comments" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            name="privacyPolicy"
            label="By submitting this form you agree to our privacy policy."
            required
          />
        </Form.Group>

        <Button type="submit" className="custom-btn-primary">Submit</Button>
      </Form>
</Container>
</>
);
};

export default RequestQuote;
