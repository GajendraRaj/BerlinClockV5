import React from "react";
import BerlinClock from "./berlin-clock";
import Constants from "../constant";
import "./Clock.css";

const Clock = () => {
  return (
    <div className="App">
      <h1>{Constants.APP_TITLE}</h1>
      <BerlinClock time={"00"} />
    </div>
  );
};

export default Clock;
