import React from "react";
import "./App.css";
import Html from "./component/html";
import Css from "./component/css";
import JavaScript from "./component/javascript";
import { Container } from "@mantine/core";

function App() {
  return (
    <Container my="md">
      <Html />
      <Css />
      <JavaScript />
    </Container>
  );
}

export default App;
