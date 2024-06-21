import classes from "./IntroTransition.module.scss";
import video from "../../assets/videos/load.mp4";
import React from "react";

export default function IntroTransition() {
  const ref = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    videoRef.current?.addEventListener("ended", () => {
      if (!ref.current) return;
      ref.current.style.transform = "translateY(-100%)";
      document.body.style.overflow = "auto";
    });
  }, [videoRef]);

  return (
    <div className={classes["intro-transition"]} ref={ref}>
      <video autoPlay muted controls={false} ref={videoRef}>
        <source src={video} />
      </video>
    </div>
  );
}
