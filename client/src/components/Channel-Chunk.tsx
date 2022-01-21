import React from "react";
import { Col } from "react-bootstrap";

const ChannelChunk = function ({ index }: { index: number }) {
  return (
    <Col
      xs={1}
      sm={1}
      md={1}
      lg={1}
      className="channel-chunk"
      style={{ borderTop: "solid blue 7px" }}
    >
      {`${index + 1} of 8`}
    </Col>
  );
};

export default ChannelChunk;
