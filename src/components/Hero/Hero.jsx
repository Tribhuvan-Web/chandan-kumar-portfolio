import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { FiArrowDownCircle } from "react-icons/fi";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Chandan</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a
          download="Resume.pdf"
          href="/files/Resume.pdf"
          className="font-general-medium flex p-3 justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-teal-700 text-gray-800 hover:text-white duration-500"
          aria-label="Download Resume"
        >
          <span className="text-sm sm:text-lg font-general-medium duration-100">
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
