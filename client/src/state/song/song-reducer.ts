import * as actionTypes from "./song-types";
import { updateCursor, updateTime, updateSong } from "./song-actions";
import songsDB from "../../utils/songs";

const INITIAL_STATE: SongState = {
  song: songsDB[0],
  songIndex: 0,
  seconds: 0,
  cursorMarginLeft: 45,
};
