import React from "react";
import { Link } from "react-router-dom";
import sporeStashLogo from "../img/Final_deer_flat.png";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <h1>Spore Stash</h1>
      <img src={sporeStashLogo} alt="Spore Stash Logo" />
      <Link to="/shop">
        <button>Shop</button>
      </Link>
    </div>
  );
}

export default Landing;
