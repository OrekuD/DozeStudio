import classes from "./Labs.module.scss";
import { cubicBezier, motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import { ArrowDownIcon } from "../../icons/Icons";
import React from "react";

export default function Labs() {
  return (
    <motion.div
      className={classes["labs"]}
      // initial={{
      //   translateY: 200,
      // }}
      // animate={{
      //   translateY: 0,
      //   transition: {
      //     ease: cubicBezier(0.16, 1, 0.32, 1),
      //     duration: 1,
      //     delay: 1,
      //   },
      // }}
    >
      <div className={classes["labs__inner-container"]}>
        <div className={classes["labs__hero"]}>
          <p className={classes["labs__hero-title"]}>About</p>
        </div>
      </div>
    </motion.div>
  );
}
