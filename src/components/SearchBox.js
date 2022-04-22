import React, { useState } from "react";
import { SearchIcon, XIcon } from "@heroicons/react/outline";
import "../styles/SearchBox.css";
import { Link } from "react-router-dom";

function SearchBox({ placeholder, data }) {
  const [filtredData, setFiltredData] = useState([]);
  const [wordEntred, setWordEntred] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntred(searchWord);
    const newFilter = data.filter((word) => {
      return word.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFiltredData([]);
    } else {
      setFiltredData(newFilter);
    }
  };

  const clearInput = () => {
    setFiltredData([]);
    setWordEntred("");
  };

  return (
    <>
      <div className='searchBox__searchField'>
        <input
          type='text'
          placeholder={placeholder}
          value={wordEntred}
          onChange={handleFilter}
        />
        <div className='searchBox__searchIcon'>
          {filtredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <XIcon onClick={clearInput} />
          )}
        </div>
      </div>
      <br />
      {filtredData.length > 0 && (
        <div className='searchBox__results'>
          {filtredData.slice(0, 5).map((value, key) => {
            switch (value) {
              case "Studniówka 2k22":
                return (
                  <Link
                    to='/studniowka2k22'
                    className='searchBox__link'
                    key={data.indexOf(value)}
                  >
                    <p>{value}</p>
                  </Link>
                );
              case "Snap and Funny Photos":
                return (
                  <Link
                    to='/snapandfunnyphotos'
                    className='searchBox__link'
                    key={data.indexOf(value)}
                  >
                    <p>{value}</p>
                  </Link>
                );
              case "Komunia 2k12":
                return (
                  <Link
                    to='/komunia2k12'
                    className='searchBox__link'
                    key={data.indexOf(value)}
                  >
                    <p>{value}</p>
                  </Link>
                );
              case "Komers 2k19":
                return (
                  <Link
                    to='/komers2k19'
                    className='searchBox__link'
                    key={data.indexOf(value)}
                  >
                    <p>{value}</p>
                  </Link>
                );
              case "Stare lata":
                return (
                  <Link
                    to='/starelata'
                    className='searchBox__link'
                    key={data.indexOf(value)}
                  >
                    <p>{value}</p>
                  </Link>
                );
              default:
                return null;
            }
          })}
        </div>
      )}
    </>
  );
}

export default SearchBox;
