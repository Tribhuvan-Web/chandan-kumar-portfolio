import React from "react";
import styles from "./About.module.css";

const Certificate = () => {
  return (
    <>
      <div id="certificate" className="flex flex-col items-center mt-2">
        <div className="flex text-center justify-center items-center mt-3 text-3xl font-mono text-white">
          Honors
        </div>
      </div>
      <hr class="my-8 border-t-2 border-white dark:border-white w-9/10 m-auto " />
      <div className={`${styles.certificates} w-4/5 mx-auto`}>
        <div className={`${styles.item} flex flex-col items-center`}>
          <img
            className="rounded-xl w-full mb-4"
            src="/certificates/''ISRO START Programme'' Certificate.jpg"
            alt=""
          />
          <p>
            In the ISRO START Programme, I gained hands-on experience in space
            science , working with expert guidance from ISRO scientist's. I
            ranked in the top 5 on the final exam, received a certificate of
            achievement, and attended NSSS 2024, presenting a conference paper
            on Space Science.
          </p>
        </div>
        <div className={`${styles.item} flex flex-col items-center`}>
          <img
            className="rounded-xl w-full mb-4"
            src="/certificates/''Hydro-Meteorological Disaster'' ISRO Certi.jpg"
            alt=""
          />
          <p>
            I completed the IIRS ISRO Massive Open Online Course on Advances in
            Geospatial Techniques for Monitoring and Modelling
            Hydro-Meteorological Disasters. I gained insights into mapping
            flood-prone areas, modeling climate impacts, and utilizing remote
            sensing for disaster preparedness. This experience enhanced my
            technical skills and deepened my understanding of geospatial
            applications in hydro-meteorology.
          </p>
        </div>
        <div className={`${styles.item} flex flex-col items-center`}>
          <img
            className="rounded-xl w-full mb-4"
            src="/certificates/''Astrophysics Certificate'' IIT Madras_page-0001.jpg"
            alt=""
          />
          <p>
            I earned a certificate from IIT Madras for completing an online
            course on Astrophysics. This course deepened my understanding of
            cosmology, stellar evolution, and the structure of galaxies. It
            enhanced my analytical skills, provided insights into complex space
            phenomena, and encouraged me to further explore the mysteries of our
            universe.
          </p>
        </div>
        <div className={styles.item}>
          <img
            src="/certificates/The Evolving Universe CalTech S. George Djorgo.jpg"
            alt=""
            className="rounded-xl"
          />
          <p>
            I completed Caltech's non-credit online course The Evolving Universe
            on Coursera. This course explored the formation of stars, galaxies,
            and cosmic evolution, giving me a strong foundation in astrophysics
            concepts. Earning the certificate enriched my understanding of the
            universe's history and strengthened my passion for exploring
            cosmic mysteries.
          </p>
        </div>
        <div className={`${styles.item} flex flex-col items-center`}>
          <img
            src="/certificates/Cosmology (Quantum & Particle Physics).jpg"
            alt=""
            className="rounded-xl w-full mb-4"
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
            className="rounded-xl"
            src="/certificates/MIT Quantum Physics II (Barton Zwiebach).jpg"
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
            className="rounded-xl"
            src="/certificates/MIT Physics III Vibrations, Waves Walter Lewin.jpg"
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
            className="rounded-xl"
            src="/certificates/Mindluster Physics Certificate.jpg"
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
            className="rounded-xl"
            src="/certificates/Mindluster Astronomy Certificate.jpg"
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
            className="rounded-xl"
            src="/certificates/Linear Algebra for Computer Scientist's.jpg"
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
            className="rounded-xl"
            src="/certificates/MIT Psychology Certificate (Frank Schilbach).jpg"
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
        <div className={`${styles.item} flex flex-col items-center`}>
          <img
            className="rounded-xl w-full mb-4"
            src="/certificates/Certificate on Google Analytics.jpg"
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
      </div>
    </>
  );
};

export default Certificate;

<></>;
