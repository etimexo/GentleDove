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
import "./work.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function () {
  const onChange = (index) => {
    console.log(`Carousel slide changed to index ${index}`);
    // Add your custom logic here
  };

  const onClickItem = (index, item) => {
    console.log(`Clicked on item ${index}`);
    // Add your custom logic here
  };

  const onClickThumb = (index) => {
    console.log(`Clicked on thumbnail ${index}`);
    // Add your custom logic here
  };

  return (
    <div className="work">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={true}
        showIndicators={false}
        onChange={onChange}
      >
        <div className="card netflix">
          {/* <img src="../assets/netflix.png" alt="Netflix" /> */}
        </div>
        <div className="card tracker">
          {/* <img src="../assets/tracker.png" alt="Tracker" /> */}
        </div>
        <div className="card blogr">
          {/* <img src="../assets/blogr.png" alt="Blogr" /> */}
        </div>
        <div className="card landing">
          {/* <img src="../assets/landing.png" alt="Landing" /> */}
        </div>
        <div className="card age">
          {/* <img src="../assets/age.png" alt="Age" /> */}
        </div>
        <div className="card toDo">
          {/* <img src="../assets/toDo.png" alt="ToDo" /> */}ew
        </div>
      </Carousel>
    </div>
  );
}
