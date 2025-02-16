import React from "react";
import "./pixelCar.css";

const PixelCar = () => {
  return (
    <div className="car-container">
      <div className="car-body">
        <div className="car-window"></div>
        <div className="car-engine"></div>
      </div>
      <div className="car-wheel front-wheel"></div>
      <div className="car-wheel back-wheel"></div>
    </div>
  );
};

export default PixelCar;