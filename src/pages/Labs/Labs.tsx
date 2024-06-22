import classes from "./Labs.module.scss";
import { motion, cubicBezier } from "framer-motion";
import FloatingImages from "./FloatingImages";

export default function Labs() {
  return (
    <motion.div
      className={classes["labs"]}
      initial={{
        translateY: 200,
      }}
      animate={{
        translateY: 0,
        transition: {
          ease: cubicBezier(0.16, 1, 0.32, 1),
          duration: 1,
          delay: 1,
        },
      }}
    >
      <div className={classes["labs__inner-container"]}>
        <div className={classes["labs__hero"]}>
          <p className={classes["labs__hero-title"]}>Laboratory</p>
          <FloatingImages />
        </div>
      </div>
    </motion.div>
  );
}
