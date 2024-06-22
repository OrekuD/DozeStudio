import classes from "./InactivityOverlay.module.scss";
import video from "../../assets/videos/underScribbleProject.mp4";
import React from "react";

export default function InactivityOverlay() {
  const ref = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    let timeoutId: number;

    function resetTimeout() {
      clearTimeout(timeoutId);
      if (!ref.current) return;
      ref.current.style.opacity = "0";

      timeoutId = setTimeout(() => {
        if (!ref.current || !videoRef.current) return;
        videoRef.current.currentTime = 0;
        videoRef.current.load();
        ref.current.style.opacity = "1";
      }, 1000 * 10);
    }

    document.addEventListener("mousedown", resetTimeout);
    document.addEventListener("mousemove", resetTimeout);
    document.addEventListener("keydown", resetTimeout);
  }, []);

  return (
    <div className={classes["inactivity-overlay"]} ref={ref}>
      <video autoPlay muted controls={false} ref={videoRef}>
        <source src={video} />
      </video>
    </div>
  );
}
