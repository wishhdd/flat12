import React from "react";

import Arrow from "..//..//media/Icon 16px/Arrow.png";

export default function TopPanel__UpBar() {
  return (
    <div className="TopPanel__UpBar">
      <div className="margin-right30px">НОВОСТИ</div>
      <div className="margin-right30px">ОТЗЫВЫ</div>
      <div className="margin-right30px">БЛОГ</div>
      <div className="margin-right30px">БАЗА ЗНАНИЙ</div>
      <div className="margin-right30px">ПРАВИЛА</div>
      <div className="margin-right30px">ОПЛАТА</div>
      <div className="margin-right30px">СИСТЕМА БАЛЛОВ</div>
      <div className="margin-right30px">FAQ</div>
      <div className="margin-right30px">КОНТАКТЫ</div>
      <div className="TopPanel__UpBar_link">
        <a>VKONTATE</a>
        <img src={Arrow} alt="Arrow" className="margin-left10px margin-right30px" />
        <a>INSTAGRAM</a>
        <img src={Arrow} alt="Arrow" className="margin-left10px margin-right30px" />
        <a>YOUTUBE</a>
        <img src={Arrow} alt="Arrow" className="margin-left10px" />
      </div>
    </div>
  );
}
