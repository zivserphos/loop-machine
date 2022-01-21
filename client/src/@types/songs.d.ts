declare interface Song {
  duration: number;
  name: string;
  band: string;
  color: string;
  image: string;
}

declare interface SongState {
  song: Song;
  seconds: number;
  cursorMarginLeft: number;
  songIndex: number;
  loop?: boolean;
}

declare interface SongAction {
  type:
    | "UPDATE_SONG"
    | "UPDATE_TIME"
    | "UPDATE_CURSOR"
    | "MUTE_SONG"
    | "UPDATE_LOOP";
  payload: {
    songName?: string;
    song?: Song;
    seconds?: number;
    updatedCursor?: number;
    mute?: boolean;
  };
}
