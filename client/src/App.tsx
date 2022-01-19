import React from "react";
import { Container } from "react-bootstrap";
import GridToolBar from "./components/GridToolbar";
import Cube from "./components/Cube";
import colors from "./utils/colors";

const App = function () {
  return (
    <div>
      <GridToolBar />
      <span style={{ borderLeft: "5px solid blue", height: "60vh" }}> </span>
      <Container fluid style={{ marginLeft: "1rem" }}>
        {colors.map((color) => (
          <Cube color={color} />
        ))}
      </Container>
    </div>
  );
};
export default App;
