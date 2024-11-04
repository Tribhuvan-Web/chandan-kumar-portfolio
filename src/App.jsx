import React from "react";
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";
import ContactForm from "./components/Contact/ContactForm";
import { Navbar } from "./components/Navbar/Navbar";
import About from "./components/About/About";

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <ContactForm />
    </div>
  );
};

export default App;
