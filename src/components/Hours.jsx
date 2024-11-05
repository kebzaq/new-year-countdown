import React from "react";

const Hours = ({ h }) => {
  return (
    <div className="time">
      {/* hours */}
      <h2>{h < 10 ? "0" + h : h}</h2>
      <small>hours</small>
    </div>
  );
};

export default Hours;
