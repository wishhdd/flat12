import React from "react";

import WhatsApp from "..//../media/WhatsApp.png";
import vk from "..//../media/vk.png";
import facebook from "..//../media/facebook.png";
import youtube from "..//../media/Youtube.png";
import Telegram from "..//../media/Telegram.png";

export default function RightMenu() {
  return (
    <div className="bottomPanel__rightMenu">
      <div>
        <a href="tel:8(800)300-25-25">8 (800) 300–25–25</a>
      </div>
      <div>
        <a href="mailto:privatka.club@gmail.com"> privatka.club@gmail.com</a>
      </div>

      <div className="bottomPanel__rightMenu_contacts">
        <a href="https://wa.me/+78003002525" target="_blank">
          <img src={WhatsApp} alt="WhatsApp" />
        </a>

        <a href="https://www.vk.com" target="_blank">
          <img src={vk} alt="vk" />
        </a>

        <a href="https://www.facebook.com" target="_blank">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://youtube.ru" target="_blank">
          <img src={youtube} alt="youtube" />
        </a>
        <a href="https://t.me/+78003002525" target="_blank">
          <img src={Telegram} alt="Telegram" />
        </a>
      </div>
    </div>
  );
}
