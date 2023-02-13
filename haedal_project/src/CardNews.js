import "./CardNews.css";
import React from "react";

//npm i react react-dom @trendyol-js/react-carousel --save
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function CardNews() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const autoplayOptions = {
    delay: 1000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <img src={"/img/카드들.png"} className="embla__slide" alt="" />
        <img
          src={"/img/카드들2.png"}
          className="embla__container_clone"
          alt=""
        />
      </div>
    </div>
  );
}

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
