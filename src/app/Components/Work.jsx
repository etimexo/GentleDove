"use client";
import React from "react";
import Slider from "react-slick";
import "./work.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PauseOnHover = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="work">
      <div className="but-house">
        <button className="about-btn">My works</button>
        <br />
      </div>
      <Slider {...settings}>
        <div className="card gyme">
          <a href="#" target="_blank">
            <button className="preview">Coming soon...</button>
          </a>
          <br />
          
        </div>
        <div className="card netflix">
          <a href="https://teo-netflix.netlify.app/" target="_blank">
            <button className="preview">Live preview</button>
          </a>
          <br />
          <a href="https://github.com/etimexo/Netflix-clone" target="_blank">
            <button className="source">Source code</button>
          </a>
        </div>
        <div className="card tracker">
          <a href="https://trackingtime.netlify.app/" target="_blank">
            <button className="preview">Live preview</button>
          </a>
          <br />
          <a
            href="https://github.com/etimexo/Time-tracking-dashboard"
            target="_blank"
          >
            <button className="source">Source code</button>
          </a>
        </div>
        <div className="card intro">
          <a href="https://intronav.netlify.app/" target="_blank">
            <button className="preview">Live preview</button>
          </a>
          <br />
          <a
            href="https://github.com/etimexo/Intro-section"
            target="_blank"
          >
            <button className="source">Source code</button>
          </a>
        </div>
        <div className="card blogr">
          <a href="https://etimexo.github.io/Blogr-page/" target="_blank">
            <button className="preview">Live preview</button>
          </a>
          <br />
          <a href="https://github.com/etimexo/Blogr-page" target="_blank">
            <button className="source">Source code</button>
          </a>
        </div>
        <div className="card landing">
          <a href="https://newhomesite.netlify.app/" target="_blank">
            <button className="preview">Live preview</button>
            <br />
          </a>
          <a href="https://github.com/etimexo/News-homepage" target="_blank">
            <button className="source">Source code</button>
          </a>
        </div>
        <div className="card age">
          <a href="https://ageinfo.netlify.app/" target="_blank">
            <button className="preview">Live preview</button>
          </a>
          <br />
          <a href="https://github.com/etimexo/Age-calculator" target="_blank">
            <button className="source">Source code</button>
          </a>
        </div>
        <div className="card toDo">
          <a href="https://listing1.netlify.app/" target="_blank">
            <button className="preview">Live preview</button>
          </a>
          <br />
          <a href="https://github.com/etimexo/todolist" target="_blank">
            <button className="source">Source code</button>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default PauseOnHover;
