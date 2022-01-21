/* eslint-disable react/require-default-props */
import React from "react";
import { Col } from "react-bootstrap";

declare interface ChannelChunkInt {
  index: number;
  leftSpace?: boolean;
}

const ChannelChunk = function (props: ChannelChunkInt) {
  const { index, leftSpace } = props;
  return !leftSpace ? (
    <Col xs={1} sm={1} md={1} lg={1} className="channel-chunk" style={{}}>
      {`0${index}:00-0${index + 1}:00`}
    </Col>
  ) : (
    <Col className="channel-chunk" style={{}}>
      Song Ends
    </Col>
  );
};

export default ChannelChunk;
