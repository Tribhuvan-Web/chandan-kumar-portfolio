import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const ContactForm = () => {
  return (
    <>
      <footer
        className="text-white p-4 pt-5 mt-12 bg-teal-900"
        id="contactform"
      >
        <hr className="mb-3" />
        <div className="container mx-auto text-center font-sans">
          <h2 className="text-2xl font-bold mb-4 font-sans">Contact Me</h2>
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://wa.me/+916206669081"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaWhatsapp className="text-3xl" />
            </a>
            <a
              href="mailto:chandankumar16052005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <SiGmail className="text-3xl" />
            </a>
            <a href="tel:+916206669081" className="hover:text-gray-300">
              <FaPhone className="text-3xl" />
            </a>
            <a
              href="https://in.linkedin.com/in/become-an-astronaut-2847622b6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/star_sailor_369?igsh=MWFuMmMxcGFxMHQ1OA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://www.threads.net/@star_sailor_369"
              className="hover:text-gray-300"
            >
              <FaThreads className="text-3xl" />
            </a>
          </div>
          <p className="text-2xl font-sans desktop-text-right mobile-text-center">
            Feel free to reach out to me via any of the above platforms.
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactForm;
