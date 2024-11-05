import React from "react";

const Seconds = ({ s }) => {
  return (
    <div className="time">
      {/* seconds */}
      <h2>{s < 10 ? "0" + s : s}</h2>
      <small>seconds</small>
    </div>
  );
};

export default Seconds;
