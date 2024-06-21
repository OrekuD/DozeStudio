import { LogoText } from "../../icons/Icons";
import classes from "./Header.module.scss";
import logoAnim from "../../assets/videos/logoAnim.mp4";
import React from "react";
import CursorStates from "../Cursor/CursorStates";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "../Link";

export default function Header() {
  const timeRef = React.useRef<HTMLSpanElement>(null);
  const linksRef = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    if (!linksRef.current) return;
    if (scrollY.get() > 100) {
      linksRef.current.style.opacity = "0";
      linksRef.current.style.transform = "translateY(-100%)";
      linksRef.current.style.pointerEvents = "none";
    } else {
      linksRef.current.style.opacity = "1";
      linksRef.current.style.transform = "translateY(0%)";
      linksRef.current.style.pointerEvents = "auto";
    }
  });

  React.useEffect(() => {
    function setTime() {
      const date = new Date();
      const formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(date);
      timeRef.current!.innerText = formattedTime;
    }

    setTime();
    setInterval(() => {
      setTime();
    }, 60 * 1000);
  }, []);

  return (
    <header className={classes["header"]}>
      <div className={classes["header__wrapper"]}>
        <Link
          to="/"
          onMouseOver={CursorStates.link}
          onMouseLeave={CursorStates.reset}
        >
          <div className={classes["header__logo"]}>
            <LogoText className={classes["logo"]} />
            <video loop autoPlay muted controls={false}>
              <source src={logoAnim} type="video/mp4" />
            </video>
          </div>
        </Link>
        <div className={classes["header__links"]} ref={linksRef}>
          <Link
            to="/#projects"
            onMouseOver={CursorStates.link}
            onMouseLeave={CursorStates.reset}
          >
            Projects
          </Link>
          <p>,</p>
          <Link
            to="/about"
            onMouseOver={CursorStates.link}
            onMouseLeave={CursorStates.reset}
          >
            About
          </Link>
          <p>,</p>
          <Link
            to="/labs"
            onMouseOver={CursorStates.link}
            onMouseLeave={CursorStates.reset}
          >
            Labs
          </Link>
        </div>
        <div className={classes["header__contact"]}>
          <p className={classes["time"]}>
            fr:
            <span ref={timeRef}></span>
          </p>
          <a href="">Let's talk</a>
        </div>
        <button className={classes["header__mobile-menu-button"]}>
          <p>Menu</p>
        </button>
      </div>
    </header>
  );
}
