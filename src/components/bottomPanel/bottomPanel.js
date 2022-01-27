import React from "react";

import BottomPanel__leftMenu from "./bottomPanel__leftMenu";
import BottomPanel__rightMenu from "./bottomPanel__rightMenu";
import BottomPanel__center from "./bottomPanel__center";
import BottomPanel__lowerBar from "./bottomPanel__lowerBar";

export default function BottomPanel() {
  return (
    <div className="bottomPanel">
      <BottomPanel__leftMenu />
      <BottomPanel__center />
      <BottomPanel__rightMenu />
      <BottomPanel__lowerBar />
    </div>
  );
}
