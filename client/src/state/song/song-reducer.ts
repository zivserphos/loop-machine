/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
import * as actionTypes from "./song-types";
import songService from "./helpers/helpers";
import songsDB from "../../utils/songs";

const INITIAL_STATE: SongState = {
  song: songsDB[0],
  songIndex: 0,
  seconds: 0,
  cursorMarginLeft: 51.7,
  loop: false,
};

const songReducer = (state = INITIAL_STATE, action: SongAction): SongState => {
  switch (action.type) {
    case actionTypes.UPDATE_SONG:
      const { song } = action.payload;
      if (!song) return state;
      return songService.updateSong(song, state);

    case actionTypes.UPDATE_TIME:
      const { seconds } = action.payload;
      if (!seconds) return state;
      return songService.updateTime(seconds, state);
    case actionTypes.UPDATE_CURSOR:
      const { updatedCursor } = action.payload;
      if (!updatedCursor) return state;
      return songService.updateCursor(updatedCursor, state);
    case actionTypes.UPDATE_LOOP:
      return songService.updateLoop(state);
    default:
      return state;
  }
};
export default songReducer;
