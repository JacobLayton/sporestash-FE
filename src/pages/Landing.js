import React from "react";
import sporeStashLogo from "../img/Final_deer_flat.png";

function Landing() {
  return (
    <div className="landing-container">
      <h1>Spore Stash</h1>
      <img src={sporeStashLogo} alt="Spore Stash Logo" />
      <button>Shop</button>
    </div>
  );
}

export default Landing;
