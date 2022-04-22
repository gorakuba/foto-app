import React, { useRef, useEffect, useCallback } from "react";
import "../styles/Modal.css";
import styled from "styled-components";
import { XIcon } from "@heroicons/react/outline";

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 600px) {
    width: 40vh;
    height: auto;
  }
`;

const ModalWrapper = styled.div`
  width: 500px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  top: 40vh;
  z-index: 100;
  border-radius: 10px;

  @media all and (max-width: 600px) {
    width: 35vh;
    height: auto;
  }

  @media all and (min-width: 1400px) {
    height: auto;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(XIcon)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <div className='modal'>
                <div className='modal__logo'>
                  <img
                    className='modal__photo'
                    src='https://scontent-waw1-1.xx.fbcdn.net/v/t1.18169-9/19420786_838967116261341_9148319036236575907_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2xUbUS5_3IAAX_lU4Ir&_nc_ht=scontent-waw1-1.xx&oh=00_AT_I0eysr9RGCNJwrjS7n7pI6LYYe2Wkfkk19jjPXk89Tw&oe=620DF1CD'
                    alt=''
                  />
                  <p className='modal__p'>Kuba Góra</p>
                </div>
                <div className='modal__description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  finibus tincidunt ipsum ac commodo. Sed pulvinar posuere
                  dolor, in pretium orci. In nec ex eu arcu maximus ultrices.
                  Fusce sem augue, luctus ut elit ut, maximus lacinia risus.
                  Quisque eget quam ac ante pulvinar vehicula.
                </div>
              </div>
            </ModalContent>
            <CloseModalButton
              aria-label='Close modal'
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
