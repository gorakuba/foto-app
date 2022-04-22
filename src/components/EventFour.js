import React, { useState } from "react";
import EventHeader from "../components/EventHeader";
import "../styles/photosFolder.css";
import { komers2019 } from "../utilities/komers2019";
import BtnSlider from "./BtnSlider";
import { useStateValue } from "./StateProvider";

function EventFour() {
  const [startScreen, setStartScreen] = useState(true);
  const [slideIndex, setSlideIndex] = useState(1);
  const [{ favorite }, dispatch] = useStateValue();

  const changeView = (e) => {
    e.preventDefault();
    setStartScreen((prev) => !prev);
  };

  const nextSlide = () => {
    if (slideIndex !== komers2019.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === komers2019.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(komers2019.length);
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
      <EventHeader eventName='Komers 2k19' />
      <div className='photosFolder__main'>
        <h1 className='photosFolder__name'>Komers 2k19</h1>
        <button className='photosFolder__button' onClick={changeView}>
          Change view
        </button>
        {startScreen === true ? (
          <div className='photosFolder__photosSection'>
            {komers2019.map((value, key) => (
              <img
                key={value.id}
                onDoubleClick={addToFavorite}
                className='photosFolder__photo'
                src={
                  process.env.PUBLIC_URL +
                  `/images/komers2019/img (${key + 1}).jpg`
                }
                alt=''
              />
            ))}
          </div>
        ) : (
          <div className='container-slider'>
            {komers2019.map((value, key) => {
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
                      `/images/komers2019/img (${key + 1}).jpg`
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

export default EventFour;
