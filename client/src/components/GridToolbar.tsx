import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStepBackward,
  faFastBackward,
  faPlay,
  faStepForward,
  faFastForward,
} from "@fortawesome/free-solid-svg-icons";
import "./gridtoolbar.scss";

const GridToolBar = function () {
  const [seconds, setSeconds] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  // const [timeInSec, setTimeInSec] = useState<number>(0);
  const startSong = () => {
    console.log(seconds);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid-tool-bar">
      <span>
        <button type="button">preview</button>
      </span>
      <span>
        <button type="button">
          <FontAwesomeIcon icon={faFastBackward} />
        </button>
      </span>
      <span>
        <button type="button">
          <FontAwesomeIcon icon={faStepBackward} />
        </button>
      </span>
      <span>
        <button type="button" onClick={() => startSong()}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
      </span>
      <span>
        <button type="button">
          <FontAwesomeIcon icon={faStepForward} />
        </button>
      </span>
      <span>
        <button type="button">
          <FontAwesomeIcon icon={faFastForward} />
        </button>
      </span>
      <span>
        <button type="button">
          <b>| </b>
          <FontAwesomeIcon icon={faPlay} />
          <b> |</b>
        </button>
      </span>
      <span>
        <input type="number" min={0} key={seconds} defaultValue={seconds} />
      </span>
      <span>
        <button type="button">Local</button>
      </span>
      <span>
        <button type="button" style={{ width: "45vw" }}>
          GroundBtl(Ground)
        </button>
      </span>
    </div>
  );
};

export default GridToolBar;
