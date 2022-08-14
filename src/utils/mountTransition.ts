import { useEffect, useState } from "react";

const useMountTransition = (mountDelay: number) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(true), mountDelay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [mountDelay, hasTransitionedIn]);

  return hasTransitionedIn;
};

export default useMountTransition;
