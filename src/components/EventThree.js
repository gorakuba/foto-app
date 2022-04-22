import React, { useState } from "react";
import EventHeader from "../components/EventHeader";
import "../styles/photosFolder.css";
import BtnSlider from "./BtnSlider";
import { komunia2012 } from "../utilities/komunia2012";
import { useStateValue } from "../helper/StateProvider";

function EventThree() {
  const [startScreen, setStartScreen] = useState(true);
  const [slideIndex, setSlideIndex] = useState(1);
  const [{ favorite }, dispatch] = useStateValue();

  const changeView = (e) => {
    e.preventDefault();
    setStartScreen((prev) => !prev);
  };

  const nextSlide = () => {
    if (slideIndex !== komunia2012.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === komunia2012.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(komunia2012.length);
    }
  };

  const addToFavorite = (e) => {
    dispatch({
      type: "ADD_TO_FAVORITE",
      photo: {
        src: e.target.src,
      },
    });
  };

  return (
    <div className='photosFolder'>
      <EventHeader eventName='Komunia 2k12' />
      <div className='photosFolder__main'>
        <h1 className='photosFolder__name'>Komunia 2k12</h1>
        <button className='photosFolder__button' onClick={changeView}>
          Change view
        </button>
        {startScreen === true ? (
          <div className='photosFolder__photosSection'>
            {komunia2012.map((value, key) => (
              <img
                key={value.id}
                onDoubleClick={addToFavorite}
                className='photosFolder__photo'
                src={
                  process.env.PUBLIC_URL +
                  `/images/komunia2012/img (${key + 1}).jpg`
                }
                alt=''
              />
            ))}
          </div>
        ) : (
          <div className='container-slider'>
            {komunia2012.map((value, key) => {
              return (
                <div
                  key={value.id}
                  className={
                    slideIndex === key + 1 ? "slider active-anim" : "slider"
                  }
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/images/komunia2012/img (${key + 1}).jpg`
                    }
                    alt=''
                  />
                </div>
              );
            })}

            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default EventThree;
