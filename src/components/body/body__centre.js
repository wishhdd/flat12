import React from "react";
import arrowBack from "..//..//media/Icon 24px/arrow-back.png";
import History from "..//..//media/Icon 16px/History.png";
import ChevronUp from "..//..//media/Icon 16px/Chevron up.png";
import Chevron from "..//..//media/Icon 16px/Chevron.png";

export default function Body__Centre() {
  return (
    <div className="body__centre">
      <img src={arrowBack} alt="back" /> Редактирование профиля
      <div>Основная информация</div>
      <div>
        ПОЗЫВНОЙ
        <input />
        <hr />
        <div>
          <img src={History} alt="call sign history" />
          ИСТОРИЯ ПОЗЫВНЫХ
        </div>
      </div>
      <div>
        E-MAIL
        <input />
        <hr />
      </div>
      <div>
        ИМЯ
        <input />
        <hr />
      </div>
      <div>
        ФАМИЛИЯ
        <input />
        <hr />
      </div>
      <div>
        ДАТА РОЖДЕНИЯ
        <input type="date" id="date birthday" />
        <label htmlFor="date birthday">
          <img src={ChevronUp} alt="Chevron Up" />
        </label>
        <hr />
      </div>
      <div>
        <input />
        <img src={Chevron} alt="Chevron" />
        <hr />
      </div>
      <button> СОХРАНИТЬ</button>
    </div>
  );
}
