import React, { useState } from "react";
import "./App.css";
import { BtnComp } from "./Components/BtnComp";
import { Display } from "./Components/Display";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [inter , setInter ] =useState();

  const start = () => {
    run();
   setInter( setInterval(run, 11));
  };
  const stop = () =>{
clearInterval(inter);
  }
  const reset =() =>{
    clearInterval(inter);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  }

  let updatedMS = time.ms;
  let updatedS = time.s;
  let updatedM = time.m;
  let updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMS === 100) {
      updatedS++;
      updatedMS = 0;
    }
updatedMS ++;
    return setTime({ ms: updatedMS, s: updatedS, m: updatedM, h: updatedH });
  };

  return (
    <div className="App">
      <Display time={time} />
      <BtnComp start={start} stop={stop} reset ={reset} />
    </div>
  );
}

export default App;
