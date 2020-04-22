import React from "react";
import Seconds from "./seconds";
import Constants from "../../constant";
import PropTypes from "prop-types";

const BerlinClock = (props) => {
  const second = props.time % 2 === 0 ? Constants.EVEN_SECOND : "";

  return (
    <div className="clock mv4">
      <Seconds seconds={second} />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired,
};

export default BerlinClock;
