import "./App.css";
import Banner from "./Banner.js";
import MainPage from "./MainPage.js";
import CardNews from "./CardNews";
import Calender from "./Calender";
import Footer from "./Footer";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function App() {
  return (
    <div className="App">
      <Banner />
      {/*아래는 네비게이션바*/}
      {/* 메인페이지 슬라이더*/}
      <br />
      <br />
      <br />
      <MainPage />
      {/* 메인페이지*/}
      {/* 캘린더 & 공지 */}
      <Calender />
      {/* 카드뉴스*/}
      {/* <CardNews />*/}
      <CardNews slides={SLIDES} options={OPTIONS} />
      {/*  버튼    */}
      {/* 지원하기*/}
      <div>지원하기</div>
      {/* 하단 상세페이지*/}

      <div>지원하기</div>
    </div>
  );
}

export default App;
