import * as songTypes from "./song-types";

export const updateSong = (song: Song) => ({
  type: songTypes.UPDATE_SONG,
  payload: {
    song,
  },
});

export const updateTime = (seconds: number) => ({
  type: songTypes.UPDATE_SONG,
  payload: {
    seconds,
  },
});

export const updateCursor = (cursourMarginLeft: number) => ({
  type: songTypes.UPDATE_CURSOR,
  payload: {
    cursourMarginLeft,
  },
});
