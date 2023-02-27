import React from "react";
import "./css/Apply.css";
import { gsap } from "gsap";

document.querySelectorAll(".apply-button").forEach((button) => {
  let getVar = (variable) =>
    getComputedStyle(button).getPropertyValue(variable);

  //앞의 함수가 무조건 실행 되어야 함
  //complie 한번당/ 렌더링 당 한 사이트만 실행되는거 같음

  //const timer = setTimeout(() => console.log("Initial timeout!"), 1000);
  //
  button.addEventListener("click", (e) => {
    if (!button.classList.contains("active")) {
      button.classList.add("active");

      gsap.to(button, {
        keyframes: [
          {
            "--left-wing-first-x": 50,
            "--left-wing-first-y": 100,
            "--right-wing-second-x": 50,
            "--right-wing-second-y": 100,
            duration: 0.2,
            onComplete() {
              gsap.set(button, {
                "--left-wing-first-y": 0,
                "--left-wing-second-x": 40,
                "--left-wing-second-y": 100,
                "--left-wing-third-x": 0,
                "--left-wing-third-y": 100,
                "--left-body-third-x": 40,
                "--right-wing-first-x": 50,
                "--right-wing-first-y": 0,
                "--right-wing-second-x": 60,
                "--right-wing-second-y": 100,
                "--right-wing-third-x": 100,
                "--right-wing-third-y": 100,
                "--right-body-third-x": 60,
              });
            },
          },
          {
            "--left-wing-third-x": 20,
            "--left-wing-third-y": 90,
            "--left-wing-second-y": 90,
            "--left-body-third-y": 90,
            "--right-wing-third-x": 80,
            "--right-wing-third-y": 90,
            "--right-body-third-y": 90,
            "--right-wing-second-y": 90,
            duration: 0.2,
          },
          {
            "--rotate": 50,
            "--left-wing-third-y": 95,
            "--left-wing-third-x": 27,
            "--right-body-third-x": 45,
            "--right-wing-second-x": 45,
            "--right-wing-third-x": 60,
            "--right-wing-third-y": 83,
            duration: 0.25,
          },
          {
            "--rotate": 60,
            "--plane-x": -8,
            "--plane-y": 40,
            duration: 0.2,
          },
          {
            "--rotate": 40,
            "--plane-x": 45,
            "--plane-y": -300,
            "--plane-opacity": 0,
            duration: 0.375,
            onComplete() {
              setTimeout(() => {
                button.removeAttribute("style");
                gsap.fromTo(
                  button,
                  {
                    opacity: 0,
                    y: -8,
                  },
                  {
                    opacity: 1,
                    y: 0,
                    clearProps: true,
                    duration: 0.3,
                    onComplete() {
                      button.classList.remove("active");
                    },
                  }
                );
              }, 1800);
            },
          },
        ],
      });

      gsap.to(button, {
        keyframes: [
          {
            "--text-opacity": 0,
            "--border-radius": 0,
            "--left-wing-background": getVar("--primary-dark"),
            "--right-wing-background": getVar("--primary-dark"),
            duration: 0.11,
          },
          {
            "--left-wing-background": getVar("--primary"),
            "--right-wing-background": getVar("--primary"),
            duration: 0.14,
          },
          {
            "--left-body-background": getVar("--primary-dark"),
            "--right-body-background": getVar("--primary-darkest"),
            duration: 0.25,
            delay: 0.1,
          },
          {
            "--trails-stroke": 171,
            duration: 0.22,
            delay: 0.22,
          },
          {
            "--success-opacity": 1,
            "--success-x": 0,
            duration: 0.2,
            delay: 0.15,
          },
          {
            "--success-stroke": 0,
            duration: 0.15,
          },
        ],
      });
    }
  });
});

//10이 왜 안들어갈까요/

function reload(check) {
  //if (parent.location.href.indexOf('reloaded')==-1) parent.location.replace(parent.location.href+'?reloaded');
  if (check === 10) {
    alert("5");
    //alert("신청 완료");
  } else {
    //window.location.reload(true);
    //alert("신청 완료"); // 버그수정을 위해 적어둠
  }
}

const link = () => {
  setTimeout(
    () => window.open(url, "_blank", `height=${height}, width=${width}`),
    3000
  );
  let check = 10;
  setTimeout((check) => reload(), 7000);
};

// 화면 사이즈 가져오기
const height = window?.screen?.height;
const width = window?.screen?.width;
const url =
  "https://docs.google.com/forms/d/e/1FAIpQLSchlsp4vKxJ92fUYguzvnbvqjzgVVp1_6gr3-iTNgEXUpc9Pw/viewform?usp=sf_link";

function Apply() {
  const { useState, useRef, useEffect } = React;
  const timer = setTimeout(() => console.log("Initial timeout!"), 2000);
  clearTimeout(timer);

  let check = 0;

  return (
    <div>
      <div className="apply">
        <div className="apply-view">
          <button
            class="apply-button"
            img
            src="img/icon_form.png"
            alt="plane"
            onClick={link}
          >
            <span className="apply-contents">
              지원하기{" "}
              <img
                className="apply-plane-img"
                src="img/icon_form.png"
                alt="plane"
              />
            </span>
            <span class="success">
              <svg viewBox="0 0 16 16">
                <polyline points="3.75 9 7 12 13 5"></polyline>
              </svg>
              신청 완료!
            </span>

            <svg class="trails" viewBox="0 0 33 64">
              <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
              <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div class="plane">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
  //clearTimeout(timer);
}

export default Apply;
