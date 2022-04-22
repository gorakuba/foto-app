import React, { useState } from "react";
import "../styles/EventHeader.css";
import { FolderIcon } from "@heroicons/react/outline";
import { HeartIcon, HomeIcon, UserIcon } from "@heroicons/react/solid";
import { Modal } from "../components/Modal";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import { eventsName } from "../utilities/eventsName";
import { useStateValue } from "../helper/StateProvider";

function EventHeader({ eventName }) {
  const [showModal, setShowModal] = useState(false);
  const [{ favorite }] = useStateValue();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className='eventHeader'>
      <div className='eventHeader__logo'>
        <FolderIcon className='eventHeader__folderIcon' />
        <p className='eventHeader__p'>{eventName}</p>
      </div>

      <div className='eventHeader__searchBox'>
        <SearchBox placeholder='Search ...' data={eventsName} />
      </div>

      <div className='eventHeader__actionOptions'>
        <div className='eventHeader__optionButtons'>
          <Link to='/' className='eventHeader__links'>
            <HomeIcon className='eventHeader__buttons' />
          </Link>
          <Link to='/favorite' className='eventHeader__links'>
            {favorite?.length > 0 ? (
              <HeartIcon className='eventHeader__buttonRed' />
            ) : (
              <HeartIcon className='eventHeader__buttons' />
            )}
          </Link>
          <UserIcon className='eventHeader__buttons' onClick={openModal} />
        </div>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default EventHeader;
