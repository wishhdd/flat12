import React from "react";

import LeftMenu from "./leftMenu";
import RightMenu from "./rightMenu";
import Center from "./center";
import Footer from "./footer";

export default function BottomPanel() {
  return (
    <div className="bottomPanel">
      <LeftMenu />
      <Center />
      <RightMenu />
      <Footer />
    </div>
  );
}
