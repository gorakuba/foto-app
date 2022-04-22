import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorite from "./components/Favorite";
import Home from "./components/Home";
import EventOne from "./components/EventOne";
import EventTwo from "./components/EventTwo";
import EventThree from "./components/EventThree";
import EventFour from "./components/EventFour";
import EventFive from "./components/EventFive";

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/' element={<Home />} />
          <Route path='/studniowka2k22' element={<EventOne />} />
          <Route path='/snapandfunnyphotos' element={<EventTwo />} />
          <Route path='/komunia2k12' element={<EventThree />} />
          <Route path='/komers2k19' element={<EventFour />} />
          <Route path='/starelata' element={<EventFive />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
