import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/skills/Resume-Bzs8Nt7N.pdf";
    link.download = "Resume-Bzs8Nt7N.pdf";
    link.click();
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Chandan</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <button onClick={handleDownload} className={styles.contactBtn}>
          Download Resume
        </button>
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
