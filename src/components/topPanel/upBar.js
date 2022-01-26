import React from "react";

import Arrow from "..//..//media/Icon 16px/Arrow.png";

export default function UpBar() {
  return (
    <div>
      <nav>
        <a>НОВОСТИ</a>
        <a>ОТЗЫВЫ</a>
        <a>БЛОГ</a>
        <a>БАЗА ЗНАНИЙ</a>
        <a>ПРАВИЛА</a>
        <a>ОПЛАТА</a>
        <a>СИСТЕМА БАЛЛОВ</a>
        <a>FAQ</a>
        <a>КОНТАКТЫ</a>
      </nav>
      <div>
        <a>VLONTATE</a>
        <img src={Arrow} alt="Arrow" />
        <a>INSTAGRAM</a>
        <img src={Arrow} alt="Arrow" />
        <a>YOUTUBE</a>
        <img src={Arrow} alt="Arrow" />
      </div>
    </div>
  );
}
