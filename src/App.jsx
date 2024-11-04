import React from "react";
import styles from "./App.Module.css";
import Navbar from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";
import { About } from "./components/About/About";
import ContactForm from "./components/Contact/ContactForm";

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
