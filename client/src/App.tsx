import React from "react";
import { Container } from "react-bootstrap";
import GridToolBar from "./components/GridToolbar";
import Cube from "./components/Cube";
import songs from "./utils/songs";

const App = function () {
  return (
    <div>
      <GridToolBar />
      <span
        style={{
          marginLeft: "51.2vw",
          borderLeft: "5px solid black",
          height: "102vh",
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
