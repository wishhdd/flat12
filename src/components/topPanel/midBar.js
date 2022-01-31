import React from "react";

import { useSelector } from "react-redux";

import { selectUser } from "../../reducers/userSlice";

import black_privatka_logo_text from "..//..//media/black_privatka_logo_text.svg";
import notification from "..//..//media/Icon 24px/notification.png";
import Ellipse85 from "..//..//media/Ellipse85.png";

export default function MidBar() {
  const stateUser = useSelector(selectUser);

  return (
    <div className="TopPanel__MidBar">
      <div className="TopPanel__MidBar_menu">
        <img src={black_privatka_logo_text} alt="privatka logo" className="TopPanel__MidBar_logo" />
        <a>МЕРОПРИЯТИЯ</a>
        <a>СЕРВИСЫ</a>
        <a>О КЛУБЕ</a>
        <a>СОСТАВ КЛУБА</a>
        <a>КАК ПОПАСТЬ В КЛУБ</a>
      </div>
      <div className="TopPanel__MidBar_notification">
        <div className="TopPanel__MidBar_notificationBell">
          <img src={notification} alt="notification" />
          <div className="TopPanel__MidBar_notificationQuantity">{stateUser.notification}</div>
        </div>
        <img className="TopPanel__MidBar_avatar" src={Ellipse85} alt="user icon" />
      </div>
    </div>
  );
}
