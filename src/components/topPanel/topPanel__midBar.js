import React from "react";

import black_privatka_logo_text from "..//..//media/black_privatka_logo_text.png";
import Chevron from "..//..//media/Icon 16px/Chevron.png";
import notification from "..//..//media/Icon 24px/notification.png";
import Ellipse85 from "..//..//media/Ellipse85.png";

export default function TopPanel__MidBar() {
  return (
    <div className="TopPanel__MidBar">
      <img src={black_privatka_logo_text} alt="privatka logo" className="TopPanel__MidBar_logo" />
      <a className="TopPanel__MidBar_menu">МЕРОПРИЯТИЯ</a>
      <a>СЕРВИС</a>
      <img src={Chevron} alt="down arrow" className="TopPanel__MidBar_Chevron" />
      <a className="TopPanel__MidBar_menu">О КЛУБЕ</a>
      <a className="TopPanel__MidBar_menu">СОСТАВ КЛУБА</a>
      <a className="TopPanel__MidBar_menu">КАК ПОПАСТЬ В КЛУБ</a>
      <div className="TopPanel__MidBar_notification">
        <img src={notification} alt="down arrow" />
        <div>{2 + 2}</div>
        <img src={Ellipse85} alt="user icon" />
      </div>
    </div>
  );
}
