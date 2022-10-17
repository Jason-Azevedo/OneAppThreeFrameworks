import React from "react";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SliderBar from "./SliderBar";

export default function VolumeSlider() {
  return (
    <div className="volume-slider flex-row align-c gap--8">
      <FontAwesomeIcon icon={faVolumeHigh} className="icon--18" />
      <SliderBar />
    </div>
  );
}
