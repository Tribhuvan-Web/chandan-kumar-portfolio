import React from "react";
import skills from "../../../public/data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <>
      <section
        className="px-4 sm:px-8 py-2 sm:py-12  w-full bg-gray-900"
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
              <div className="w-full md:w-1/2 mt-4 md:mt-0 text-center md:text-center flex-column items-center justify-center">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {skill.title}
                </h3>
                <p className="text-xl text-gray-200 text-start">
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
                <div className="flex items-center justify-center mb-4">
                  <a
                    download="internship.pdf"
                    href="/files/internship.pdf"
                    aria-label="Download Letter"
                    className="font-semibold flex justify-center items-center w-36 sm:w-48 mt-8 mb-6 sm:mb-0 text-lg rounded-full py-4 px-5 shadow-lg text-center bg-white text-black hover:bg-black hover:text-white duration-500"
                  >
                    <span className="text-sm sm:text-lgduration-100">
                      Download Letter
                    </span>
                  </a>
                </div>
                <h1 className="text-white text-2xl font-semibold mb-4">
                  National Space Science Symposium (NSSS), 2024
                </h1>
                <p className="text-white text-xl text-start mb-4">
                  I was invited to NSSS 2024 after scoring an A+ in ISRO's START
                  training program, ranking in the top five candidates. At the
                  symposium in Feb, 2024 at Goa University, I presented a
                  presentation on advancements in space exploration. The
                  experience included engaging discussions and workshops,
                  deepening my understanding of astrophysics and inspiring my
                  future career in space science.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
