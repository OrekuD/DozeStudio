import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";
import Header from "../Header/Header";
import Cursor from "../Cursor/Cursor";
import InactivityOverlay from "../InactivityOverlay/InactivityOverlay";
import IntroTransition from "../IntroTransition/IntroTransition";
import PageTransition from "../PageTransition/PageTransition";
import ScrollToAnchor from "../ScrollToAnchor";
import usePageTransitionStore from "../../store/pageTransitionStore";
import React from "react";
import load from "../../assets/videos/load.mp4";
import logoAnim from "../../assets/videos/logoAnim.mp4";
import showreel from "../../assets/videos/Showreel_2024_light.mp4";
import underScribbleProject from "../../assets/videos/underScribbleProject.mp4";

const assets = [showreel, load, logoAnim, underScribbleProject];

export default function Layout() {
  const initial = React.useRef(true);
  const pageTransitionStore = usePageTransitionStore();

  React.useEffect(() => {
    initial.current = false;
  }, []);

  React.useEffect(() => {
    assets.forEach((asset) => {
      const video = document.createElement("video");
      video.src = asset;
    });
  }, []);

  return (
    <div className={classes["container"]}>
      <Header />
      <Cursor />
      <InactivityOverlay />
      <IntroTransition />
      <ScrollToAnchor />
      {pageTransitionStore.isVisible ? (
        <PageTransition initialRef={initial} />
      ) : null}
      <Outlet />
    </div>
  );
}
