import React, { useEffect, useState } from "react";
import AboutMobile from "./AboutMobile";
import AboutDesktop from "./AboutDesktop";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust width as needed
    };

    handleResize(); // Check initial window size
    window.addEventListener("resize", handleResize); // Add event listener to update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener on unmount
    };
  }, []);

  return (
    <section id="about">
      {isMobile ? <AboutMobile /> : <AboutDesktop />}
    </section>
  );
};

export default About;
