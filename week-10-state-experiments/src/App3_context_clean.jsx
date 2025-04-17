import { createContext, useContext, useState } from "react";

const BulbContext = createContext();

function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbContext.Provider
        value={{
          bulbOn: bulbOn,
          setBulbOn: setBulbOn,
        }}
      >
        {children}
      </BulbContext.Provider>
    </div>
  );
}

function App() {
  return (
    <div>
      <BulbProvider>
        <Light />
      </BulbProvider>
    </div>
  );
}

function Light() {
  return (
    <div>
      Header
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Bulb is on" : "Bulb is off"}</div>;
}

function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
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
