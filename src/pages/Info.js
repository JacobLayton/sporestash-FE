import React, { useEffect, useState } from "react";
import FAQ from "../components/FAQ";
import Terms from "../components/Terms";
import Privacy from "../components/Privacy";
import ContactForm from "../components/ContactForm";
import * as Scroll from "react-scroll";
import "../styles/info.css";
const scroller = Scroll.scroller;

function Info() {
  const [expandInfo, setExpandInfo] = useState(false);
  const [expandPrivacy, setExpandPrivacy] = useState(false);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const scrollToPosition = urlParams.get("scroll_to");
    if (scrollToPosition && scrollToPosition === "type-info") {
      scroller.scrollTo("faq-container", {
        duration: 500,
        delay: 300,
        smooth: true,
      });
      setTimeout(function () {
        setExpandInfo(true);
      }, 800);
    } else if (scrollToPosition && scrollToPosition === "faq") {
      scroller.scrollTo("faq-container", {
        duration: 500,
        delay: 300,
        smooth: true,
      });
    } else if (scrollToPosition && scrollToPosition === "terms") {
      scroller.scrollTo("terms-container", {
        duration: 500,
        delay: 300,
        smooth: true,
      });
    } else if (scrollToPosition && scrollToPosition === "privacy") {
      scroller.scrollTo("privacy-container", {
        duration: 500,
        delay: 300,
        smooth: true,
      });
      setTimeout(function () {
        setExpandPrivacy(true);
      }, 800);
    } else if (scrollToPosition && scrollToPosition === "contact") {
      scroller.scrollTo("contact-container", {
        duration: 500,
        delay: 300,
        smooth: true,
      });
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
        <Privacy expandPrivacy={expandPrivacy} />
      </div>
      <div className="contact-container">
        <ContactForm />
      </div>
    </div>
  );
}

export default Info;
