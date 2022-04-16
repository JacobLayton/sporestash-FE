import React, { useState, useEffect, forwardRef } from "react";
import { Dialog } from "@mui/material";
import { Slide } from "@mui/material";
import { Select } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/selector-card.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function SelectorCard(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleSelectChange = (e) => {
    let { name, value } = e.target;
    const updatedFormValues = {
      ...props.formValues,
      [name]: value,
    };
    props.setFormValues(updatedFormValues);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          margin: "0",
          width: "92vw",
          height: "50vh",
          border: "1px solid var(--purple)",
          borderRadius: "var(--border-radius)",
          backgroundColor: "black",
          padding: "5%",
          backgroundImage: "none",
        },
      }}
    >
      <div className="selector-card-elements">
        <FontAwesomeIcon
          icon={["fas", "x"]}
          className="selector-card-x"
          onClick={handleClose}
        />
        <h3>{props.item.item_name}</h3>
        <h4>Choose Type and Quantity</h4>
        <FormControl className="selector-card-inputs">
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            id="order-type"
            name="order_type"
            labelId="type-label"
            label="Type"
            value={props.formValues.order_type}
            onChange={handleSelectChange}
            // sx={{ borderRadius: 30 }}
          >
            <MenuItem value={"swab"}>Swab</MenuItem>
            <MenuItem value={"print"}>Print</MenuItem>
            <MenuItem value={"syring"} disabled>
              Syringe
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className="selector-card-inputs">
          <InputLabel id="quantity-label">Quantity</InputLabel>
          <Select
            id="order-quantity"
            name="order_quantity"
            labelId="quantity-label"
            label="Quantity"
            value={props.formValues.order_quantity}
            onChange={handleSelectChange}
          >
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={"2"}>2</MenuItem>
            <MenuItem value={"3"}>3</MenuItem>
            <MenuItem value={"4"}>4</MenuItem>
            <MenuItem value={"5"}>5</MenuItem>
            <MenuItem value={"6"}>6</MenuItem>
            <MenuItem value={"7"}>7</MenuItem>
            <MenuItem value={"8"}>8</MenuItem>
            <MenuItem value={"9"}>9</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
          </Select>
        </FormControl>
        <div className="selector-card-btn-container">
          <button onClick={props.handleAddToCart}>Add To Cart</button>
        </div>
      </div>
    </Dialog>
  );
}

export default SelectorCard;
