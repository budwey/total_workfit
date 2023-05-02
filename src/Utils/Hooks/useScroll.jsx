import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

export function useScroll() {
  const getScrollPercentage = () => {
    const h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";

    const scrollPercent = Math.round(
      ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
    );

    return isNaN(scrollPercent) ? "" : scrollPercent;
  };

  const [scrollPercentage, setScrollPercentage] = useState(
    getScrollPercentage()
  );
  const delay = 6;

  const listener = () => {
    setScrollPercentage(getScrollPercentage());
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(listener, delay));
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollPercentage,
  };
}

export default useScroll;
