import React from "react";
import styles from "./App.Module.css";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";
import ContactForm from "./components/Contact/ContactForm";
import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";

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
