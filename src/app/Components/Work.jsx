"use client";
import React from "react";
import Slider from "react-slick";
import "./work.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PauseOnHover = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="work">
      <Slider {...settings}>
        <div className="card netflix">
          <button className="preview">Live preview</button>
          <button className="source">Source code</button>
        </div>
        <div className="card tracker">
          <button className="preview">Live preview</button>
          <button className="source">Source code</button>
        </div>
        <div className="card blogr">
          <button className="preview">Live preview</button>
          <button className="source">Source code</button>
        </div>
        <div className="card landing">
          <button className="preview">Live preview</button>
          <button className="source">Source code</button>
        </div>
        <div className="card age">
          <button className="preview">Live preview</button>
          <button className="source">Source code</button>
        </div>
        <div className="card toDo">
          <button className="preview">Live preview</button>
          <button className="source">Source code</button>
        </div>
      </Slider>
    </div>
  );
};

export default PauseOnHover;
