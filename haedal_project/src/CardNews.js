import "./CardNews.css";
import React from "react";

function CardNews() {
  // 롤링 배너 복제본 생성
  let roller = document.querySelector(".rolling-list");
  roller.id = "roller1"; // 아이디 부여

  let clone = roller.cloneNode(true);
  // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
  clone.id = "roller2";
  document.querySelector(".wrap").appendChild(clone); // wrap 하위 자식으로 부착

  document.querySelector("#roller1").style.left = "0px";
  document.querySelector("#roller2").style.left =
    document.querySelector(".rolling-list ul").offsetWidth + "px";
  // offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

  roller.classList.add("original");
  clone.classList.add("clone");
  return (
    <div className="App">
      <h1>
        카드뉴스
        <div class="wrap">
          {" "}
          {/* 배너표시영역 */}
          <div class="rolling-list">
            {" "}
            {/*  원본배너 */}
            <ul>
              <li>
                <div class="image-wrap">
                  {/* <img src="./img/카드들.png" alt="" /> */}
                </div>
                <div class="desc">
                  <strong>First Banner</strong>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br />
                    Neque cumque ratione provident nulla veniam nihil quaerat,
                    illum officiis hic.
                    <br />
                    Laborum in eos possimus, quo ullam nobis nam nemo fuga
                    ipsam?
                  </span>
                </div>
              </li>
              <li>
                <div class="image-wrap">
                  {/*<img src="./img/카드들2.png" alt="" />*/}
                </div>
                <div class="desc">
                  <strong>Second Banner</strong>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br />
                    Neque cumque ratione provident nulla veniam nihil quaerat,
                    illum officiis hic.
                    <br />
                    Laborum in eos possimus, quo ullam nobis nam nemo fuga
                    ipsam?
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default CardNews;
