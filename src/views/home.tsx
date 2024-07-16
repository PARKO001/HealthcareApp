import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Welcome to My React App</h1>
          <p>
            This is a simple home page created using React and TypeScript with React-Bootstrap.
          </p>
          <Button variant="primary">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;