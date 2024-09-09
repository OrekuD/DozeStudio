import classes from "./About.module.scss";
import Footer from "../../components/Footer/Footer";
import { ArrowDownIcon } from "../../icons/Icons";
import React from "react";
import { references, images } from "./data";

export default function About() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  React.useEffect(() => {
    if (!canvasRef.current) return;
    const canvasContext = canvasRef.current.getContext("2d");
    if (!canvasContext) return;

    const canvasWidth = canvasRef.current.parentElement!.clientWidth;
    const canvasHeight = canvasRef.current.parentElement!.clientHeight;
    canvasRef.current.width = canvasWidth;
    canvasRef.current.height = canvasHeight;
    const img = new Image();

    const loadImage = (id: number) => {
      if (id >= images.length) {
        img.src = images[0];
      } else {
        img.src = images[id];
      }
    };

    const drawImage = () => {
      canvasContext.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    };

    img.onload = drawImage;
    loadImage(0);

    const updateCanvas = () => {
      const id = Math.floor(
        (window.scrollY /
          (document.body.scrollHeight - document.body.clientHeight)) *
          367,
      );
      loadImage(id);
    };

    const onScroll = () => {
      requestAnimationFrame(updateCanvas);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [canvasRef]);

  return (
    <div className={classes["about"]}>
      <div className={classes["about__inner-container"]}>
        <div className={classes["about__hero"]}>
          <p className={classes["about__hero-title"]}>About</p>
          <p>
            <i>Doze</i> is a design studio specializing in{" "}
            <b>advertising animation</b> and the creation of{" "}
            <b>dynamic visual identities</b>. Founded in 2012, we skillfully
            blend traditional animation with new technologies to produce
            captivating and effective works. Our creative approach to motion
            design enhances the uniqueness of each brand we work with.
          </p>
          <p>
            Our multidisciplinary team offers <b>complete solutions</b>, from
            design to post-production, including branding, 2D/3D animation,
            visual effects, and immersive experiences. We manage projects of all
            sizes with meticulous attention to detail. As co-organizers of the
            Motion Motion festival since 2017, we promote motion graphic design
            in France, expanding our network and making this field accessible to
            a broader audience. Through our Nope Collectif, based in Nantes, we
            also host a network of talented freelancers to expand our
            capabilities.
          </p>
          <p>
            At <i>Doze</i>, we blend artistic direction, technical expertise,
            and creativity to bring projects to life with soul and character,
            ensuring that each creation is not only seen but truly felt.
          </p>
        </div>
        <div className={classes["about__canvas-container"]}>
          <ArrowDownIcon size={20} color="black" />
          <canvas
            style={{
              width: "100%",
              height: "100%",
            }}
            ref={canvasRef}
          ></canvas>
          {/* <img src="https://doze.studio/sequence/about1.webp" alt="" /> */}
        </div>
        <div className={classes["about__references"]}>
          <p className={classes["about__references-title"]}>References</p>
          <div className={classes["about__references-list"]}>
            {references.map((reference) => (
              <p key={reference}>{reference}</p>
            ))}
          </div>
        </div>
      </div>
      <Footer variant="white" />
    </div>
  );
}
