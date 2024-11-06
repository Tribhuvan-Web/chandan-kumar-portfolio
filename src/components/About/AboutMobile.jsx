import React from "react";
import styles from "./About.module.css";
import Certificate from "./Certificate";
import { Experience } from "../Experience/Experience";

export const AboutMobile = () => {
  return (
    <>
      <section
        className={`${styles.container} py-16 bg-white text-white`}
        id="about"
      >
        <h2 className="text-4xl font-bold text-center mb-2 mt-8 font-mono">
          ABOUT ME
        </h2>
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center max-w-4xl mx-auto w-4/5">
          <div className="text-lg text-left">
            <hr className="my-4 border-t-2 border-black w-9/10 lg:mx-0" />
            <p className="font-mono text-xl text-pink-100 font-semibold">
              LET ME INTRODUCE MYSELF
            </p>
            <p className="mt-4 text-white font-bold">
              Hi Everyone, I’m Chandan kumar from Patna, India. I recently
              completed my schooling and have dedicated my academic journey to
              exploring the mysteries of space. My passion for astrophysics
              began at a young age when I witnessed a rocket crossing the sky
              with my grandfather, sparking my dream to understand the cosmos.
              Over the years, I've pursued numerous courses and internships in
              astrophysics and space science, including certifications from ISRO
              and Caltech. With a strong interest in physics, I’m now preparing
              to take the next step towards a career in astrophysics.
            </p>
            <p className="mt-4 text-red-100">
              Beyond my academic pursuits, here are some activities I enjoy:
            </p>
            <ul className="list-disc list-inside mt-4 text-white">
              <li className="mb-2">
                <span className="font-bold text-black">
                  Astronomy Observation
                </span>{" "}
                ⇒ Stargazing is more than a hobby; it's a constant reminder of
                why I’m passionate about space science.
              </li>
              <li className="mb-2">
                <span className="font-bold text-black">Reading Sci-Fi</span> ⇒
                Books like <i>A Brief History of Time</i> and{" "}
                <i>The Theory of Everything</i> fuel my curiosity and
                imagination.
              </li>
              <li className="mb-2">
                <span className="font-bold text-black">Volunteering</span> ⇒ I
                enjoy engaging in community activities, helping with education,
                and supporting local initiatives.
              </li>
              <li className="mb-2">
                <span className="font-bold text-black">
                  Exploring Local Culture
                </span>{" "}
                ⇒ Traveling and learning about my heritage keeps me grounded and
                inspired.
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-t-2 border-indigo-100 w-4/5 mx-auto" />
      </section>
      <Experience />
      <Certificate />
    </>
  );
};

export default AboutMobile;
