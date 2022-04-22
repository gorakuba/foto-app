import React, { useState } from "react";
import "../styles/Header.css";
import { HeartIcon, HomeIcon, UserIcon } from "@heroicons/react/solid";
import { Modal } from "../components/Modal";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import { eventsName } from "../utilities/eventsName";
import { useStateValue } from "../helper/StateProvider";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [{ favorite }] = useStateValue();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className='header'>
      <div className='header__logo'>
        <p className='header__p'>
          <i>Just enjoy your life!</i>
        </p>
      </div>

      <div className='header__searchBox'>
        <SearchBox placeholder='Search ...' data={eventsName} />
      </div>

      <div className='header__actionOptions'>
        <div className='header__optionButtons'>
          <Link to='/' className='header__links'>
            <HomeIcon className='header__buttons' />
          </Link>
          <Link to='/favorite' className='header__links'>
            {favorite?.length > 0 ? (
              <HeartIcon className='header__buttonRed' />
            ) : (
              <HeartIcon className='header__buttons' />
            )}
          </Link>
          <UserIcon className='header__buttons' onClick={openModal} />
        </div>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Header;
