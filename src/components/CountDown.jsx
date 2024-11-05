import { useRef, useState } from "react";
import Days from "./Days";
import Hours from "./Hours";
import Minutes from "./Minutes";
import Seconds from "./Seconds";

const CountDown = ({ currYear }) => {
  const intervalRef = useRef(null);
  const [timeObj, setTimeObj] = useState({
    d: 0,
    h: 0,
    m: 0,
    s: 0,
  });
  //   d, h, m, s

  //   const newYearTime = new Date(`January 01 ${currYear + 1} 00:00:00`);
  const newYearTime = new Date(`January 01 ${currYear + 1} 00:00:00`);

  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      const currentTime = new Date();
      const diff = newYearTime - currentTime; // number in milliseconds

      const days = Math.floor(diff / 1000 / 60 / 60 / 24);
      const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const seconds = Math.floor(diff / 1000) % 60;

      //   console.log(days, hours, minutes, seconds);

      setTimeObj({
        d: days,
        h: hours,
        m: minutes,
        s: seconds,
      });
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  const { d, h, m, s } = timeObj;

  if (d === 0 && h === 0 && m === 0 && s === 0) {
    handleStop();
  }

  return (
    <>
      <div className="countdown">
        <Days d={d} />
        <Hours h={h} />
        <Minutes m={m} />
        <Seconds s={s} />
      </div>
      <button onClick={handleStart} className="start-btn">
        Start
      </button>
    </>
  );
};

export default CountDown;
