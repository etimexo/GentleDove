import React from "react";
import "./home.css";
import Navigation from "./Navigation";

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <h1>
        Welcome to my digital haven, a place where creativity and innovation
        collide.
      </h1>
      <div className="buttons">
        <button className="projects home-btn">View projects</button>
        <button className="services home-btn">My services</button>
      </div>
    </div>
  );
}
