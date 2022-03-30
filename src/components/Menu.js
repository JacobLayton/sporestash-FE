import React, { useState, useEffect } from "react";
import { Drawer } from "@mui/material";
import { MenuItem } from "@mui/material";
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
      <MenuItem>FAQs</MenuItem>
      <MenuItem>Contact Us</MenuItem>
      <MenuItem>Terms and Conditions</MenuItem>
      <MenuItem>Privacy Statement</MenuItem>
    </Drawer>
  );
}

export default Menu;
