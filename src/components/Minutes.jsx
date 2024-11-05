import React from "react";

const Minutes = ({ m }) => {
  return (
    <div className="time">
      {/* minutes */}
      <h2>{m < 10 ? "0" + m : m}</h2>
      <small>minutes</small>
    </div>
  );
};

export default Minutes;
