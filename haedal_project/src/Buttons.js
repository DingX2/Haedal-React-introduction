import React from "react";
import "./css/buttons.css";
import OneButton from "./OneButton";

const Buttons = () => (
  <div className="Button_viewer">
    <div className="Buttons">
      <OneButton
        id="Button1"
        content="| 아이디어톤"
        image="img/아이디어톤.png"
        url="https://www.naver.com"
      />
      <OneButton
        id="Button2"
        content="| 해커톤"
        image="img/해커톤.png"
        url="https://www.knu.ac.kr"
      />
      <OneButton
        id="Button3"
        content="| 트랙"
        image="img/트랙.png"
        url="https://kudos.knu.ac.kr"
      />
      <OneButton
        id="Button4"
        content="| 역대 부트캠프"
        image="img/역대부트캠프.png"
        url="https://dorm.knu.ac.kr"
      />
      <OneButton
        id="Button5"
        content="| 카드뉴스"
        image="img/카드뉴스.png"
        url="https://lms1.knu.ac.kr"
      />
      <OneButton
        id="Button6"
        content="| 클래스원"
        image="img/클래스원.png"
        url="https://knuin.knu.ac.kr"
      />
    </div>
  </div>
);

export default Buttons;
