import { useEffect, useState } from "react";

export function useWindowScroll() {
  const [scroll, setScroll] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const { abort, signal } = new AbortController();
    window.addEventListener(
      "scroll",
      () => {
        setScroll([window.screenX, window.scrollY]);
      },
      { signal },
    );

    return () => abort();
  }, []);

  return {
    scrollX: scroll[0],
    scrollY: scroll[1],
  };
}
