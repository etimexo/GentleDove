import React from "react";
import "./navigation.css";

export default function Navigation() {
  return (
    <nav>
      <div className="list">
        <ul className="links">
          <li>
            <a href="#" className="link-item">
              About
            </a>
          </li>
          <li>
            <a href="#" className="link-item">
              Works
            </a>
          </li>
          <li>
            <a href="#" className="link-item">
              Services
            </a>
          </li>
        </ul>
      </div>
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="logo">GentleDove</div>
        <button className="contact">Hit me up</button>
    </nav>
  );
}
