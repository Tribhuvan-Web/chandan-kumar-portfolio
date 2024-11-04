import React from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          src={getImageUrl("nav/menuIcon.png")}
          alt=""
          className={styles.menuBtn}
        />
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
