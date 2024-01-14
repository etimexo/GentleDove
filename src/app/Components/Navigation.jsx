"use client"
import React, { useEffect, useState } from "react";
import "./navigation.css";

export default function Navigation() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0)
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  return (
    <nav className={scrolling ? "scrolling" : ""}>
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
