import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Chandan kumar"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
      <hr />
      <div className={styles.certificates}>
        <div className={styles.item}>
          <img
            src="assets/certificates/The Evolving Universe CalTech S. George Djorgo.jpg"
            alt=""
          />
          <p>
            Lorem ipsumkkkkkk dolor sit, amet consectetur adipisicing elit...
          </p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/MIT Quantum Physics II (Barton Zwiebach).jpg"
            alt=""
          />
          <p>Lorem ipsum dnnnolor sit, amet consectetur adipisicing elit...</p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/MIT Psychology Certificate (Frank Schilbach).jpg"
            alt=""
          />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/MIT Physics III Vibrations, Waves Walter Lewin.jpg"
            alt=""
          />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/Mindluster Physics Certificate.jpg"
            alt=""
          />
          <p>
            I completed an online physics course from Mindluster.com, where I
            gained a strong understanding of fundamental physics concepts,
            including mechanics, electromagnetism, and thermodynamics. The
            course deepened my analytical skills and ability to apply physics
            principles to real-world problems, enhancing my preparation for
            advanced studies in astrophysics.
          </p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/Mindluster Astronomy Certificate.jpg"
            alt=""
          />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/Linear Algebra for Computer Scientist's.jpg"
            alt=""
          />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/Cosmology (Quantum & Particle Physics).jpg"
            alt=""
          />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/Certificate on Google Analytics.jpg"
            alt=""
          />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/''ISRO START Programme'' Certificate.jpg"
            alt=""
          />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/''Astrophysics Certificate'' IIT Madras_page-0001.jpg"
            alt=""
          />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/''Hydro-Meteorological Disaster'' ISRO Certi.jpg"
            alt=""
          />
          <p>
            In the ISRO START Programme, I gained hands-on experience in space
            science , working with expert guidance from ISRO scientist's. I
            ranked in the top 5 on the final exam, received a certificate of
            achievement, and attended NSSS 2024, presenting a conference paper
            on Space Science
          </p>
        </div>
      </div>
    </section>
  );
};
