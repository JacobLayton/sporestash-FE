import React from "react";
import "../styles/menu.css";

function Menu(props) {
  return (
    <div
      onMouseUp={props.handleMouseUp}
      className={`menu-container ${props.displayMenu ? "showing" : "hiding"}`}
    >
      <h1>Menu</h1>
    </div>
  );
}

export default Menu;
