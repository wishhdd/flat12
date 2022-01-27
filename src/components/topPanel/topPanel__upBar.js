import React from "react";

import Arrow from "..//..//media/Icon 16px/Arrow.png";

export default function TopPanel__UpBar() {
  return (
    <div className="TopPanel__UpBar">
      <div className="margin_righ30">НОВОСТИ</div>
      <div className="margin_righ30">ОТЗЫВЫ</div>
      <div className="margin_righ30">БЛОГ</div>
      <div className="margin_righ30">БАЗА ЗНАНИЙ</div>
      <div className="margin_righ30">ПРАВИЛА</div>
      <div className="margin_righ30">ОПЛАТА</div>
      <div className="margin_righ30">СИСТЕМА БАЛЛОВ</div>
      <div className="margin_righ30">FAQ</div>
      <div className="margin_righ30">КОНТАКТЫ</div>
      <a>VLONTATE</a>
      <img src={Arrow} alt="Arrow" />
      <a>INSTAGRAM</a>
      <img src={Arrow} alt="Arrow" />
      <a>YOUTUBE</a>
      <img src={Arrow} alt="Arrow" />
    </div>
  );
}
