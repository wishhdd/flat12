import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { saveStateLocalStorage, selectUser } from "../../reducers/userSlice";

import arrowBack from "..//..//media/Icon 24px/arrow-back.png";
import History from "..//..//media/Icon 16px/History.png";
import ChevronUp from "..//..//media/Icon 16px/Chevron up.png";
import Chevron from "..//..//media/Icon 16px/Chevron.png";

export default function BodyCenter() {
  const dispatch = useDispatch();
  const stateUser = useSelector(selectUser);

  const [userInfo, setUserInfo] = useState(stateUser.user);
  const [inputCallSign, setInputCallSign] = useState(
    userInfo.callSign[userInfo.callSign.length - 1]
  );
  const [save, setSave] = useState();

  const loadStateLocalStorage = () => {
    let loadStore = JSON.parse(localStorage.getItem("privatka_user"));
    if (loadStore) {
      loadStore = loadStore.user;
      setUserInfo(loadStore);
      setInputCallSign(loadStore.callSign[loadStore.callSign.length - 1]);
    }
  };

  useEffect(() => {
    loadStateLocalStorage();
  }, []);

  useEffect(() => {
    dispatch(saveStateLocalStorage(userInfo));
    setSave(false);
  }, [save]);

  const saveSate = () => {
    if (userInfo.callSign[userInfo.callSign.length - 1] !== inputCallSign) {
      setUserInfo({ ...userInfo, callSign: [...userInfo.callSign, inputCallSign] });
    }
    setSave(true);
  };

  return (
    <div className="body__centre">
      <div className="body__centre_mainTitle">
        <button className="body__centre_backButton">
          <img src={arrowBack} alt="back" />
        </button>
        Редактирование профиля
      </div>
      <div className="body__centre_title">Основная информация</div>
      <div className="body__centre_grid">
        <div className="body__centre_inputBlock body__centre_callSign">
          <div className="body__centre_inputBlockTitle">ПОЗЫВНОЙ</div>
          <input
            className="body__centre_input"
            value={inputCallSign ? inputCallSign : ""}
            onChange={(event) => setInputCallSign(event.target.value)}
          />
          <button className="body__centre_callSignHistoryButton">
            <img
              src={History}
              alt="call sign history"
              className="body__centre_callSignHistory_img"
            />
            ИСТОРИЯ ПОЗЫВНЫХ
          </button>
        </div>
        <div className="body__centre_inputBlock body__centre_eMail">
          <div className="body__centre_inputBlockTitle">E-MAIL</div>
          <input
            className="body__centre_input"
            value={userInfo.eMail}
            onChange={(event) => setUserInfo({ ...userInfo, eMail: event.target.value })}
          />
        </div>
        <div className="body__centre_inputBlock body__centre_firstName">
          <div className="body__centre_inputBlockTitle">ИМЯ</div>
          <input
            className="body__centre_input"
            value={userInfo.firstName}
            onChange={(event) => setUserInfo({ ...userInfo, firstName: event.target.value })}
          />
        </div>
        <div className="body__centre_inputBlock body__centre_lastName">
          <div className="body__centre_inputBlockTitle">ФАМИЛИЯ</div>
          <input
            className="body__centre_input"
            value={userInfo.lastName}
            onChange={(event) => setUserInfo({ ...userInfo, lastName: event.target.value })}
          />
        </div>
        <div className="body__centre_inputBlock body__centre_birthdate">
          <div className="body__centre_inputBlockTitle">ДАТА РОЖДЕНИЯ</div>
          <input
            className="body__centre_input"
            value={userInfo.birthdate}
            onChange={(event) => setUserInfo({ ...userInfo, birthdate: event.target.value })}
            type="date"
            id="date birthday"
          />
          <label htmlFor="date birthday">
            <img src={ChevronUp} alt="Chevron Up" />
          </label>
        </div>
        <div className="body__centre_inputBlock body__centre_city">
          <div className="body__centre_inputBlockTitle">ГОРОД</div>
          <input
            className="body__centre_input"
            value={userInfo.city}
            onChange={(event) => setUserInfo({ ...userInfo, city: event.target.value })}
          />
          <img src={Chevron} alt="Chevron" />
        </div>
        <button className="body__centre_saveButton" onClick={saveSate}>
          СОХРАНИТЬ
        </button>
      </div>
    </div>
  );
}
