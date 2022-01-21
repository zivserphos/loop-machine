import React from "react";
import { Col } from "react-bootstrap";

const ChannelChunk = function ({ index }: { index: number }) {
  return (
    <Col xs={1} sm={1} md={1} lg={1} className="channel-chunk" style={{}}>
      {`0${index}:00-0${index + 1}:00`}
    </Col>
  );
};

export default ChannelChunk;
