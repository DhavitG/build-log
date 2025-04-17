import { useState } from "react";
import "./App.css";
import usePrev from "./hooks/usePrev";

export default function App3_usePrev() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState((c) => c + 1)}>Click me</button>
      <p>The previous state was {prev}</p>
    </div>
  );
}
