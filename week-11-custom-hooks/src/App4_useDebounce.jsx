import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

function App4_useDebounce() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }

  const debouncedFn = useDebounce(sendDataToBackend);

  return (
    <>
      <input type="text" onChange={debouncedFn} />
    </>
  );
}

export default App4_useDebounce;
