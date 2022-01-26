import React from "react";

import profile from "..//../media/Icon 24px/profile.png";
import Mail from "..//../media/Icon 24px/Mail.png";
import friend from "..//../media/Icon 24px/friend.png";
import bookmark from "..//../media/Icon 24px/bookmark.png";
import list from "..//../media/Icon 24px/list.png";
import rub from "..//../media/Icon 24px/rub.png";
import Ellipse83 from "..//../media/Ellipse83.png";

export default function RightMenu() {
  return (
    <div>
      <div>
        <img src={profile} alt="profile" />
        Профиль
      </div>
      <div>
        <img src={Mail} alt="Mail" />
        Сообщения <span>{10 + 4}</span>
      </div>
      <div>
        <img src={friend} alt="friends" />
        Друзья <span>{2 + 2}</span>
      </div>
      <div>
        <img src={bookmark} alt="Articles" />
        Статьи
      </div>
      <div>
        <img src={list} alt="Passed tests" />
        Пройденные тесты
      </div>
      <div>
        <img src={rub} alt="Payment history" />
        История оплат
      </div>
      <hr />
      <div>
        <img src={Ellipse83} alt="Team logo" />
        <div>
          <div>МСК Вятич</div>
          <div>883 балла</div>
        </div>
      </div>
      <div>
        Вы гость клуба
        <a>Как попасть в клуб</a>
        <hr />
        <a>Правила клуба</a>
        <hr />
      </div>
    </div>
  );
}
