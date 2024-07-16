import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>This is the About page of our React app.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;