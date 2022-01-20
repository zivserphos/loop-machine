/* eslint-disable default-param-last */
import * as actionTypes from "./song-types";
import { updateCursor, updateTime, updateSong } from "./song-actions";
import songsDB from "../../utils/songs";

const INITIAL_STATE: SongState = {
  song: songsDB[0],
  songIndex: 0,
  seconds: 0,
  cursorMarginLeft: 0,
};

const songReducer = (state = INITIAL_STATE, action: SongAction) => {
  switch (action.type) {
    case actionTypes.UPDATE_SONG:
      break;
    case actionTypes.UPDATE_TIME:
      break;
    case actionTypes.UPDATE_CURSOR:
      break;
    default:
      break;
  }
};
