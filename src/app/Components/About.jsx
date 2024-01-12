import React from "react";
import Image from "next/image";
// import {gentleDove} from '../assets/gentledove.jpg'
import gentleDove from "../assets/gentledove.jpg";
import "./about.css";

export default function () {
  return (
    <div className="about">
      <div className="image">
        <Image
          src={gentleDove}
          className="profile-pic"
          alt="GentleDove's display picture"
        />
      </div>
      <div className="about-sec">
        <button className="about-btn">
            About
        </button><br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />A dolorum nulla nesciunt repudiandae corrupti, facilis, vitae voluptates optio, quia eaque dolor vero fugit <br /> numquam cum error exercitationem repellat rem. Consequatur?
      </div>
    </div>
  );
}
