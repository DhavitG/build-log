import { useRef } from "react";

export default function App2_useRef() {
  const inputRef = useRef();

  function focusOnInput() {
    // document.getElementById("name").focus();
    inputRef.current.focus();
  }
  return (
    <div>
      Sign up
      <input type={"text"} ref={inputRef} />
      <input type={"text"} />
      <button onClick={focusOnInput}>Submit</button>
    </div>
  );
}
