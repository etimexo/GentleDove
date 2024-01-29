import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <hr className="hr hrf1" />
      <p className="name logo">GentleDove</p>
      <hr className="hr hrf2" />
      <ul className="links">
        <li>
          <a href="#about" className="link-item">
            About
          </a>
        </li>
        <li>
          <a href="#work" className="link-item">
            Works
          </a>
        </li>
        <li>
          <a href="#service" className="link-item">
            Services
          </a>
        </li>
        <li>
          <a href="#contact-me" className="link-item">
            Contact
          </a>
        </li>
      </ul>
      {/* <hr className="hr hrf3" /> */}
    </div>
  );
}
