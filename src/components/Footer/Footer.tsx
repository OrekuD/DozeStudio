import { Logo } from "../../icons/Icons";
import classes from "./Footer.module.scss";

type FooterProps = {
  variant: "black" | "white";
  sticky?: boolean;
};

export default function Footer(props: FooterProps) {
  return (
    <footer
      className={classes["footer"]}
      style={{
        background: props.variant,
        color: props.variant === "black" ? "white" : "black",
        position: props.sticky ? "sticky" : undefined,
      }}
    >
      <div className={classes["footer__wrapper"]}>
        <div className={classes["footer__row"]}>
          <div>
            <p className={classes["footer__section-title"]}>project inquires</p>
            <p>Ready to work with us ?</p>
            <p>
              Reach out to discuss how we can help you build a strong digital
              brand presence.
            </p>
          </div>
          <Logo className={classes["footer__logo"]} />
        </div>
        <div className={classes["footer__row"]}>
          <a href="" className={classes["footer__mailto"]}>
            <p>hello@doze-studio.com</p>
          </a>
          <p>Legals</p>
        </div>
        <div className={classes["footer__row"]}>
          <div>
            <p className={classes["footer__section-title"]}>our office</p>
            <p>Doze Studio</p>
            <p>1b rue Baron</p>
            <p>44 000 Nantes</p>
            <p>France</p>
          </div>
          <div className={classes["footer__align-right"]}>
            <p className={classes["footer__section-title"]}>networks</p>
            <a href="">
              <p>+33 2 85 52 19 62</p>
            </a>
            <p>▬</p>
            <a href="">
              <p>Instagram</p>
            </a>
            <a href="">
              <p>Linkedin</p>
            </a>
            <a href="">
              <p>Giphy</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
