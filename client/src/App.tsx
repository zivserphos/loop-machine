import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import GridToolBar from "./components/GridToolbar";
import Cube from "./components/Cube";
import songs from "./utils/songs";

const App = function () {
  const state = useSelector((songState: SongState) => songState);
  return (
    <div>
      <GridToolBar />
      <span
        style={{
          marginLeft: `${state.cursorMarginLeft}vw`,
          borderLeft: "5px solid black",
          height: "100vh",
          position: "absolute",
        }}
      />
      <Container fluid style={{ marginLeft: "1rem" }}>
        {songs.map((song) => (
          <Cube song={song} />
        ))}
      </Container>
    </div>
  );
};
export default App;
