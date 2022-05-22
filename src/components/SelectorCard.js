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

function getItemPrice(item, orderType) {
  let price = item.item_price;
  if (item.item_category !== "merch") {
    if (orderType === "swab") {
      price = item.swab_price;
    }
    if (orderType === "print") {
      price = item.print_price;
    }
    if (orderType === "syringe") {
      price = item.syringe_price;
    }
  }
  return price;
}

function SelectorCard(props) {
  const { onClose, selectedValue, open } = props;
  const itemPrice = getItemPrice(props.item, props.formValues.order_type);

  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleSelectChange = (e) => {
    let { name, value } = e.target;
    const updatedFormValues = {
      ...props.formValues,
      [name]: value,
    };
    if (name === "order_quantity" && props.quantityError) {
      props.setQuantityError(false);
    }
    if (name === "order_type" && props.typeError) {
      props.setTypeError(false);
    }
    if (name === "order_size" && props.sizeError) {
      props.setSizeError(false);
    }
    props.setFormValues(updatedFormValues);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}
      // PaperProps={{
      //   style: {
      //     margin: "0",
      //     width: "92vw",
      //     height: "50vh",
      //     border: "1px solid var(--purple)",
      //     borderRadius: "var(--border-radius)",
      //     backgroundColor: "black",
      //     padding: "5%",
      //     backgroundImage: "none",
      //   },
      // }}
    >
      <div className="selector-card-elements">
        <FontAwesomeIcon
          icon={["fas", "x"]}
          className="selector-card-x"
          onClick={handleClose}
        />
        <h3>{props.item.item_name}</h3>
        {props.item.item_category !== "merch" ? (
          <h4>Choose Type and Quantity</h4>
        ) : props.item.display_size ? (
          <h4>Choose Size and Quantity</h4>
        ) : (
          <h4>Choose Quantity</h4>
        )}
        {props.item.item_category !== "merch" ? (
          <FormControl className="selector-card-inputs">
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              id="order-type"
              name="order_type"
              labelId="type-label"
              label="Type"
              error={props.typeError}
              value={props.formValues.order_type}
              onChange={handleSelectChange}
            >
              <MenuItem value={"swab"} disabled={!props.item.swab_available}>
                Swab
              </MenuItem>
              <MenuItem value={"print"} disabled={!props.item.print_available}>
                Print
                {props.item.print_available &&
                Number(props.item.print_price) -
                  Number(props.item.item_price) !==
                  0
                  ? ` (+ $${
                      Number(props.item.print_price) -
                      Number(props.item.item_price)
                    })`
                  : ""}
              </MenuItem>
              <MenuItem
                value={"syringe"}
                disabled={!props.item.syringe_available}
              >
                Syringe
                {props.item.syringe_available &&
                Number(props.item.syringe_price) -
                  Number(props.item.item_price) !==
                  0
                  ? ` +$${
                      Number(props.item.syringe_price) -
                      Number(props.item.item_price)
                    }`
                  : ""}
              </MenuItem>
            </Select>
          </FormControl>
        ) : (
          <FormControl
            className={
              props.item.display_size
                ? "selector-card-size"
                : "selector-card-size-hidden"
            }
          >
            <InputLabel id="size-label">Size</InputLabel>
            <Select
              id="order-size"
              name="order_size"
              labelId="size-label"
              label="Size"
              error={props.sizeError}
              value={props.formValues.order_size}
              onChange={handleSelectChange}
            >
              <MenuItem value={"XS"}>XS</MenuItem>
              <MenuItem value={"SM"}>SM</MenuItem>
              <MenuItem value={"MD"}>MD</MenuItem>
              <MenuItem value={"LG"}>LG</MenuItem>
              <MenuItem value={"XL"}>XL</MenuItem>
              <MenuItem value={"XXL"}>XXL</MenuItem>
            </Select>
          </FormControl>
        )}
        <div className="spacer" />
        <FormControl className="selector-card-inputs">
          <InputLabel id="quantity-label">Quantity</InputLabel>
          <Select
            id="order-quantity"
            name="order_quantity"
            labelId="quantity-label"
            label="Quantity"
            error={props.quantityError}
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
        <div className="selector-card-price-info">
          <h4>${itemPrice} each</h4>
        </div>
        <div className="selector-card-btn-container">
          <button onClick={props.handleAddToCart}>Add To Cart</button>
        </div>
      </div>
    </Dialog>
  );
}

export default SelectorCard;
