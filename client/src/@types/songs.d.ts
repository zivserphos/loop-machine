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
}

declare interface SongAction {
  type: "UPDATE_SONG" | "UPDATE_TIME" | "UPDATE_CURSOR" | "MUTE_SONG";
  payload: {
    songName?: string;
    song?: Song;
    seconds?: number;
    updatedCursor?: number;
    mute?: boolean;
  };
}
