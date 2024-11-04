import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export const Contact = () => {
  return (
    <div className="flex justify-center items-center text-white">
      <ContactDetails />
      <ContactForm />
    </div>
  );
};
