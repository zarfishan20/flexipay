
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';




const ServicesPage = () => {
  return (
<>

<Helmet>
  <title>Our Services | FlexiPay</title>
  <meta name="description" content="Explore our professional bookkeeping, payroll, and financial management services designed for businesses." />
  <meta name="keywords" content="bookkeeping services, payroll management, accounting, FlexiPay services, financial servicecs, London accountants, East London accountants" />
  <link rel="canonical" href="https://flexipaysystems.com/services" />
</Helmet>


    <Container id="services" className="py-5 text-center" data-aos="fade-up">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {/* Service 1: Payroll Management */}
        <Col md={12}>
          <Card className="p-3 shadow-sm text-center hover-effect">
            <h5>Payroll Management</h5>
            <p>HMRC-compliant payroll processing for your team.</p>
            <ul className="text-start">
              <li>HMRC-compliant payroll processing (RTI)</li>
              <li>Salary, deductions, bonuses, benefits calculations</li>
              <li>Automated payslips</li>
              <li>Tax filings and year-end reports (P60s, P11Ds)</li>
              <li>Pension scheme management and auto-enrolment</li>
            </ul>
          </Card>
        </Col>

        {/* Service 2: Bookkeeping */}
        <Col md={12}>
          <Card className="p-3 shadow-sm text-center hover-effect">
            <h5>Bookkeeping</h5>
            <p>Accurate record-keeping, reconciliations, and reports.</p>
            <ul className="text-start">
              <li>Accurate record-keeping of income and expenses</li>
              <li>Bank reconciliations for accuracy</li>
              <li>Financial reports (Income Statement, Balance Sheet)</li>
              <li>VAT Returns preparation and filing</li>
              <li>Expense management and accounts payable/receivable</li>
            </ul>
          </Card>
        </Col>

      </Row>
    </Container>
    </>
  );
};

export default ServicesPage;
