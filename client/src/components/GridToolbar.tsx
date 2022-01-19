/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStepBackward,
  faFastBackward,
  faPlay,
  faStepForward,
  faFastForward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import "./gridtoolbar.scss";
import durationDisplay from "../utils/durationDisplay";

const GridToolBar = function () {
  const [seconds, setSeconds] = useState<number>(0);
  // const [displayTime, setDisplayTime] = useState<string>("00:00");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const interval = useRef<NodeJS.Timeout | null>(null);
  const startSong = () => {
    if (!isRunning) {
      setIsRunning(true);
      interval.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopSong = () => {
    clearInterval(interval.current!);
    setIsRunning(false);
  };

  const resetSong = () => setSeconds(0);

  const go10SecBack = () =>
    seconds < 10 ? setSeconds(0) : setSeconds(seconds - 10);

  const go10SecForward = () => setSeconds(seconds + 10);

  const updateSeconds = ({ target }: { target: HTMLInputElement }) =>
    setSeconds(Number(target.value));

  return (
    <div className="grid-tool-bar">
      <span>
        <button type="button">preview</button>
      </span>
      <span>
        <button type="button">
          <FontAwesomeIcon icon={faFastBackward} onClick={resetSong} />
        </button>
      </span>
      <span>
        <button type="button" onClick={go10SecBack}>
          <FontAwesomeIcon icon={faStepBackward} />
        </button>
      </span>
      <span>
        <button type="button" onClick={startSong}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
      </span>
      <span>
        <button type="button" onClick={stopSong}>
          <FontAwesomeIcon icon={faPause} />
        </button>
      </span>
      <span>
        <button type="button">
          <FontAwesomeIcon icon={faStepForward} onClick={go10SecForward} />
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
        <input
          type="number"
          min={0}
          key={seconds}
          defaultValue={seconds}
          onChange={updateSeconds}
        />
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
