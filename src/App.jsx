import { useRef, useState } from "react";
import "./App.css";
import CountDown from "./components/CountDown";
import Year from "./components/Year";

function App() {
  // const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const currYearRef = useRef(new Date().getFullYear());
  // {
  //   current: new Date().getFullYear();
  // }

  return (
    <div className="App">
      <Year currYear={currYearRef.current} />
      <CountDown currYear={currYearRef.current} />
    </div>
  );
}

export default App;
