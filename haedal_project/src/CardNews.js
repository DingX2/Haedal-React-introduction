import "./CardNews.css";
import "./embla.css";
import React from "react";

//npm i react react-dom @trendyol-js/react-carousel --save
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "./EmblaCarousel";

export default function CardNews() {
  const autoplayOptions = {
    delay: 1000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const OPTIONS = {
    inViewThreshold: 0,
    dragFree: true,
    containScroll: "keepSnaps",
  };
  const SLIDE_COUNT = 5; //슬라이드 개수 infinite
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const App = () => (
    <main className="sandbox">
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        {/*슬라이드 모션 추가*/}
        {/*<div className="embla" ref={emblaRef} />*/}
      </section>
    </main>
  );

  return <App />;
}
/*
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <img src={"/img/card1.png"} className="embla__slide" alt="" />
        <img src={"/img/card2.png"} className="embla__slide" alt="" />
        <img src={"/img/card3.png"} className="embla__slide" alt="" />
        <img src={"/img/card4.png"} className="embla__slide" alt="" />
        <img src={"/img/card5.png"} className="embla__slide" alt="" />
        <img src={"/img/card1.png"} className="embla__slide_clone" alt="" />
        <img src={"/img/card2.png"} className="embla__slide_clone" alt="" />
      </div>
    </div>
  );*/

/*
        <img src={"/img/카드들.png"} className="embla__slide" alt="" />
        <img
          src={"/img/카드들2.png"}
          className="embla__container_clone"
          alt=""
        />
        */

/*
        <img src={"/img/카드들.png"} className="embla__slide" />
        <img src={"/img/카드들2.png"} className="embla__slide" />
export default function CardNews() {
  return ReactDOM.render(
    <Carousel>
      <img src={"/img/카드들.png"} className="image-wrap" />
      <img src={"/img/카드들2.png"} className="image-wrap" />
    </Carousel>,
    document.getElementById("root")
  );
}*/
