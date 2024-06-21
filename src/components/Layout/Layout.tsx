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

export default function Layout() {
  const initial = React.useRef(true);
  const pageTransitionStore = usePageTransitionStore();

  React.useEffect(() => {
    initial.current = false;
  }, []);

  return (
    <div className={classes["container"]}>
      <Header />
      <Cursor />
      {/* <InactivityOverlay /> */}
      <IntroTransition />
      <ScrollToAnchor />
      {pageTransitionStore.isVisible ? (
        <PageTransition initialRef={initial} />
      ) : null}
      <Outlet />
    </div>
  );
}
