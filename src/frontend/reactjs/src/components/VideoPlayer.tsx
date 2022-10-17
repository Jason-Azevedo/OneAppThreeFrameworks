import React from "react";
import { faExpand, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import VolumeSlider from "./Inputs/Sliders/VolumeSlider";

interface IVideoPlayerProps {}

export default function VideoPlayer({}: IVideoPlayerProps) {
  return (
    <div className="video-player">
      <video className="video-player-video"></video>

      {/* Controls */}
      <div className="video-player-controls">
        {/* Video duration and current time */}
        {/* Progress Slider */}

        <div className="flex-row justify-sb align-c">
          {/* Left side controls */}
          <div>
            <FontAwesomeIcon icon={faPlay} className="icon--18" />
          </div>

          {/* Right side controls */}
          <div className="flex-row gap--16 align-c">
            <VolumeSlider />
            <FontAwesomeIcon icon={faExpand} className="icon--18" />
          </div>
        </div>
      </div>
    </div>
  );
}
