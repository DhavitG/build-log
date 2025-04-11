import { useEffect, useState } from "react";

export default function App2() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      setIsLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/todos/${currentTab}`)
        .then((res) => res.json())
        .then((data) => {
          setTabData(data);
          setIsLoading(false);
        });
    },
    [currentTab]
  );

  return (
    <div>
      <button
        style={{ color: currentTab === 1 ? "red" : "black" }}
        onClick={() => setCurrentTab(1)}
      >
        Todo #1
      </button>
      <button
        style={{ color: currentTab === 2 ? "red" : "black" }}
        onClick={() => setCurrentTab(2)}
      >
        Todo #2
      </button>
      <button
        style={{ color: currentTab === 3 ? "red" : "black" }}
        onClick={() => setCurrentTab(3)}
      >
        Todo #3
      </button>
      <button
        style={{ color: currentTab === 4 ? "red" : "black" }}
        onClick={() => setCurrentTab(4)}
      >
        Todo #4
      </button>

      <br />
      {isLoading ? "Loading..." : tabData.title}
    </div>
  );
}
