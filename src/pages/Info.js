import React, { useEffect, useState } from "react";
import FAQ from "../components/FAQ";
import Terms from "../components/Terms";
import Privacy from "../components/Privacy";
import ContactForm from "../components/ContactForm";
import "../styles/info.css";

function Info() {
  const [expandInfo, setExpandInfo] = useState(false);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const expandTypeInfoTab = urlParams.get("type_info");
    if (expandTypeInfoTab && expandTypeInfoTab === "true") {
      setExpandInfo(true);
    }
  }, []);

  return (
    <div className="info-container">
      <div className="faq-container">
        <FAQ expandInfo={expandInfo} />
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
