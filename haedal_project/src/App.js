import "./App.css";
import Banner from "./Banner.js";
import MainPage from "./MainPage.js";
import CardNews from "./CardNews";
import SwiperCards from './SwiperCards';

import "./css/base.css";
import "./css/sandbox.css";
import "./css/embla.css";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function App() {
  return (
    <>
      <Banner />
      <div className="App">
        {/*아래는 네비게이션바*/}
        {/* 메인페이지 슬라이더*/}
        <br/><br/><br/>
        <MainPage/>
        {/* 메인페이지*/}
        {/* 캘린더*/}
        {/* 공지*/}
        {/* 카드뉴스*/} 
        {/* <CardNews />*/}
        <SwiperCards />
        {/*  버튼    */}
        {/* 지원하기*/}
        {/* 하단 상세페이지*/}
      </div>
    </>
  );
}

export default App;