import "./CardNews.css";
import React from "react";

//npm i react react-dom @trendyol-js/react-carousel --save
import ReactDOM from "react-dom";
import { Carousel } from "@trendyol-js/react-carousel";
import { Item } from "./YourItem";

export default function CardNews() {
  {
    return ReactDOM.render(
      <Carousel>
        <img src={"/img/카드들.png"} className="image-wrap" />
        <img src={"/img/카드들.png"} className="image-wrap" />
      </Carousel>,
      document.getElementById("root")
    );
  }
}
