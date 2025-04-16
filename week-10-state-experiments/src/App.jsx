import { useState } from "react";

function App() {
  return (
    <div>
      <Light />
    </div>
  );
}

function Light() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <LightBulb bulbOn={bulbOn} />
      <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}

function LightBulb({ bulbOn }) {
  return <div>{bulbOn ? "Bulb is on" : "Bulb is off"}</div>;
}

function LightSwitch({ bulbOn, setBulbOn }) {
  function toggleBulb() {
    // setBulbOn((prevState) => !prevState);
    setBulbOn(!bulbOn);
  }
  return (
    <div>
      <button onClick={toggleBulb}>Toggle the bulb</button>
    </div>
  );
}

export default App;
