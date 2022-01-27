import React from "react";
import TopPanel__UpBar from "./topPanel__upBar";
import TopPanel__MidBar from "./topPanel__midBar";

export default function TopPanel() {
  return (
    <div className="topPanel">
      <TopPanel__UpBar />
      <TopPanel__MidBar />
    </div>
  );
}
