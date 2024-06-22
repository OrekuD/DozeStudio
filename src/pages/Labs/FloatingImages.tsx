import React from "react";
import classes from "./Labs.module.scss";
import image1 from "../../assets/images/labs/1.png";
import image2 from "../../assets/images/labs/2.gif";
import image3 from "../../assets/images/labs/3.png";
import image4 from "../../assets/images/labs/4.png";
import image5 from "../../assets/images/labs/5.jpg";
import image6 from "../../assets/images/labs/6.jpg";
import image7 from "../../assets/images/labs/7.jpg";
import image8 from "../../assets/images/labs/8.jpg";
import image9 from "../../assets/images/labs/9.jpg";
import image10 from "../../assets/images/labs/10.jpg";
import image11 from "../../assets/images/labs/11.png";
import image12 from "../../assets/images/labs/12.webp";
import image13 from "../../assets/images/labs/13.jpg";
import image14 from "../../assets/images/labs/14.png";
import image15 from "../../assets/images/labs/15.png";
import image16 from "../../assets/images/labs/16.png";
import image17 from "../../assets/images/labs/17.png";
import image18 from "../../assets/images/labs/18.png";
import image19 from "../../assets/images/labs/19.png";
import image20 from "../../assets/images/labs/20.png";
import image21 from "../../assets/images/labs/21.png";
import image22 from "../../assets/images/labs/22.png";
import image23 from "../../assets/images/labs/23.webp";
import image24 from "../../assets/images/labs/24.png";
import image25 from "../../assets/images/labs/25.png";
import image26 from "../../assets/images/labs/26.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
];

export default function FloatingImages() {
  const initialPositionRef = React.useRef({ x: 0, y: 0 });
  const isTrackingRef = React.useRef(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const countRef = React.useRef(0);

  function insertImage(event: MouseEvent) {
    if (!containerRef.current) return;
    const i =
      countRef.current < images.length
        ? countRef.current
        : countRef.current % images.length;

    const image = images[i];

    const imageElement = document.createElement("img");
    imageElement.src = image;
    imageElement.style.top = `${event.clientY}px`;
    imageElement.style.left = `${event.clientX}px`;
    imageElement.setAttribute("data-index", `${countRef.current}`);

    containerRef.current.appendChild(imageElement);

    setTimeout(() => {
      const direction = Math.random() < 0.5 ? -1 : 1;
      imageElement.style.transform = `translate(-50%, -50%) scale(0.8) rotate(${direction * 1.2}deg)`;

      const removeIndex = countRef.current - 7;
      if (removeIndex < 0) return;

      const removeImage = document.querySelector<HTMLElement>(
        `[data-index='${removeIndex}']`,
      );

      if (removeImage) {
        removeImage.style.opacity = "0";
        removeImage.style.transform = `translate(-50%, -50%) scale(0.85) rotate(${direction * 1.2}deg)`;
        setTimeout(() => {
          removeImage.remove();
        }, 300);
      }
    }, 10);

    countRef.current = countRef.current + 1;
  }

  React.useEffect(() => {
    function onMouseMove(event: MouseEvent) {
      if (!isTrackingRef.current) {
        initialPositionRef.current = { x: event.clientX, y: event.clientY };
        isTrackingRef.current = true;
        return;
      }

      const deltaX = Math.abs(event.clientX - initialPositionRef.current.x);
      const deltaY = Math.abs(event.clientY - initialPositionRef.current.y);

      if (deltaX >= 50 || deltaY >= 50) {
        // console.log("Mouse moved 50 pixels");
        insertImage(event);
        isTrackingRef.current = false;
      }
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  React.useEffect(() => {
    function preloadImages() {
      images.map((image) => {
        const img = new Image();
        img.src = image;
      });
    }

    preloadImages();
  }, []);

  return (
    <div className={classes["labs__floating-images"]} ref={containerRef} />
  );
}
