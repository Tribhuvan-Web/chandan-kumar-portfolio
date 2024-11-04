import React from "react";
import skills from "../../../public/data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <>
      <section
        className="px-4 sm:px-8 py-8 sm:py-16 w-full bg-gray-900"
        id="experience"
      >
        <h2 className="text-4xl font-extrabold mb-12 text-center text-white">
          Experience
        </h2>
        <div className="flex flex-col w-full gap-8">
          {skills.map((skill, id) => (
            <div
              key={id}
              className="flex flex-col md:flex-row items-center md:items-start w-full max-w-7xl mx-auto gap-8"
            >
              <div className="relative w-full md:w-1/2">
                <div className="w-full aspect-w-16 aspect-h-9 md:aspect-auto">
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {skill.title}
                </h3>
                <p className="text-xl text-gray-200">
                  During my 45-day online internship in Astrophysics and
                  Cosmology with IIT Madras, I conducted theoretical research
                  and completed a research paper on astrophysical and
                  cosmological concepts. My research focused on areas like black
                  holes, dark matter, and the universe's large-scale structure,
                  allowing me to develop skills in data analysis and theoretical
                  problem-solving. This hands-on exposure enriched my
                  understanding of complex cosmic phenomena and reinforced my
                  passion for the field. Working remotely also taught me the
                  discipline required for independent study while collaborating
                  effectively in a digital setting.
                </p>
                <a
                  download="Resume.pdf"
                  href="/files/Resume.pdf"
                  className="font-general-medium flex justify-center md:justify-start items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-teal-300 text-gray-800 hover:text-stone-900 font-semibold duration-500"
                  aria-label="Download Resume"
                >
                  <span className="text-sm sm:text-lg duration-100">
                    Download Letter
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
