import React from "react";

import empty_avatar from "..//..//media/empty_avatar.png";
import Edit from "..//../media/Icon 16px/Edit.png";

export default function RightMenu() {
  return (
    <div className="body__rightMenu">
      <img src={empty_avatar} alt="avatar" />
      <div className="body__rightMenu_limitation">Максимальный размер 300x300, вес менее 1 Мб</div>
      <button className="body__rightMenu_loadButton">ЗАГРУЗИТЬ</button>
      <div className="body__rightMenu_infoScores">
        <button className="body__rightMenu_infoScoresEditButton">
          <img src={Edit} alt="Edit" />
        </button>
        <div className="body__rightMenu_infoScoresText">
          Заполните все поля профиля и получите <span>+ {10 + 20} баллов</span>
        </div>
      </div>
    </div>
  );
}
