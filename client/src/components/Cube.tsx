import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faCube } from "@fortawesome/free-solid-svg-icons";
import "./cube.scss";
import ChannelChunk from "./Channel-Chunk";
import durationDisplay from "../utils/durationDisplay";

const Cube = function ({ song }: { song: Song }) {
  const arr = [...Array(8)].map((_, i) => i);
  return (
    <Row
      className="justify-content-md-center cube"
      style={{ backgroundColor: song.color }}
    >
      <Col className="col1" xs={2} sm={2} md={2} lg={2}>
        {/* <FontAwesomeIcon icon={faMicrophone} className="microphone" /> */}
        <FontAwesomeIcon icon={faCube} className="cubelogo" />
        {`${song.name}`}
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} className="col2">
        {`${song.band},   duration:  ${durationDisplay(song.duration)}`}
      </Col>
      {arr.map((number) => (
        <ChannelChunk index={number} />
      ))}
    </Row>
  );
};

export default Cube;
