"use client";
import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-me" id="contact-me">
      <div className="sec1">
        <button className="about-btn">Contact me</button>
        <h1>Got a problem to solve?</h1>
        <p>
          I&apos;m passionate about turning your ideas into stunning web solutions.
          Don&apos;t hesitate to drop me a message, and let&apos;s begin creating
          something extraordinary together. Looking forward to connecting with
          you!
        </p>
      </div>
      <div className="sec2">
        <form name="contact" method="POST" data-netlify="true">
          <p>NAME</p>
          <input type="text" name="name" id="name" />
          <p>MESSAGE</p>
          <input type="text" name="message" id="message" />
          <p>E-MAIL</p>
          <input type="email" name="email" id="email" />
          <div className="flex">
            <a href="mailto:elijahobisesan01@gmail.com">
              <p className="flex2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  className="envelope s-desktop"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <span className="s-desktop">elijahobisesan01@gmail.com</span>
              </p>
            </a>
            <button type="submit" className="send-btn services">
              Send
            </button>
            <a href="mailto:elijahobisesan01@gmail.com">
              <p className="flex2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  className="envelope s-mobile"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <span className="s-mobile">elijahobisesan01@gmail.com</span>
              </p>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
Contact.displayName = 'Contact';