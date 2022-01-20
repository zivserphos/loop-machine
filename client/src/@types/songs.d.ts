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
