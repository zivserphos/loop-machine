import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faCube } from "@fortawesome/free-solid-svg-icons";
import "./cube.scss";
import ChannelChunk from "./Channel-Chunk";

const Cube = function ({ color }: { color: string }) {
  const arr = [...Array(8)].map((_, i) => i);
  return (
    <Row
      className="justify-content-md-center cube"
      style={{ backgroundColor: color }}
    >
      <Col className="col1" xs={2} sm={2} md={2} lg={2}>
        {/* <FontAwesomeIcon icon={faMicrophone} className="microphone" /> */}
        <FontAwesomeIcon icon={faCube} className="cubelogo" />
        {`${color} cube`}
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} className="col2">
        2 of 3 (wider)
      </Col>
      {arr.map((number) => (
        <ChannelChunk index={number} />
      ))}
    </Row>
  );
};

export default Cube;
