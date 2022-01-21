import songsDB from "../../../utils/songs";

const updateSong = (song: Song, state: SongState): SongState => {
  const updatedIndex = songsDB.findIndex(
    (oneSong) => oneSong.name === song.name
  );
  return { ...state, songIndex: updatedIndex, song };
};

const updateTime = (seconds: number, state: SongState): SongState => {
  const updatedCursor = 51.3 + (5 / 24) * seconds;
  return { ...state, seconds, cursorMarginLeft: updatedCursor };
};

const updateCursor = (updatedCursor: number, state: SongState): SongState => {
  const seconds = (updatedCursor - 51.3) / (5 / 24);
  return { ...state, seconds, cursorMarginLeft: updatedCursor };
};

export default { updateCursor, updateTime, updateSong };
