import React from "react";
// import Carousel from "react-responsive-carousel";
// import { img } from "./IMG/data";
import classes from './Carousel.module.css'
import { Carousel } from "react-responsive-carousel";
import { img } from "./IMG/data.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        // showIndicators={true}
        showIndicators={false}
        showThumbs={false}>
        {img?.map((imageItemLink, index) => {
          return (
            <img key={index} src={imageItemLink} alt={`Slide ${index + 1}`} />
          );
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
}

export default CarouselEffect;
