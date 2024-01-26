import React from "react";
import "./Code.css";

export default function Code() {
  return (
    <div className="code">
      <div>
        <button className="about-btn">SOURCE CODE</button>
        <h1>Behind the simulation</h1>
        <p>
          Uncover the magic behind the scenes! Explore the source code that
          powers this innovation. Your journey into the heart of the code
          awaits. Dive in, discover, and let the lines of code tell their story!
        </p>
        <a href="https://github.com/etimexo/GentleDove">
          <button className="source-code">SHOW ME</button>
        </a>
      </div>
    </div>
  );
}
