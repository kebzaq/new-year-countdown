import React from "react";

const Days = ({ d }) => {
  return (
    <div className="time">
      {/* days */}
      <h2>{d < 10 ? "0" + d : d}</h2>
      {/* <h2>{d}</h2> */}
      <small>days</small>
    </div>
  );
};

export default Days;
