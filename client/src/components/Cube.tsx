import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCube,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import "./cube.scss";
import ChannelChunk from "./Channel-Chunk";
import durationDisplay from "../utils/durationDisplay";

const Cube = function ({ song }: { song: Song }) {
  const [mute, setMute] = useState<boolean>(false);

  const setVolume = () => setMute(!mute);
  return (
    <Row
      className="justify-content-md-center cube"
      style={{ backgroundColor: song.color }}
    >
      <Col className="col1" xs={2} sm={2} md={2} lg={2}>
        <span>
          <FontAwesomeIcon icon={faCube} className="cubelogo" />
          {`${song.name}`}
        </span>
        <img src={song.image} alt={`${song.name}`} className="songImg" />
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} className="col2">
        {`${song.band},   duration:  ${durationDisplay(song.duration)}`}
        <FontAwesomeIcon
          icon={mute ? faVolumeMute : faVolumeUp}
          className={mute ? "mute" : "unmute"}
          onClick={setVolume}
        />
      </Col>
      {[...Array(Math.ceil(song.duration / 60))].map((_, i) => (
        <ChannelChunk index={i} />
      ))}
      <ChannelChunk index={3} leftSpace />
    </Row>
  );
};

export default Cube;
