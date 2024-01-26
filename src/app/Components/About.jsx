"use client";
import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import gentleDove from "../assets/gentledove.jpg";
import "./about.css";
import Image from "next/image";
import arrow from "../assets/up-arrow.png";
import phone from "../assets/phone.png";

export default function () {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const block = () => {
    return `block`;
  };
  // const block2 = () => {
  //   return `block`;
  // };
  const [typeEffect] = useTypewriter({
    words: ["Tech enthusiast", "Full stack developer", "freelancer"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 65,
  });
  return (
    <div className="about" id="about">
      <div className="image">
        <Image
          src={gentleDove}
          className="profile-pic"
          alt="GentleDove's display picture"
        />
      </div>
      <div className="about-sec">
        <button className="about-btn">About</button>
        <br />
        <h1 className="type">
          I'm a <span>{typeEffect}</span>
        </h1>
        <p>
          Hi there! I'm Obisesan Elijah(GentleDove), a full-stack developer with
          a passion for the tech space and everything related to it. Through
          creativity and innovation, I bring website designs to life. Explore my
          journey, projects, and let's embark on a meaningful connection
          together. Welcome to my digital space!
        </p>
        <div
          id="arrow"
          className={scrolling ? "scrolling" : ""}
          style={{ display: scrolling ? block() : "none" }}
        >
          <a href="#home">
            <Image src={arrow} className="up-arrow" alt="back to the top" />
          </a>
        </div>
        <div
          id="phone"
          // className={scrolling ? "scrolling" : ""}
          // style={{ display: scrolling ? block2() : "none" }}
        >
          <a href="#contact-me">
            <Image src={phone} className="phone" alt="back to the top" />
          </a>
        </div>
      </div>
    </div>
  );
}
