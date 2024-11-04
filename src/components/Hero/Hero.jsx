import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Chandan kumar</h1>
        <p className={styles.description}>
          <span className="text-3xl text-teal-100 font-serif">A</span> dedicated
          astrophysicist driven by a profound fascination with the cosmos and
          embarking on a journey to unravel the mysteries of the universe.
        </p>
        <a
          download="Resume.pdf"
          href="/files/Resume.pdf"
          className="font-general-medium flex p-3 justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-teal-300 text-gray-800 hover:text-stone-900 font-semibold duration-500"
          aria-label="Download Resume"
        >
          <span className="text-sm sm:text-lg duration-100">
            Download Resume
          </span>
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Chandan kumar"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
