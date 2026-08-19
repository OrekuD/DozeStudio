import classes from "./IntroTransition.module.scss";
import video from "../../assets/videos/load.mp4";
import React from "react";

export default function IntroTransition() {
  const ref = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    const video = videoRef.current;

    function onVideoEnded() {
      if (!video) return;
      video.style.opacity = "0";
      setTimeout(() => {
        if (!ref.current) return;
        ref.current.style.transform = "translateY(-100%)";
        document.body.style.overflow = "auto";
      }, 700);
    }

    video?.addEventListener("ended", onVideoEnded);

    return () => {
      video?.removeEventListener("ended", onVideoEnded);
    };
  }, [videoRef]);

  return (
    <div className={classes["intro-transition"]} ref={ref}>
      <video autoPlay muted controls={false} ref={videoRef}>
        <source src={video} />
      </video>
    </div>
  );
}
