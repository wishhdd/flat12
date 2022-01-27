import React from "react";

import Body__RightMenu from "./body__rightMenu";
import Body__Centre from "./body__centre";
import Body__LeftMenu from "./body__leftMenu";

export default function Body() {
  return (
    <div className="body">
      <Body__LeftMenu />
      <Body__Centre />
      <Body__RightMenu />
    </div>
  );
}
