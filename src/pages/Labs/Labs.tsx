import classes from "./Labs.module.scss";
import FloatingImages from "./FloatingImages";

export default function Labs() {
  return (
    <div className={classes["labs"]}>
      <div className={classes["labs__inner-container"]}>
        <div className={classes["labs__hero"]}>
          <p className={classes["labs__hero-title"]}>Laboratory</p>
          <FloatingImages />
        </div>
      </div>
    </div>
  );
}
