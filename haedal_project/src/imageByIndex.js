const image1 = <img src={"/img/card1.png"} className="embla__slide" alt="" />;
const image2 = <img src={"/img/card2.png"} className="embla__slide" alt="" />;
const image3 = <img src={"/img/card3.png"} className="embla__slide" alt="" />;
const image4 = <img src={"/img/card4.png"} className="embla__slide" alt="" />;

export const images = [image1, image2, image3, image4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
