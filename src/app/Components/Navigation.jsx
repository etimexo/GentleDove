"use client"
import React, { useEffect, useState } from "react";
import "./navigation.css";

export default function Navigation() {
  // const [scrolling, setScrolling] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     setScrolling(scrollTop > 0)
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   }
  // }, [])
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolling(scrollTop > 0)
    };

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const calculateBackgroundColor = () => {
    const percentage = scrolling ? 40 : 0;

    return `rgba(8, 11, 24, ${percentage / 100})`
  };
  return (
    <nav className={scrolling ? "scrolling" : ""} style={{ backgroundColor: calculateBackgroundColor() }}>
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
