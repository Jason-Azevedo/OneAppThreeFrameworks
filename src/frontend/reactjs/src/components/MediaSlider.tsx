import {
  faArrowLeft,
  faArrowRight,
  faBackward,
  faRotateBackward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IFileURL } from "./Forms/PostForm";

interface IMediaSliderProps {
  links: IFileURL[];
}

export default function MediaSlider({ links }: IMediaSliderProps) {
  // Current media showing
  const [index, setIndex] = useState(0);

  // TODO: Add custom video player component here:
  const elements = links.map((e) =>
    e.type === "image" ? (
      <img className="media-slider-image" src={e.url} />
    ) : (
      <video src={e.url} />
    )
  );

  return (
    <div className="media-slider">
      {/* Content Here */}
      <div className="media-slider-preview">
        <button className="button--dark media-slider-btn-back">
          <FontAwesomeIcon icon={faArrowLeft} className="icon--18" />
        </button>
        {elements[index]}
        <button className="button--dark media-slider-btn-next">
          <FontAwesomeIcon icon={faArrowRight} className="icon--18" />
        </button>
      </div>

      {/* Current item icon representation */}
      <div></div>
    </div>
  );
}
