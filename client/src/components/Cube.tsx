import React from "react";
import { Row, Col } from "react-bootstrap";
import "./cube.scss";

const Cube = function ({ color }: { color: string }) {
  return (
    <Row
      className="justify-content-md-center cube"
      style={{ backgroundColor: color }}
    >
      <Col xs lg="2">
        1 of 3
      </Col>
      <Col md="auto">Variable width content</Col>
      <Col xs lg="2">
        3 of 3
      </Col>
    </Row>
  );
};

export default Cube;
