import image1 from "./images/card1.png";
import image2 from "./images/card2.png";
import image3 from "./images/card3.png";
import image4 from "./images/card4.png";
import image5 from "./images/card5.png";

/*import image1 from "./card1.png";
import image2 from "./card2.png";
import image3 from "./card3.png";
import image4 from "./card4.png";
import image5 from "./card5.png";
*/
/*
const image1 = (
  <img src={"/img/card1.png"} className="embla__slide" alt="img" />
);
const image2 = (
  <img src={"/img/card2.png"} className="embla__slide" alt="img" />
);
const image3 = (
  <img src={"/img/card3.png"} className="embla__slide" alt="img" />
);
const image4 = (
  <img src={"/img/card4.png"} className="embla__slide" alt="img" />
);
const image5 = (
  <img src={"/img/card5.png"} className="embla__slide" alt="img" />
);*/

export const images = [image1, image2, image3, image4, image5];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
