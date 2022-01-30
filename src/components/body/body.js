import React from "react";

import RightMenu from "./rightMenu";
import Center from "./centre";
import LeftMenu from "./leftMenu";

export default function Body() {
  return (
    <div className="body">
      <LeftMenu />
      <Center />
      <RightMenu />
    </div>
  );
}
