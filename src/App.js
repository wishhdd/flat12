import "./App.css";

import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import TopPanel from "./components/topPanel/topPanel";
import Body from "./components/body/body";
import BottomPanel from "./components/bottomPanel/bottomPanel";

function App() {
  return (
    <Provider store={store}>
      <TopPanel />
      <Body />
      <BottomPanel />
    </Provider>
  );
}

export default App;
