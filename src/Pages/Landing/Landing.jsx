import React from "react";
import LayOut from "../../Components/Layout/Layout";
import CarouselEffect from "../../Components/Carousel/CarouselEffect";
import Catagory from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Catagory />
      <Product />
    </LayOut>
  );
}

export default Landing;

