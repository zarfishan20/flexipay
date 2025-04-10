
import React, { useRef, useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const RequestQuote = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState(null); // For feedback after form submission

  // Handle form submission
  const sendEmail = async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(formRef.current);

    // Example of preparing email payload
    const emailPayload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      // Sending email using EmailJS
      await emailjs.sendForm('service_wzsvcuq', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID');

      // On success
      setFormStatus({ type: 'success', message: 'Your request has been submitted successfully!' });
    } catch (error) {
      // On error
      setFormStatus({ type: 'error', message: 'There was an issue submitting your request. Please try again later.' });
    }

    // Reset form after submission
    formRef.current.reset();
  };

  return (
<Container id="quote" className="py-5 text-center" data-aos="fade-up">
<h2>Request a Quote</h2>

{/* Show success or error message */}
{formStatus && (
        <Alert variant={formStatus.type === 'success' ? 'success' : 'danger'}>
          {formStatus.message}
        </Alert>
      )}

<Form ref={formRef} onSubmit={sendEmail}>
  <Form.Group controlId="name" className="mb-3">
    <Form.Label>Your Name</Form.Label>
    <Form.Control 
    type="text" 
    name="name" 
    placeholder="Enter your name" 
    required />
    </Form.Group>

  <Form.Group controlId="email" className="mb-3">
    <Form.Label>Your Email</Form.Label>
    <Form.Control 
    type="email" 
    name="email" 
    placeholder="Enter your email" 
    required />
    </Form.Group>

  <Form.Group controlId="message" className="mb-3">
    <Form.Label>Your Requirements</Form.Label>
    <Form.Control 
    as="textarea" 
    name="message"
     rows={3} 
     placeholder="Describe your requirements"
      required />
      </Form.Group>

  <Button type="submit" className="mt-3 custom-btn-primary">
    Submit
    </Button>
</Form>
</Container>

);
};

export default RequestQuote;
