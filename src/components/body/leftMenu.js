import React from "react";

import { useSelector } from "react-redux";
import { selectUser } from "../../reducers/userSlice";

import profile from "..//../media/Icon 24px/profile.png";
import Mail from "..//../media/Icon 24px/Mail.png";
import friend from "..//../media/Icon 24px/friend.png";
import bookmark from "..//../media/Icon 24px/bookmark.png";
import list from "..//../media/Icon 24px/list.png";
import rub from "..//../media/Icon 24px/rub.png";
import Ellipse83 from "..//../media/Ellipse83.png";

export default function LeftMenu() {
  const stateUser = useSelector(selectUser);
  return (
    <div className="body__leftMenu body__leftMenu_MenuText">
      <div className="body__leftMenu_MenuItem body__leftMenu_ActionText">
        <img src={profile} alt="profile" />
        Профиль
      </div>
      <div className="body__leftMenu_MenuItem">
        <img src={Mail} alt="Mail" />
        Сообщения <div className="body__leftMenu_notification">{stateUser.newMessage}</div>
      </div>
      <div className="body__leftMenu_MenuItem">
        <img src={friend} alt="friends" />
        Друзья <div className="body__leftMenu_notification">{stateUser.newFriendRequests}</div>
      </div>
      <div className="body__leftMenu_MenuItem">
        <img src={bookmark} alt="Articles" />
        Статьи
      </div>
      <div className="body__leftMenu_MenuItem">
        <img src={list} alt="Passed tests" />
        Пройденные тесты
      </div>
      <div className="body__leftMenu_MenuItem">
        <img src={rub} alt="Payment history" />
        История оплат
      </div>
      <hr className="body__leftMenu_hr" />
      <div className="body__leftMenu_team">
        <div className="body__leftMenu_teamLogo">
          <img src={Ellipse83} alt="Team logo" />
          <div>
            <div className="body__leftMenu_teamName">МСК Вятичи</div>
            <div className="body__leftMenu_teamScores">883 балла</div>
          </div>
        </div>
      </div>
      <div className="body__leftMenu_clubDiv">
        Вы гость клуба
        <div className="body__leftMenu_toClub">
          <a>Как попасть в клуб?</a>
        </div>
        <div className="body__leftMenu_rulesClub">
          <a>Правила клуба</a>
        </div>
      </div>
    </div>
  );
}
