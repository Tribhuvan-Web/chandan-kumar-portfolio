import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed z-20 bottom-12 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 font-extrabold bg-gradient-to-br shadow-lg text-white rounded-full bg-teal-600 hover:bg-teal-950 transition duration-300"
          style={{ boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.4)" }}
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
