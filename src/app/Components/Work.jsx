// "use client";
// import "./work.css";
// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./work.css";

// export default function () {
//   const onChange = (index) => {
//     console.log(`Carousel slide changed to index ${index}`);
//     // Add your custom logic here
//   };

//   const onClickItem = (index, item) => {
//     console.log(`Clicked on item ${index}`);
//     // Add your custom logic here
//   };

//   const onClickThumb = (index) => {
//     console.log(`Clicked on thumbnail ${index}`);
//     // Add your custom logic here
//   };

//   return (
//     <div className="work">
//       <Carousel
//         showArrows={true}
//         infiniteLoop={true}
//         showThumbs={true}
//         showIndicators={false}
//         // autoPlay={true}
//         onChange={onChange}
//         // onClickItem={onClickItem}
//         // onClickThumb={onClickThumb}
//       >
//         <div className="card netflix">ieoehj</div>
//         <div className="card tracker">ieoe</div>
//         <div className="card blogr">ehj</div>
//         <div className="card landing">ehdefew</div>
//         <div className="card age">ehdefew</div>
//         <div className="card toDo">ehdefew</div>
//       </Carousel>
//     </div>
//   );
// }
"use client";
// import React from "react";
// import "./work.css";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// export default function Work() {
//   return (
//     <div>Work</div>
//   )
// }
import React from "react";
import Slider from "react-slick";
import "./work.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PauseOnHover = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className="work">
      <Slider {...settings}>
        <div className="card netflix">
          <h3>1</h3>
        </div>
        <div className="card tracker">
          <h3>2</h3>
        </div>
        <div className="card blogr">
          <h3>3</h3>
        </div>
        <div className="card landing">
          <h3>4</h3>
        </div>
        <div className="card age">
          <h3>5</h3>
        </div>
        <div className="card toDo">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default PauseOnHover;
