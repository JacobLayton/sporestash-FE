import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import "../styles/navbar.css";

function Navbar(props) {
  return (
    <div className="navbar-container">
      <FontAwesomeIcon
        icon={["fas", "bars"]}
        size="2x"
        className="nav-hamburger"
        onClick={props.toggleMenu}
      />
      <Link to="/shop">
        <h1>Spore Stash</h1>
      </Link>
      <div className="cart-components">
        <Badge badgeContent={props.cartData.length}>
          <FontAwesomeIcon
            icon={["fas", "cart-shopping"]}
            size="2x"
            className="nav-cart"
            onClick={props.toggleCart}
          />
        </Badge>
      </div>
      <div className="desktop-cart-components">
        <Badge badgeContent={props.cartData.length}>
          <FontAwesomeIcon
            icon={["fas", "cart-shopping"]}
            size="2x"
            className="desktop-nav-cart"
            onClick={props.toggleDesktopCart}
          />
        </Badge>
      </div>
    </div>
  );
}

export default Navbar;
