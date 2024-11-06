import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import DownloadResume from "./DownloadResume";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {" "}
          <div className="mb-4">Hi There!</div>
          I'm Chandan kumar <br />
          (Chet Narayan)
        </h1>
        <p className={styles.description}>
          <span className="text-4xl text-teal-100 text-start font-serif">
            An
          </span>
          &nbsp;Aspiring astrophysicist driven by a profound fascination with
          the cosmos and embarking on a journey to unravel the mysteries of the
          universe.
        </p>
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
