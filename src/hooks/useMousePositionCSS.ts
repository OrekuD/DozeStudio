import React from "react";

/***

adds --mouse-x css variable based on mouse x position

adds --mouse-y css variable based on mouse y position

***/
export default function useMousePositionCSS() {
  React.useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement | null;
    if (!root) return;

    root.style.setProperty("--mouse-x", `-200px`);
    root.style.setProperty("--mouse-y", `-200px`);

    const onMouseMove = (e: MouseEvent) => {
      root.style.setProperty("--mouse-x", `${e.clientX}px`);
      root.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);
}
