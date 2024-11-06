import React from "react";
import styles from "./Hero.module.css";

const DownloadResume = () => {
  return (
    <div>
      <a
        download="Resume.pdf"
        href="/files/Resume.pdf"
        aria-label="Download Resume"
      >
        <span className={styles.downloadBtn}>Download Resume</span>
      </a>
    </div>
  );
};

export default DownloadResume;
