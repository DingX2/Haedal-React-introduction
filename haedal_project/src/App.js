import "./App.css";
import React from "react";

//npm i react react-dom @trendyol-js/react-carousel --save
import ReactDOM from "react-dom";
import { Carousel } from "@trendyol-js/react-carousel";
import { Item } from "./YourItem";

function App() {
  console.log("해당 부분이 제일 먼저 호출이 됩니다.");

  ReactDOM.render(
    <Carousel>
      <img src={"/img/카드들.png"} className="image-wrap" />
      <img src={"/img/카드들.png"} className="image-wrap" />
    </Carousel>,
    document.getElementById("root")
  );

  return (
    <div class="wrap">
      {" "}
      {/* 배너표시영역 */}
      <div class="rolling-list">
        {" "}
        {/* 원본배너 */}
        <ul>
          <li>
            <img src={"/img/카드들.png"} className="image-wrap" />
            <div class="desc">
              <strong>First Banner</strong>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                Neque cumque ratione provident nulla veniam nihil quaerat, illum
                officiis hic.
                <br />
                Laborum in eos possimus, quo ullam nobis nam nemo fuga ipsam?
              </span>
            </div>
          </li>
          <li>
            <img src={"/img/카드들.png"} className="image-wrap" />
            <div class="desc">
              <strong>Second Banner</strong>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                Neque cumque ratione provident nulla veniam nihil quaerat, illum
                officiis hic.
                <br />
                Laborum in eos possimus, quo ullam nobis nam nemo fuga ipsam?
              </span>
            </div>
          </li>
          <li>
            <img src={"/img/카드들.png"} className="image-wrap" />
            <div class="desc">
              <strong>Third Banner</strong>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                Neque cumque ratione provident nulla veniam nihil quaerat, illum
                officiis hic.
                <br />
                Laborum in eos possimus, quo ullam nobis nam nemo fuga ipsam?
              </span>
            </div>
          </li>
          <li>
            <div class="image-wrap">src={"/img/카드들.png"}</div>
            <div class="desc">
              <strong>Fourth Banner</strong>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                Neque cumque ratione provident nulla veniam nihil quaerat, illum
                officiis hic.
                <br />
                Laborum in eos possimus, quo ullam nobis nam nemo fuga ipsam?
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
  /*
  return (

    
    <div>
      여기서 수정해서 새로고침이 아니라 자동 저장을
      <img src={"/img/카드들.png"} className="image-wrap" />
      <MyComponent props="Hi" />
    </div>



  );*/
}

export default App;
