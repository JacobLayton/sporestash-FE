import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/navbar.css";

function Navbar(props) {
  function handleBurgerClick(e) {
    alert("burger");
  }
  function handleCartClick(e) {
    alert("cart");
  }
  return (
    <div className="landing-container">
      <FontAwesomeIcon
        icon={["fas", "bars"]}
        size="2x"
        className="nav-hamburger"
        onClick={props.toggleMenu}
      />
      <h1>Spore Stash</h1>
      <FontAwesomeIcon
        icon={["fas", "cart-shopping"]}
        size="2x"
        className="nav-cart"
        onClick={handleCartClick}
      />
    </div>
  );
}

export default Navbar;
