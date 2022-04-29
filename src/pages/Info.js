import React from "react";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";

function Info() {
  return (
    <div className="info-container">
      <div className="faq-container">
        <FAQ />
      </div>
      <div className="terms-container"></div>
      <div className="privacy-container"></div>
      <div className="contact-container">
        <ContactForm />
      </div>
    </div>
  );
}

export default Info;
