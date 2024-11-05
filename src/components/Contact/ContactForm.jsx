import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const ContactForm = () => {
  return (
    <>
      <footer className="text-white p-4 mt-12 bg-teal-700" id="contactform">
        <hr className="my-2 border-t-2 border-white w-9/10 mx-auto" />
        <div className="container mx-auto text-center font-sans">
          <h2 className="text-2xl font-bold mb-3 font-sans">Contact Me</h2>
          <div className="flex justify-center space-x-2 md:space-x-6">
            <a
              href="https://wa.me/+916206669081"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:bg-gradient-to-r hover:from-green-400 p-2 rounded-xl"
              title="WhatsApp"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
            <a
              href="mailto:chandankumar16052005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:bg-gradient-to-l hover:from-red-400 hover:to-slate-100 p-2 rounded-xl"
              title="Gmail"
            >
              <SiGmail className="text-2xl" />
            </a>
            <a
              href="tel:+916206669081"
              className="hover:text-white hover:bg-gradient-to-r hover:from-green-400 p-2 rounded-xl"
              title="Phone"
            >
              <FaPhone className="text-2xl" />
            </a>
            <a
              href="https://in.linkedin.com/in/become-an-astronaut-2847622b6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-500 p-2 rounded-xl"
              title="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/star_sailor_369?igsh=MWFuMmMxcGFxMHQ1OA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-500 p-2 rounded-xl"
              title="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.threads.net/@star_sailor_369"
              className="hover:text-white hover:bg-gradient-to-r hover:bg-black p-2 rounded-xl"
              title="Threads"
            >
              <FaThreads className="text-2xl" />
            </a>
          </div>
          <p className="text-xl font-sans font-bold desktop-text-right md:block hidden">
            Feel free to reach out to me via any of the above platforms.
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactForm;
