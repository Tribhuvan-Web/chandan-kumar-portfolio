import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Chandan kumar</h1>
        <p className={styles.description}>
          <span className="text-3xl text-teal-100 text-start font-serif">A</span> dedicated
          astrophysicist driven by a profound fascination with the cosmos and
          embarking on a journey to unravel the mysteries of the universe.
        </p>
        <a
          download="Resume.pdf"
          href="/files/Resume.pdf"
          aria-label="Download Resume"
        >
          <span className={styles.downloadBtn}>Download Resume</span>
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Chandan kumar"
        className={`${styles.heroImg}`}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
