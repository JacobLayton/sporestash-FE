import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-copyright">
        <span className="footer-text">© 2022 SPORESTASH</span>
        <span className="footer-text">ALL RIGHTS RESERVED</span>
        <span className="footer-text">
          DESIGNED AND DEVELOPED BY{" "}
          <a
            className="footer-text footer-link"
            href="http://www.jacoblayton.dev"
            target="_blank"
            rel="noreferrer"
          >
            JACOB LAYTON
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
