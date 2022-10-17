import React, { CSSProperties } from "react";

interface ISliderBar {
  barStyles?: CSSProperties;
  backgroundStyles?: CSSProperties;
}

export default function SliderBar({ barStyles, backgroundStyles }: ISliderBar) {
  return (
    <div className="slider-bar">
      <div className="slider-bar-progress" style={barStyles}></div>
      <div className="slider-bar-background" style={backgroundStyles}></div>
    </div>
  );
}
