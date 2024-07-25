import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Cardiovascular from "./Cardiovascular";
import Temperature from "./Temperature";
import Respiratory from "./Respiratory";
import Activity from "./Activity";
import Card from "../components/card";

const DefaultView: React.FC = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Col>
            <h4>Systolic</h4>
            <img src="https://via.placeholder.com/300" alt="" />
            </Col>
          </Col>
          <Col>
            <h4>Diastolic</h4>
            <img src="https://via.placeholder.com/300" alt="" />
          </Col>
          <Col>
            <h4>Heart Rate</h4>
            <img src="https://via.placeholder.com/300" alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Temperature</h4>
            <img src="https://via.placeholder.com/300" alt="" />
            <h4>Respiration Rate</h4>
            <img src="https://via.placeholder.com/300" alt="" />
            <h4>SPO2</h4>
            <img src="https://via.placeholder.com/300" alt="" />
          </Col>
          <Col>
            <h4>titlebig</h4>
            <img src="https://via.placeholder.com/700" alt="" />
          </Col>
        </Row>
      </Container>
      <Cardiovascular />
      <Temperature />
      <Respiratory />
      <Activity />
    </div>
  );
};

export default DefaultView;
