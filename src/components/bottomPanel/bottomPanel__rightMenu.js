import React from "react";

import WhatsApp from "..//../media/WhatsApp.png";
import vk from "..//../media/vk.png";
import facebook from "..//../media/facebook.png";
import Telegram from "..//../media/Telegram.png";

export default function bottomPanel__rightMenu() {
  return (
    <div>
      <div>
        <a href="tel:8(800)300-25-25">8 (800) 300-25-25</a>
        <a href="mailto:privatka.club@gmail.com">privatka.club@gmail.com</a>
      </div>
      <div>
        <a href="https://wa.me/+78003002525" target="_blank">
          <img src={WhatsApp} alt="WhatsApp" />
        </a>
      </div>
      <div>
        <a href="https://www.vk.com" target="_blank">
          <img src={vk} alt="vk" />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com" target="_blank">
          <img src={facebook} alt="facebook" />
        </a>
      </div>
      <div>
        <a href="t.me/+78003002525" target="_blank">
          <img src={Telegram} alt="Telegram" />
        </a>
      </div>
    </div>
  );
}
