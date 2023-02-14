import "./App.css";
import Banner from "./Banner.js"
import CardNews from "./CardNews";

function App() {
  return (
    <div className="App">

      <Banner />

      <br/><br/><br/><br/>
      {/*아래는 네비게이션바*/}
      {/* 메인페이지 슬라이더*/}
      {/* 메인페이지*/}
      {/* 캘린더*/}
      {/* 공지*/}
      {/* 카드뉴스*/}
      <div>카드뉴스</div>
      <CardNews />

      {/*  버튼    */}
      {/* 지원하기*/}
      {/* 하단 상세페이지*/}
    </div>
  );
}

export default App;
