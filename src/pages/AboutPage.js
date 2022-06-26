
import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import PartnersList from '../features/partners/PartnersList';

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current='About Us' />
      <Row className='row-content'>
        <Col sm='6'>
          <h3>Our Mission</h3>
          <p>
            We present a curated database of the best foods and culinary concepts worldwide. Our dining is meant to be an experience that exceeds others. Harvests from local farmers and markets, we take time to procure the most intimate and delicious dining experiences possible. Our chefs continue to design menus to excite, update, and expand your palette.
          </p>
        </Col>
        <Col sm='6'>
          <Card>
            <CardHeader className='bg-primary text-white'></CardHeader>
            <CardBody>
              <dl className='row'>
                <dt className='col-6'>Founded</dt>
                <dd className='col-6'>June 25, 2016</dd>
                <dt className='col-6'>No. of Dishes in 2022</dt>
                <dd className='col-6'>563</dd>
                <dt className='col-6'>No. of Reviews in 2022</dt>
                <dd className='col-6'>4388</dd>
                <dt className='col-6'>Employees</dt>
                <dd className='col-6'>42</dd>
              </dl>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className='bg-light mt-3'>
            <CardBody>
              <blockquote className='blockquote'>
                <p>I will follow the pleasures of my soul, and if those include good food, I will continue further.</p>
                <footer className='blockquote-footer'>
                  Danielle Tangrine,{' '}
                  <cite title='Source Title'>
                    "The Heart of Taste" - The Chief Wanderer,
                    1977
                  </cite></footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='row-content'>
        <Col xs='12'>
          <h3>Community Partners</h3>
        </Col>
        <PartnersList />
      </Row>
    </Container>
  );
};


export default AboutPage;