import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Banner from "./Banner.js";
import MainPage from "./MainPage.js";
import Calender from "./Calender";
import Footer from "./Footer";
import CardNews from "./CardNews";
import Apply from "./Apply";

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
      {/* 메인페이지*/}
      {/* 캘린더 & 공지 */}
      {/* 카드뉴스*/}
      {/*  버튼    */}
      {/* 지원하기*/}
      {/* 하단 상세페이지*/}
      <Footer />
    </div>
  );
}

export default App;
