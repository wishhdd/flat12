import React from "react";

import flat12 from "..//../media/flat12.png";

export default function BottomPanel__lowerBar() {
  return (
    <div>
      <hr />
      <span>Copyright © 2021</span>
      <span>All Rights Reserved</span>
      <span>
        <a>Политика конфеденциальности</a>
      </span>
      <div>
        Made by
        <img src={flat12} alt="flat12" />
      </div>
    </div>
  );
}
