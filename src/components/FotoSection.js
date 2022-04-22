import React from "react";
import "../styles/FotoSection.css";
import { FolderIcon } from "@heroicons/react/outline";
import { eventsName } from "../utilities/eventsName";
import { Link } from "react-router-dom";

function FotoSection() {
  return (
    <>
      {eventsName.map((eventName) => {
        switch (eventName) {
          case "Studniówka 2k22":
            return (
              <div key={eventsName.indexOf(eventName)} className='fotoSection'>
                <Link to='/studniowka2k22' className='fotoSection__link'>
                  <div className='fotoSection__folder'>
                    <FolderIcon className='fotoSection__folderIcon' />
                    <p className='fotoSection__description'>{eventName}</p>
                  </div>
                </Link>
              </div>
            );
          case "Snap and Funny Photos":
            return (
              <div key={eventsName.indexOf(eventName)} className='fotoSection'>
                <Link to='/snapandfunnyphotos' className='fotoSection__link'>
                  <div className='fotoSection__folder'>
                    <FolderIcon className='fotoSection__folderIcon' />
                    <p className='fotoSection__description'>{eventName}</p>
                  </div>
                </Link>
              </div>
            );
          case "Komunia 2k12":
            return (
              <div key={eventsName.indexOf(eventName)} className='fotoSection'>
                <Link to='/komunia2k12' className='fotoSection__link'>
                  <div className='fotoSection__folder'>
                    <FolderIcon className='fotoSection__folderIcon' />
                    <p className='fotoSection__description'>{eventName}</p>
                  </div>
                </Link>
              </div>
            );
          case "Komers 2k19":
            return (
              <div key={eventsName.indexOf(eventName)} className='fotoSection'>
                <Link to='/komers2k19' className='fotoSection__link'>
                  <div className='fotoSection__folder'>
                    <FolderIcon className='fotoSection__folderIcon' />
                    <p className='fotoSection__description'>{eventName}</p>
                  </div>
                </Link>
              </div>
            );
          case "Stare lata":
            return (
              <div key={eventsName.indexOf(eventName)} className='fotoSection'>
                <Link to='/starelata' className='fotoSection__link'>
                  <div className='fotoSection__folder'>
                    <FolderIcon className='fotoSection__folderIcon' />
                    <p className='fotoSection__description'>{eventName}</p>
                  </div>
                </Link>
              </div>
            );
        }
      })}
    </>
  );
}

export default FotoSection;
