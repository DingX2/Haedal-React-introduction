import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CardNews from "./CardNews";
import Ex from "./ex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*아래는 네비게이션바*/}
    {/* 메인페이지 슬라이더*/}
    {/* 메인페이지*/}
    {/* 캘린더*/}
    {/* 공지*/}
    {/* 카드뉴스*/}
    카드뉴스
    <Ex />
    <CardNews />
    {/* 버튼*/}
    {/* 지원하기*/}
    {/* 하단 상세페이지*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
