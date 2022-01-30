import React from "react";

import Arrow from "..//..//media/Icon 16px/Arrow.png";

export default function UpBar() {
  return (
    <div className="TopPanel__UpBar">
      <div className="TopPanel__UpBar_localLink">
        <a>НОВОСТИ</a>
        <a>ОТЗЫВЫ</a>
        <a>БЛОГ</a>
        <a>БАЗА ЗНАНИЙ</a>
        <a>ПРАВИЛА</a>
        <a>ОПЛАТА</a>
        <a>СИСТЕМА БАЛЛОВ</a>
        <a>FAQ</a>
        <a>КОНТАКТЫ</a>
      </div>
      <div className="TopPanel__UpBar_link">
        <a>VKONTAKTE</a>
        <img src={Arrow} alt="Arrow" />
        <a>INSTAGRAM</a>
        <img src={Arrow} alt="Arrow" />
        <a>YOUTUBE</a>
        <img src={Arrow} alt="Arrow" />
      </div>
    </div>
  );
}
