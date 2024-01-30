"use client";
import React from "react";
import Image from "next/image";
import "./Skills.css";
import html from "../assets/html-5.png";
import next from "../assets/nextjs.jpeg";
import python from "../assets/python.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import css from "../assets/css-3.png";
import javascript from "../assets/java-script.png";
import physics from "../assets/physics.png";

export default function Skills() {
  return (
    <div className="skills">
      <button className="about-btn">My skills</button>
      <div className="skill">
        <Image src={html} attribute="html-logo" className="skill-img" />
        <Image src={css} attribute="html-logo" className="skill-img" />
        <Image src={javascript} attribute="html-logo" className="skill-img" />
        <Image src={physics} attribute="html-logo" className="skill-img" />
        <Image src={next} attribute="html-logo" className="skill-img" />
        <Image src={git} attribute="html-logo" className="skill-img" />
        <Image src={github} attribute="html-logo" className="skill-img" />
        <Image src={python} attribute="html-logo" className="skill-img" />
      </div>
      <hr id="hr" />
    </div>
  );
}
Skills.displayName = "Skills";
