import { useEffect, useState } from "react";

export interface WindowSize {
  height?: number;
  width?: number;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export function useBreakpoint(breakpoint: string) {
  const [isBreakpoint, setIsBreakpoint] = useState<boolean>(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width) {
      if (breakpoint === "extraLarge") {
        if (width >= 1904) {
          setIsBreakpoint(true);
        } else {
          setIsBreakpoint(false);
        }
      } else if (breakpoint === "large") {
        if (width >= 1264 && width < 1904) {
          setIsBreakpoint(true);
        } else {
          setIsBreakpoint(false);
        }
      } else if (breakpoint === "medium") {
        if (width >= 960 && width < 1264) {
          setIsBreakpoint(true);
        } else {
          setIsBreakpoint(false);
        }
      } else if (breakpoint === "small") {
        if (width >= 600 && width < 960) {
          setIsBreakpoint(true);
        } else {
          setIsBreakpoint(false);
        }
      } else if (breakpoint === "smaller") {
        if (width >= 480 && width < 600) {
          setIsBreakpoint(true);
        } else {
          setIsBreakpoint(false);
        }
      } else if (breakpoint === "extraSmall") {
        if (width < 480) {
          setIsBreakpoint(true);
        } else {
          setIsBreakpoint(false);
        }
      }
      // device breakpoints
      else if (breakpoint === "tablet") {
        if (width >= 600 && width < 1264) {
          setIsBreakpoint(true);
        } else {
          setIsBreakpoint(false);
        }
      } else if (breakpoint === "mobile") {
        if (width < 600) {
          setIsBreakpoint(true);
        } else {
          setIsBreakpoint(false);
        }
      } else if (breakpoint === "notDesktop") {
        if (width < 960) {
          setIsBreakpoint(true);
        } else {
          setIsBreakpoint(false);
        }
      }
    } else {
      setIsBreakpoint(false);
    }
  }, [width]);

  return isBreakpoint;
}
