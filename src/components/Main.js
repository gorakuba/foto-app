import React from "react";
import "../styles/Main.css";
import FotoSection from "../components/FotoSection";

function Main() {
  return (
    <>
      <h1>
        <i>"Opportunity seldom knocks twice ..."</i>
      </h1>
      <div className='main'>
        <FotoSection />
      </div>
    </>
  );
}

export default Main;
