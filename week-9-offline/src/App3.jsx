import { useEffect, useState } from "react";

export default function App3() {
  return (
    <div>
      <Timer />
    </div>
  );
}

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let clock = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // clean-up function runs when component is unmounted
    return function () {
      clearInterval(clock);
    };
  }, []);

  return <div>{seconds} seconds elapsed</div>;
};
