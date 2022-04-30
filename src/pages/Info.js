import React from "react";
import FAQ from "../components/FAQ";
import Terms from "../components/Terms";
import Privacy from "../components/Privacy";
import ContactForm from "../components/ContactForm";
import "../styles/info.css";

function Info() {
  return (
    <div className="info-container">
      <div className="faq-container">
        <FAQ />
      </div>
      <div className="terms-container">
        <Terms />
      </div>
      <div className="privacy-container">
        <Privacy />
      </div>
      <div className="contact-container">
        <ContactForm />
      </div>
    </div>
  );
}

export default Info;
