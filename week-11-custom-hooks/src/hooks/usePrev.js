import { useEffect, useRef } from "react";

export default function usePrev(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// react returns first, effect gets called later.
