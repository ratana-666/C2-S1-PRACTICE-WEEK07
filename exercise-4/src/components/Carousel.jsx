import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [pic , setPic] = useState(0)
  /* You will need to hanle the click on left and right button */
  function next(){
    if(pic === images.length - 1){
      setPic(0)
    }else{
      setPic(pic + 1)
    }
  }

  function prev(){
    if(pic === 0){
      setPic(images.length - 1)
    }else{
      setPic(pic - 1)
    }
  }
  /* You will need to manage the cases when we are on the last image or first image*/


  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prev} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[pic].src} alt={images[pic].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={next} />
    </div>
  );
};
