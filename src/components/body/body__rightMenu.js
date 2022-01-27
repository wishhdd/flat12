import React from "react";

import empty_avatar from "..//..//media/empty_avatar.png";
import Edit from "..//../media/Icon 16px/Edit.png";

export default function Body__RightMenu() {
  return (
    <div className="body__rightMenu">
      <img src={empty_avatar} alt="avatar" />
      Максимальный размер 300x300, вес менее 1Мб
      <button>ЗАГРУЗКА</button>
      <div>
        <img src={Edit} alt="Edit" />
        Заполните все поля профиля и получите +{10 + 20} баллов
      </div>
    </div>
  );
}
