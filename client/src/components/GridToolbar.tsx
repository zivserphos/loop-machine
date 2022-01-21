/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStepBackward,
  faFastBackward,
  faPlay,
  faStepForward,
  faFastForward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import "./gridtoolbar.scss";
import durationDisplay from "../utils/durationDisplay";
import { updateTime } from "../state/song/song-actions";

updateTime(10);
// import durationDisplay from "../utils/durationDisplay";

const GridToolBar = function () {
  const dispatch = useDispatch();
  const { seconds } = useSelector((state: SongState) => state);
  const [timer, setTimer] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const interval = useRef<NodeJS.Timeout | null>(null);
  const startSong = () => {
    if (!isRunning) {
      setIsRunning(true);
      interval.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    dispatch(updateTime(timer));
  }, [dispatch, timer]);

  const stopSong = () => {
    clearInterval(interval.current!);
    setIsRunning(false);
  };

  const resetSong = () => setTimer(0);

  const go10SecBack = () => (seconds < 10 ? setTimer(0) : setTimer(timer - 10));

  const go10SecForward = () => setTimer(seconds + 10);

  return (
    <div className="grid-tool-bar">
      <span>
        <button type="button">preview</button>
      </span>
      <span>
        <button type="button" onClick={resetSong}>
          <FontAwesomeIcon icon={faFastBackward} />
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
        <button type="button" onClick={go10SecForward}>
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
        <div>{durationDisplay(timer)}</div>
      </span>

      <span>
        <button type="button" style={{ width: "85vw" }}>
          GroundBtl(Ground)
        </button>
      </span>
    </div>
  );
};

export default GridToolBar;

// const updateSeconds = ({ target }: { target: HTMLInputElement }) =>
//   setSeconds(Number(target.value));