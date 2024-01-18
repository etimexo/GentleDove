// "use client";
// import React from "react";
// import Carousel from "react-responsive-carousel";
import "./work.css";

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
//         onChange={onChange}
//         onClickItem={onClickItem}
//         onClickThumb={onClickThumb}
//       >
//         <div>
//           <img src="assets/1.jpeg" />
//           <p className="legend">Legend 1</p>
//         </div>
//         <div>
//           <img src="assets/2.jpeg" />
//           <p className="legend">Legend 2</p>
//         </div>
//         <div>
//           <img src="assets/3.jpeg" />
//           <p className="legend">Legend 3</p>
//         </div>
//         <div>
//           <img src="assets/4.jpeg" />
//           <p className="legend">Legend 4</p>
//         </div>
//         <div>
//           <img src="assets/5.jpeg" />
//           <p className="legend">Legend 5</p>
//         </div>
//         <div>
//           <img src="assets/6.jpeg" />
//           <p className="legend">Legend 6</p>
//         </div>
//       </Carousel>
//     </div>
//   );
// }

var React = require("react");
var ReactDOM = require("react-dom");
var Carousel = require("react-responsive-carousel").Carousel;

var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div> 
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }
});
