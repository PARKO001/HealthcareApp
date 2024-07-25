import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from '../components/card';

const Home: React.FC = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h3>Patient Dashboard</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            heading="Card Title 1"
            text="This is the text area for card 1. It has some interesting content."
            imageSrc="https://via.placeholder.com/150"
          />
        </Col>
        <Col>
          <Card
            heading="Card Title 1"
            text="This is the text area for card 1. It has some interesting content."
            imageSrc="https://via.placeholder.com/150"
          />
        </Col>
        <Col>
          <Card
            heading="Card Title 1"
            text="This is the text area for card 1. It has some interesting content."
            imageSrc="https://via.placeholder.com/150"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            heading="Card Title 1"
            text="This is the text area for card 1. It has some interesting content."
            imageSrc="https://via.placeholder.com/150"
          />
        </Col>
        <Col>
          <Card
            heading="Card Title 1"
            text="This is the text area for card 1. It has some interesting content."
            imageSrc="https://via.placeholder.com/150"
          />
        </Col>
        <Col>
          <Card
            heading="Card Title 1"
            text="This is the text area for card 1. It has some interesting content."
            imageSrc="https://via.placeholder.com/150"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;