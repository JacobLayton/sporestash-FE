import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "@mui/material";
import theme from "../theme";
import "../styles/menu.css";

function Menu(props) {
  const anchor = props.mobileDown ? "top" : "left";
  return (
    // <div
    //   className={`menu-container ${props.displayMenu ? "showing" : "hiding"}`}
    // >
    //   <h1>Menu</h1>
    // </div>
    <Drawer
      anchor={anchor}
      open={props.displayMenu}
      onClose={props.toggleMenu}
      className="menu-container"
    >
      <FontAwesomeIcon
        icon={["fas", "x"]}
        className="menu-x"
        onClick={props.toggleMenu}
      />
      <div className="menu-items">
        <Link to="/shop" onClick={props.toggleMenu}>
          <MenuItem>Home</MenuItem>
        </Link>
        <Link to="/info?scroll_to=faq" onClick={props.toggleMenu}>
          <MenuItem>FAQs</MenuItem>
        </Link>
        <Link to="/info?scroll_to=terms" onClick={props.toggleMenu}>
          <MenuItem>Terms & Conditions</MenuItem>
        </Link>
        <Link to="/info?scroll_to=privacy" onClick={props.toggleMenu}>
          <MenuItem>Privacy Statement</MenuItem>
        </Link>
        <Link to="/info?scroll_to=contact" onClick={props.toggleMenu}>
          <MenuItem>Contact Us</MenuItem>
        </Link>
      </div>
    </Drawer>
  );
}

export default Menu;
