"use client";
import React, { useEffect, useState } from "react";
import "./navigation.css";
// import Home from './Components/Home'
// import About from './Components/About'
// import Work from './Components/Work'
// import Services from './Components/Service'
// import Contact from './Components/Contact'

export default function Navigation() {
  const [scrolling, setScrolling] = useState(false);
  const [showLinks, setShowLinks] = useState(false)

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

  const calculateBackgroundColor = () => {
    const percentage = scrolling ? 80 : 0;

    return `rgba(8, 11, 24, ${percentage / 100})`;
  };
  const toggleLinks = () => {
    setShowLinks(!showLinks); // Toggle the state to show/hide links
  };
  const closeMenu = () => {
    setShowLinks(false); // Close the menu when a link is clicked
  };
  
  return (
    <nav
      className={scrolling ? "scrolling" : ""}
      style={{ backgroundColor: calculateBackgroundColor() }}
    >
      <div className="list-d">
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
        </ul>
      </div>
      <div className={`list ${showLinks ? "active" : ""}`}>
        <ul className="links">
          <li>
            <a href="#about" className="link-item" onClick={closeMenu}>
              About
            </a>
          </li>
          <hr className="hr" />
          <li>
            <a href="#work" className="link-item" onClick={closeMenu}>
              Works
            </a>
          </li>
          <hr className="hr" />
          <li>
            <a href="#service" className="link-item" onClick={closeMenu}>
              Services
            </a>
          </li>
          <hr className="hr" />
        </ul>
      </div>
      <div className="hamburger" onClick={toggleLinks}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="logo">GentleDove</div>
      <button className="contact">Hit me up</button>
    </nav>
  );
}
