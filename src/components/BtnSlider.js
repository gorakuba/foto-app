import React from "react";
import "../styles/Slider.css";

function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      className={direction === "next" ? "btnSlider next" : "btnSlider prev"}
      onClick={moveSlide}
    >
      <img
        src={
          direction === "next"
            ? "https://previews.123rf.com/images/eljanstock/eljanstock1811/eljanstock181109660/111791312-right-arrow-vector-icon-isolated-on-transparent-background-right-arrow-transparency-logo-concept.jpg"
            : "https://previews.123rf.com/images/eljanstock/eljanstock1811/eljanstock181109954/111879652-pfeil-nach-links-vektor-icon-auf-transparentem-hintergrund-isoliert-pfeil-nach-links-transparenz-log.jpg"
        }
        alt=''
      />
    </button>
  );
}

export default BtnSlider;
