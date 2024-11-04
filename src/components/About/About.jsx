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
            I completed Caltech's non-credit online course, The Evolving
            Universe, on Coursera. This course explored the formation of stars,
            galaxies, and cosmic evolution, giving me a strong foundation in
            astrophysics concepts. Earning the certificate enriched my
            understanding of the universe’s history and strengthened my passion
            for exploring cosmic mysteries.
          </p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/MIT Quantum Physics II (Barton Zwiebach).jpg"
            alt=""
          />
          <p>
            I completed the MIT Quantum Physics II online course by Barton
            Zwiebach through Mindluster.com. This course advanced my
            understanding of quantum mechanics, covering topics such as
            wave-particle duality, quantum states, and operators. I gained
            valuable insights into the mathematical framework of quantum theory,
            enhancing my knowledge for future studies in physics.
          </p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/MIT Psychology Certificate (Frank Schilbach).jpg"
            alt=""
          />
          <p>
            I completed an online MIT Psychology course through Mindluster.com,
            earning a certification for my efforts. The course explored various
            psychological theories, cognitive processes, and behavioral
            patterns. I learned about the impact of emotions, motivations, and
            social interactions on human behavior. Additionally, I gained
            insights into psychological research methods, enhancing my
            understanding of how psychological principles can be applied to
            various aspects of life.
          </p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/MIT Physics III Vibrations, Waves Walter Lewin.jpg"
            alt=""
          />
          <p>
            I completed the MIT Physics III: Vibrations and Waves online course
            taught by the renowned Professor Walter Lewin on mindluster.com,
            earning a certification for my efforts. This course delved into the
            fundamental principles of oscillations, wave motion, and sound. I
            gained a deep understanding of harmonic motion, wave properties, and
            the mathematical descriptions of waves.
          </p>
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
          <p>
            I completed an online course in Astronomy from Mindluster.com,
            earning a certificate upon completion. This course covered celestial
            phenomena, planetary systems, and the universe's structure. I gained
            a deeper understanding of astronomical concepts, observational
            techniques, and the significance of recent discoveries, enhancing my
            passion for exploring the cosmos.
          </p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/Linear Algebra for Computer Scientist's.jpg"
            alt=""
          />
          <p>
            I completed an online course in Linear Algebra for Computer
            Scientists through Mindluster.com. This course provided insights
            into matrix operations, vector spaces, and eigenvalues, emphasizing
            their applications in computer science. I gained essential skills
            for understanding algorithms, machine learning, and data analysis,
            enhancing my analytical capabilities in computational fields.
          </p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/Cosmology (Quantum & Particle Physics).jpg"
            alt=""
          />
          <p>
            I completed an online course in Cosmology, focusing on quantum and
            particle physics, through Mindluster.com. The course deepened my
            understanding of the universe's structure, the Big Bang theory, and
            cosmic microwave background radiation. I also explored the
            fundamental particles and forces that govern the universe, enriching
            my knowledge in astrophysics.
          </p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/Certificate on Google Analytics.jpg"
            alt=""
          />
          <p>
            I completed a Google Analytics online course through the Great
            Learning app, earning a certification for my efforts. This course
            taught me how to track and analyze website traffic, understand user
            behavior, and measure the effectiveness of marketing campaigns. I
            also learned to create detailed reports, enabling data-driven
            decision-making for optimizing online strategies and enhancing user
            experiences.
          </p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/''ISRO START Programme'' Certificate.jpg"
            alt=""
          />
          <p>
            I was invited to NSSS 2024 after scoring an A+ in ISRO's START
            training program, ranking in the top five candidates. At the
            symposium in Feb, 2024 at Goa University, I presented a presentation
            on advancements in space exploration. The experience included
            engaging discussions and workshops, deepening my understanding of
            astrophysics and inspiring my future career in space science.
          </p>
        </div>
        <div className={styles.item}>
          <img
            src="assets/certificates/''Astrophysics Certificate'' IIT Madras_page-0001.jpg"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Atque blanditiis dolorum doloremque
            sequi eum, dolor tempora dignissimos amet quae nemo, fugiat iste,
            natus non. Distinctio nesciunt obcaecati odit quis? Voluptatibus
            dolores porro, illum blanditiis tempora, culpa placeat voluptas
            adipisci ratione aspernatur, accusantium unde veniam. Quas corrupti
            error eligendi omnis facilis. adipisicing elit...
          </p>
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
