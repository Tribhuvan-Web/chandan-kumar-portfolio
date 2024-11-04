import React from "react";
import styles from "./App.Module.css";
import Navbar from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";
import ContactForm from "./components/Contact/ContactForm";
import Abouts from "./components/About/About";

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <Experience />
      <Abouts />
      <ContactForm />
    </div>
  );
};

export default App;
