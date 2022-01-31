import React from "react";
import { BrowserRouter } from "react-router-dom";

import TopPanel from "./components/topPanel/topPanel";
import Body from "./components/body/body";
import BottomPanel from "./components/bottomPanel/bottomPanel";

function App() {
  return (
    <BrowserRouter basename={"/Flat12"}>
      <TopPanel />
      <Body />
      <BottomPanel />
    </BrowserRouter>
  );
}

export default App;
