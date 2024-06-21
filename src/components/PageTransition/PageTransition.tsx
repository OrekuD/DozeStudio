import classes from "./PageTransition.module.scss";
import React from "react";
import { useLocation } from "react-router-dom";
import { cubicBezier, motion, useAnimation } from "framer-motion";
import usePageTransitionStore from "../../store/pageTransitionStore";

const headerHeight = 150;

type PageTransitionProps = {
  initialRef: React.MutableRefObject<boolean>;
};

export default function PageTransition(props: PageTransitionProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const location = useLocation();
  const animation = useAnimation();
  const pageTransitionStore = usePageTransitionStore();

  React.useEffect(() => {
    async function playPageTransition() {
      if (props.initialRef.current) return;

      document.body.style.overflow = "hidden";
      await animation.start("reset");
      await animation.start("animateIn");
      if (location.hash) {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: elementPosition - headerHeight * 2,
            behavior: "instant",
          });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      await animation.start("animateOut");
      document.body.style.overflow = "auto";
      pageTransitionStore.setVisibility(false);
    }
    playPageTransition();
  }, [
    location.pathname,
    animation,
    props.initialRef,
    pageTransitionStore,
    location,
  ]);

  return (
    <div className={classes["page-transition"]} ref={ref}>
      <motion.div
        className={classes["page-transition__cover"]}
        animate={animation}
        variants={{
          animateIn: {
            translateY: "0%",
            transition: {
              duration: 1,
              ease: cubicBezier(0.16, 1, 0.32, 1),
            },
          },
          animateOut: {
            translateY: "-100%",
            transition: {
              duration: 1,
              ease: cubicBezier(0.16, 1, 0.32, 1),
            },
          },
          reset: {
            translateY: "100%",
            transition: {
              duration: 0,
            },
          },
        }}
      />
    </div>
  );
}
