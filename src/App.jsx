import React from "react";
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";
import ContactForm from "./components/Contact/ContactForm";
import About from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <ContactForm />
      <ScrollToTop />
    </div>
  );
};

export default App;
