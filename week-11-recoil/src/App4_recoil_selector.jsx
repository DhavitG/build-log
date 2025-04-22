import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { counterAtom, evenSelector } from "./store/atoms/counter";

function App4_recoil_selector() {
  return (
    <div>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 2)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return <div>{count}</div>;
}

function IsEven() {
  const even = useRecoilValue(evenSelector);
  return <div>{even ? "Even" : "Odd"}</div>;
}

export default App4_recoil_selector;
