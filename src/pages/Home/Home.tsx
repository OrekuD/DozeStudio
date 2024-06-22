import classes from "./Home.module.scss";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  useMotionValueEvent,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import React from "react";
import CursorStates from "../../components/Cursor/CursorStates";
import { cubicBezier } from "framer-motion/dom";
import showreel from "../../assets/videos/Showreel_2024_light.mp4";
import nothingVideo from "../../assets/videos/Nothing_son_discal_mp4_clean_dcd9a04d5c.mp4";
import mustelaVideo from "../../assets/videos/MUSTELA_POST_1_1_2bea0d4afe.mp4";
import a24Video from "../../assets/videos/30_Final_Scene_a2de4c778e.mp4";
import cmVideo from "../../assets/videos/credit_mutuel_equity_1080p_773f8553d2.mp4";
import citroenVideo from "../../assets/videos/240110_CITROEN_VIDEO_RS_3593a0161c.mp4";
import dampaVideo from "../../assets/videos/thunder_mockup_i1_19500c0127.mp4";
import torticoliaVideo from "../../assets/videos/torticolia_THUMB_12c5dfdea2.mp4";
import farcryVideo from "../../assets/videos/220829_FARCRY_LONG_COMPO_04_4ef62f0520.mp4";
import perspectiveVideo from "../../assets/videos/LONG_FILM_e47e59493d.mp4";
import martinVideo from "../../assets/videos/MASTER_4c319c010f.mp4";
import nopeVideo from "../../assets/videos/DOZE_nope_branding_MASTER_25ca6ae2c4.mp4";
import heiwaVideo from "../../assets/videos/HEIWA_DIRECTORSCUT_3_39f96aecb4.mp4";
import mobileVideo from "../../assets/videos/20210501_Mastre_Mobile_M_01_95897c3ad5.mp4";
import Footer from "../../components/Footer/Footer";

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

const projects = [
  {
    title: "Mustela",
    video: mustelaVideo,
    service: "Music Video",
    description:
      "Collaboration on Martin Solveig and Raphaella - Allo Allo music video, blending multiple artistic techniques for a visually rich and dynamic creation.",
  },
  {
    title: "A24 - WYFSTW",
    video: a24Video,
    service: "Branding & Identity",
    description:
      "Dynamic and visually appealing social media campaign for When You Finish Saving The World",
  },
  {
    title: "CM | Equity",
    video: cmVideo,
    service: "Motion Design",
    description:
      "Doze Studio and The Links agency developed a dynamic social media campaign for Crédit Mutuel Equity, aiming to highlight their network of over 350 executives. We focused on a strong brand identity and created adaptable video scripts to minimize future costs.",
  },
  {
    title: "Citroën ë-C3",
    video: citroenVideo,
    service: "Advertising",
    description:
      "Innovative and immersive advertising campaign for Citroën's new electric ë-C3, featuring dynamic motion designs projected onto the vehicle to accentuate its design and electric nature.",
  },
  {
    title: "Dampa",
    video: dampaVideo,
    service: "Scenography & Music Videos",
    description: `Collaboration on "Thunderball" EP features a music video with a unique visual language, employing a custom alphabet and dynamic set design that merge innovative visuals with immersive musical experience.`,
  },
  {
    title: "Torticolia",
    video: torticoliaVideo,
    service: "Personal Project",
    description: `"Torticolia" is an experimental project by Doze Studio that uses an immersive 360° video to dynamically showcase its creative work.`,
  },
  {
    title: "Farcry 6",
    video: farcryVideo,
    service: "Motion Design",
    description: `Title animation 'Lost Between Worlds' for FarCry 6 in-game and for its promotional campaign.`,
  },
  {
    title: "Perspective Fund",
    video: perspectiveVideo,
    service: "Branding & Identity",
    description:
      "Rebranding Perspective Found with anamorphic illusions, emphasizing transformative storytelling and social inclusivity.",
  },
  {
    title: "Martin Solveig",
    video: martinVideo,
    service: "Music Video",
    description:
      "Collaboration on Martin Solveig and Raphaella - Allo Allo music video, blending multiple artistic techniques for a visually rich and dynamic creation.",
  },
  {
    title: "Nope Collectif",
    video: nopeVideo,
    service: "Branding & Identity",
    description:
      "NOPE collective, launched by Doze Studio, reimagines co-working by melding design and animation in a creative hub that enhances collaboration and fosters a unique visual identity.",
  },
  {
    title: "Heiwa",
    video: heiwaVideo,
    service: "Advertising",
    description:
      "A heat pump is seamlessly integrated into a Jouy-style wallpaper, animating tranquil scenes and transforming the appliance into a stylish and functional part of the home decor.",
  },
  {
    title: "Mobil M",
    video: mobileVideo,
    service: "Advertising",
    description: `3D motion design video for the Mobil M "Thor & Sparkle" furniture line, showcasing its versatile and transformative capabilities through vivid colors and smooth animations to inspire creative commercial space designs.`,
  },
  {
    title: "Nothing Ear",
    video: nothingVideo,
    service: "Advertising",
    description:
      "Proposal for the Nothing Ear (1) headphones, emphasizing their transparent, minimalist design and user-friendly features.",
  },
];

export default function HomePage() {
  const { scrollY } = useScroll();
  const [hoveredIndex, setHoveredIndex] = React.useState(-1);
  const projectsRef = React.useRef<HTMLDivElement>(null);

  const translateY = useTransform(
    scrollY,
    [0, window.innerHeight],
    [0, window.innerHeight * 0.7],
  );

  const activeProject = React.useMemo(() => {
    if (hoveredIndex < 0) return null;

    return projects[hoveredIndex];
  }, [hoveredIndex]);

  React.useEffect(() => {
    projects.forEach(({ video }) => {
      const videoEl = document.createElement("video");
      videoEl.src = video;
    });
  }, []);

  return (
    <div className={classes["home"]}>
      <div className={classes["home__hero"]}>
        <motion.div
          className={classes["hero__background-showreel"]}
          style={{
            translateY,
          }}
        >
          <video autoPlay controls={false} muted loop>
            <source src={showreel} type="video/mp4" />
          </video>
        </motion.div>
        <p>© 2024 DOZE.STD</p>
        <p className={classes["title"]}>Shaping brands → Crafting motion →</p>
      </div>
      <div className={classes["home__projects"]} ref={projectsRef}>
        <div className={classes["projects__inner-content"]}>
          <div className={classes["projects__left"]}>
            <div className={classes["projects__left-inner"]}>
              <p className={classes["projects__title"]}>Projects</p>
              <AnimatePresence mode="wait">
                {activeProject && (
                  <motion.div
                    className={classes["projects__active-project"]}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                      transition: {
                        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
                        duration: 0.3,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
                        duration: 0.3,
                      },
                    }}
                  >
                    <div className={classes["projects__active-video"]}>
                      <video autoPlay loop controls={false} muted>
                        <source src={activeProject.video} />
                      </video>
                    </div>
                    <p className={classes["projects__active-service"]}>
                      {activeProject.service}
                    </p>
                    <p className={classes["projects__active-description"]}>
                      {activeProject.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={classes["projects__right"]} id="projects">
            {projects.map(({ title }, index) => (
              <Project
                hoveredIndex={hoveredIndex}
                index={index}
                setHoveredIndex={setHoveredIndex}
                title={title}
                key={title}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer variant="black" sticky />
    </div>
  );
}

function Project({
  index,
  title,
  hoveredIndex,
  setHoveredIndex,
}: {
  hoveredIndex: number;
  setHoveredIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  title: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useMotionValue(0);

  const inView = useInView(ref);

  useMotionValueEvent(scrollY, "change", () => {
    if (inView) {
      opacity.set(clamp(opacity.get() + 0.01, 0, 1));
    } else {
      opacity.set(0);
    }
  });

  return (
    <motion.div
      key={title}
      ref={ref}
      style={{
        opacity,
      }}
      onMouseEnter={() => {
        setHoveredIndex(index);
        CursorStates.link();
      }}
      onMouseLeave={() => {
        setHoveredIndex(-1);
        CursorStates.reset();
      }}
      className={classes["projects__project"]}
    >
      <p
        className={classes["project__title"]}
        style={{
          opacity: hoveredIndex === -1 || index === hoveredIndex ? 1 : 0.2,
        }}
      >
        {title}
      </p>
    </motion.div>
  );
}
