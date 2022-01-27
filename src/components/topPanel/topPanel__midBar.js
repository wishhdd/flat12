import React from "react";

import black_privatka_logo_text from "..//..//media/black_privatka_logo_text.png";
import Chevron from "..//..//media/Icon 16px/Chevron.png";
import notification from "..//..//media/Icon 24px/notification.png";
import Ellipse85 from "..//..//media/Ellipse85.png";

export default function TopPanel__MidBar() {
  return (
    <div>
      <img src={black_privatka_logo_text} alt="privatka logo" />
      <a>МЕРОПРИЯТИЯ</a>
      <a>СЕРВИС</a>
      <img src={Chevron} alt="down arrow" />
      <a>О КЛУБЕ</a>
      <a>СОСТАВ КЛУБА</a>
      <a>КАК ПОПАСТЬ В КЛУБ</a>
      <div>
        <img src={notification} alt="down arrow" />
        <span>{2 + 2}</span>
        <img src={Ellipse85} alt="user icon" />
      </div>
    </div>
  );
}
