import { useState, useRef } from "react";

// a clock with a start and stop functionality using only useState
/**
 * DOWNSIDE:
 * Re - render will happen everytime we do setIntervalId(id)
 * But id isnt displayed anywhere so theres no point in re-rendering
 * We basically want to store something that persists through renders
 * useRef is exactly that
 */

/*
export default function App3_useRef() {

  const [currentCount, setCurrentCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  function startClock() {
    if (intervalId !== null) return;

    const id = setInterval(() => {
      setCurrentCount((prevCount) => prevCount + 1);
    }, 1000);

    setIntervalId(id);
  }

  function stopClock() {
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentCount(0);
  }

  return (
    <div>
      <button onClick={startClock} style={{ margin: 10 }}>
        Start
      </button>
      {currentCount}
      <button onClick={stopClock} style={{ margin: 10 }}>
        Stop
      </button>
    </div>
  );
}
*/

export default function App3_useRef() {
  const [currentCount, setCurrentCount] = useState(0);
  const timer = useRef();

  function startClock() {
    if (timer.current !== null) return; // prevent multiple intervals

    const id = setInterval(() => {
      setCurrentCount((prevCount) => prevCount + 1);
    }, 1000);

    timer.current = id;
  }

  function stopClock() {
    clearInterval(timer.current);
    timer.current = null;
    setCurrentCount(0);
  }

  return (
    <div>
      <button onClick={startClock} style={{ margin: 10 }}>
        Start
      </button>
      {currentCount}
      <button onClick={stopClock} style={{ margin: 10 }}>
        Stop
      </button>
    </div>
  );
}
