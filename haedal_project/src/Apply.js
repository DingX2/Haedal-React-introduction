import React from "react";
import "./css/Apply.css";

function Apply() {
  return (
    <div>
      <div className="apply">
        <div className="apply_view">
          <img src="img/apply.png" alt="apply" />

          <button class="button">
            <span class="default">Absenden</span>
            <span class="success">
              <svg viewBox="0 0 16 16">
                <polyline points="3.75 9 7 12 13 5"></polyline>
              </svg>
              Sent
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
}

export default Apply;
