import React from "react";
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
  return (
    <div className="grid-tool-bar">
      <span>
        <button type="button">priview</button>
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
        <button type="button">
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
        <input type="number" />
      </span>
      <span>
        <button type="button">Local</button>
      </span>
    </div>
  );
};

export default GridToolBar;
