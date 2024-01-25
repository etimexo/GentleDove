"use client";
import React from "react";
import "./Service.css";
export default function Service() {
  return (
    <div className="service">
      <div className="but-house">
        <button className="about-btn">Services</button>
        <br />
        <div className="cards grid">
          <div className="service-card">
            <h1 className="head">Service Offerings</h1>
            <p>
              As a web development expert, I provide a comprehensive suite of
              services to elevate your online presence. From creating responsive
              websites and web applications to optimizing user experiences
              services are designed to meet your digital needs.
            </p>
          </div>
          <div className="service-card">
            <h1 className="head">Benefits</h1>
            <p>
              By choosing my web development services, you'll enjoy a sleek and
              functional website, improved user engagement, and a seamless
              online experience for your visitors. Elevate your brand with a
              visually appealing and technically robust web presence.
            </p>
          </div>
          <div className="service-card">
            <h1 className="head">Features</h1>
            <p>
              My web development services encompass front-end and back-end
              development, ensuring your website not only looks great but
              functions flawlessly. I specialize in HTML, CSS, JavaScript, and
              the latest frameworks to bring your vision to life.
            </p>
          </div>
          <div className="service-card">
            <h1 className="head">Service Packages</h1>
            <p>
              Explore my Bronze, Silver, and Gold web development packages. The
              Bronze package includes a responsive website design, the Silver
              package adds dynamic functionality, and the Gold package offers a
              fully customized web solution with ongoing support.
            </p>
          </div>
          <div className="service-card">
            <h1 className="head">Sample FAQs</h1>
            <p>
              Q: What technologies do you use for web development? A: I leverage
              industry-leading technologies such as React.js and Node.js to
              create robust and scalable web solutions. Q: How long does it take
              to build a website? A: Timelines vary, but I prioritize efficiency
              without compromising quality.
            </p>
          </div>
          <div className="service-card">
            <h1 className="head">Getting started</h1>
            <p>
              Getting started is easy. Reach out to me via email or phone, and
              we'll schedule a consultation to discuss your web development
              needs. From conceptualization to deployment, I'll guide you
              through the process to ensure a successful online presence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
