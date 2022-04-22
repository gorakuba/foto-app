import React from "react";
import "../styles/Favorite.css";
import EventHeader from "./EventHeader";
import { useStateValue } from "../helper/StateProvider";
import { v4 as uuidv4 } from "uuid";

function Favorite() {
  const [{ favorite }, dispatch] = useStateValue();

  const removeFromFavorite = (e) => {
    dispatch({
      type: "REMOVE_FROM_FAVORITE",
      src: e.target.src,
    });
  };

  return (
    <div className='favorite'>
      <EventHeader eventName='Favorite photos' />
      <div className='favorite__main'>
        <h1>FAVORITE PHOTOS</h1>

        <div className='favorite__photosSection'>
          {favorite?.length > 0 ? (
            <>
              {favorite?.map((photo) => (
                <img
                  className='favorite__photo'
                  onDoubleClick={removeFromFavorite}
                  src={photo.src}
                  alt=''
                  key={uuidv4()}
                />
              ))}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Favorite;
