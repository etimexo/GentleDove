"use client"
import React from "react";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import gentleDove from "../assets/gentledove.jpg";
import "./about.css";

export default function () {
  const [typeEffect] = useTypewriter({
    words: ['Tech enthusiast', 'Full stack developer', 'freelancer'],
    loop:{},
    typeSpeed: 70,
    deleteSpeed: 65,
  })
  return (
    <div className="about">
      <div className="image">
        <Image
          src={gentleDove}
          className="profile-pic"
          alt="GentleDove's display picture"
        />
      </div>
      <div className="about-sec">
        <button className="about-btn">
            About
        </button><br />
        <h1 className="type">I'm a <span>{typeEffect}</span></h1>
          <p>
          Hi there! I'm Obisesan Elijah(GentleDove), a full-stack developer with a passion for the tech space and everything related to it. Through creativity and innovation, I bring website designs to life. Explore my journey, projects, and let's embark on a meaningful connection together. Welcome to my digital space!
          </p>
      </div>
    </div>
  );
}
