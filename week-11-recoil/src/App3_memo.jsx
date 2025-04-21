import { useEffect, useState, memo } from "react";
import "./App.css";

function App3_memo() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 3000);
  }, []);
  return (
    <div>
      <CurrentCount count={count} />
      <Increase />
      <Decrease />
    </div>
  );
}

const CurrentCount = memo(function ({ count }) {
  return <div>{count}</div>;
});

const Decrease = memo(function () {
  console.log("decreased");
  return (
    <div>
      <button>Decrease</button>
    </div>
  );
});

const Increase = memo(function () {
  console.log("Increased");
  return (
    <div>
      <button>Increase</button>
    </div>
  );
});

export default App3_memo;
