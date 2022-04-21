import React, { useState, useEffect, forwardRef } from "react";
import { Dialog } from "@mui/material";
import { Slide } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "@mui/material";
import theme from "../theme";
import "../styles/more-info-card.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function MoreInfoCard(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}
      className="more-info-card"
      // PaperProps={{
      //   style: {
      //     margin: "0",
      //     width: "92vw",
      //     height: "73vh",
      //     border: "1px solid var(--purple)",
      //     borderRadius: "var(--border-radius)",
      //     backgroundColor: "black",
      //     padding: "5%",
      //     backgroundImage: "none",
      //   },
      // }}
    >
      <div className="info-card-elements">
        <FontAwesomeIcon
          icon={["fas", "x"]}
          className="info-card-x"
          onClick={handleClose}
        />
        <img src={props.item.image_url} />
        <h3>{props.item.item_name}</h3>
        <p>{props.item.item_description}</p>
        <div className="info-card-btn-container">
          <button onClick={props.handleOpenSelectorClick}>Add To Cart</button>
        </div>
      </div>
    </Dialog>
  );
}

export default MoreInfoCard;
