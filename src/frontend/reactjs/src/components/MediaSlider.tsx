import React, { useState } from "react";
import {
  faArrowLeft,
  faArrowRight,
  faX,
  faCircle,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IFileURL } from "./Forms/PostForm";
import VideoPlayer from "./VideoPlayer";

interface IMediaSliderProps {
  links: IFileURL[];
  onItemRemove?: (index: number) => void;
}

export default function MediaSlider({
  links,
  onItemRemove,
}: IMediaSliderProps) {
  // Current media showing
  const [index, setIndex] = useState(0);

  const slideNext = () => {
    // Go back to beginning if we are at the end of the slide
    if (index >= links.length - 1) return setIndex(0);

    // Move to the next slide
    setIndex((p) => p + 1);
  };

  const slidePrevious = () => {
    // Go to the last slide item if we are at the beginning of the slide
    console.log(index <= 0);
    if (index <= 0) return setIndex(links.length - 1);

    // Move to the previous slide
    setIndex((p) => p - 1);
  };

  const removeItem = () => {
    if (!onItemRemove) return;

    // Adjust the slider index for the loss of one item.
    if (index > 0) setIndex((i) => i - 1);

    onItemRemove(index);
  };

  // TODO: Add custom video player component here:
  const elements = links.map((e) =>
    e.type === "image" ? (
      <img className="media-slider-image" src={e.url} />
    ) : (
      <VideoPlayer />
    )
  );

  return (
    <div className="media-slider">
      {/* Content Here */}
      <div className="media-slider-preview">
        {/* Next button, only when there is more than one item */}
        {links.length > 1 && (
          <button
            className="button--dark media-slider-btn-next"
            onClick={slideNext}
          >
            <FontAwesomeIcon icon={faArrowRight} className="icon--18" />
          </button>
        )}

        {/* Remove button */}
        {onItemRemove && (
          <button
            className="button--dark media-slider-btn-remove"
            onClick={removeItem}
          >
            <FontAwesomeIcon icon={faX} className="icon--18" />
          </button>
        )}

        {elements[index]}

        {/* Previous button, only when there is more than one item */}
        {links.length > 1 && (
          <button
            className="button--dark media-slider-btn-back"
            onClick={slidePrevious}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="icon--18" />
          </button>
        )}
      </div>

      {/* Current item icon representation */}
      <div className="flex-row justify-c align-c gap--16">
        {links.map((e, i) =>
          e.type === "image" ? (
            <FontAwesomeIcon
              icon={faCircle}
              className={`icon--12 ${i === index ? "" : "light"}`}
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlay}
              className={`icon--12 ${i === index ? "" : "light"}`}
            />
          )
        )}
      </div>
    </div>
  );
}
