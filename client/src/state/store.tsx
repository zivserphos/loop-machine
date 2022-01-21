import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./song/song-reducer";

const store = configureStore({ reducer: songReducer });

export default store;
