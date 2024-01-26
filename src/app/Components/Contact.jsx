"use client";
import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-me" id="contact-me">
      <div className="sec1">
        <button className="about-btn">Contact</button>
        <h1>Got a problem to solve?</h1>
        <p>
          I'm passionate about turning your ideas into stunning web solutions.
          Don't hesitate to drop me a message, and let's begin creating
          something extraordinary together. Looking forward to connecting with
          you!
        </p>
      </div>
      <div className="sec2">
        <form action="get">
            <p>NAME</p>
            <input type="text" name="name" id="name" />
            <p>MESSAGE</p>
            <input type="text" name="message" id="message" />
            <p>E-MAIL</p>
            <input type="email" name="email" id="email" />
            <div className="flex">
                <p>elijahobisesan01@gmail.com</p>
                <button type="submit" className="send-btn services">Send</button>

            </div>
        </form>
      </div>
    </div>
  );
}
