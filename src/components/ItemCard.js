import React, { useState } from "react";
import MoreInfoCard from "../components/MoreInfoCard";
import SelectorCard from "../components/SelectorCard";
import { Select } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import "../styles/item-card.css";

const defaultValues = {
  order_type: "",
  order_quantity: "",
  order_size: "",
};

const ItemCard = (props) => {
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [formValues, setFormValues] = useState(defaultValues);
  function handleClickOpen() {
    setMoreInfoOpen(true);
  }
  function handleClose() {
    setMoreInfoOpen(false);
  }
  function handleSelectorOpen() {
    if (moreInfoOpen) {
      handleClose();
    }
    setSelectorOpen(true);
  }
  function handleSelectorClose() {
    setSelectorOpen(false);
  }
  const handleSelectChange = (e) => {
    let { name, value } = e.target;
    const updatedFormValues = {
      ...formValues,
      [name]: value,
    };
    setFormValues(updatedFormValues);
  };
  function handleAddToCart(e) {
    const itemObj = {
      item_id: props.item.item_id,
      order_type: formValues.order_type,
      id: `${props.item.item_id}-${formValues.order_type}`,
      item_name: props.item.item_name,
      item_price: props.item.item_price,
      image_url: props.item.image_url,
      cart_quantity: formValues.order_quantity,
      order_size: formValues.order_size,
      item_category: props.item.item_category,
    };
    if (props.item.item_category === "merch") {
      if (props.item.display_size) {
        console.log(`${props.item.item_id}-${formValues.order_size}`);
        itemObj.id = `${props.item.item_id}-${formValues.order_size}`;
      } else {
        itemObj.id = String(props.item.item_id);
      }
    }
    let cartCopy = [...props.cart];

    //assuming we have an ID field in our item
    let id = props.item.item_id;

    //look for item in cart array
    let existingItem = cartCopy.find(
      (cartItem) =>
        cartItem.item_id === id && cartItem.order_type === formValues.order_type
    );

    //if item already exists
    if (existingItem) {
      existingItem.cart_quantity =
        Number(existingItem.cart_quantity) + Number(formValues.order_quantity); //update this to be number selected
    } else {
      //if item doesn't exist, simply add it
      cartCopy.push(itemObj);
    }

    //update app state
    props.setCart(cartCopy);

    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
    handleSelectorClose();
    setFormValues(defaultValues);
  }

  return (
    <div className="item-container">
      <img src={props.item.image_url} alt="Product" />
      <div className="card-info">
        <h3>{props.item.item_name}</h3>
        <p className="item-card-blurb">{props.item.item_blurb}</p>
        <p className="item-card-deets">{props.item.item_description}</p>
        <span className="item-price">${props.item.item_price}</span>
        <div className="card-buttons">
          <button className="more-info-btn" onClick={handleClickOpen}>
            More Info
          </button>
          <button className="add-cart-btn" onClick={handleSelectorOpen}>
            Add To Cart
          </button>
        </div>
        <div className="desktop-card-contents">
          <div className="desktop-card-left">
            {props.item.item_category !== "merch" ? (
              <FormControl className="desktop-card-inputs-type" size="small">
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  id="desktop-order-type"
                  name="order_type"
                  labelId="type-label"
                  label="Type"
                  value={formValues.order_type}
                  onChange={handleSelectChange}
                >
                  <MenuItem value={"swab"}>
                    Swab (${props.item.swab_price})
                  </MenuItem>
                  <MenuItem value={"print"}>
                    Print (${props.item.print_price})
                  </MenuItem>
                  <MenuItem value={"syring"}>
                    Syringe (${props.item.syringe_price})
                  </MenuItem>
                </Select>
              </FormControl>
            ) : (
              <FormControl
                className={
                  props.item.display_size
                    ? "desktop-card-size"
                    : "desktop-card-size-hidden"
                }
                size="small"
              >
                <InputLabel id="size-label">Size</InputLabel>
                <Select
                  id="desktop-order-size"
                  name="order_size"
                  labelId="size-label"
                  label="Size"
                  value={formValues.order_size}
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
            <FormControl className="desktop-card-inputs-quantity" size="small">
              <InputLabel id="desktop-quantity-label">Quantity</InputLabel>
              <Select
                id="order-quantity"
                name="order_quantity"
                labelId="desktop-quantity-label"
                label="Quantity"
                value={formValues.order_quantity}
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
          </div>
          <div className="desktop-card-right">
            <span className="desktop-price">${props.item.item_price}</span>
            <button className="desktop-add-cart-btn" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <MoreInfoCard
        open={moreInfoOpen}
        onClose={handleClose}
        item={props.item}
        handleOpenSelectorClick={handleSelectorOpen}
      />
      <SelectorCard
        open={selectorOpen}
        onClose={handleSelectorClose}
        item={props.item}
        formValues={formValues}
        setFormValues={setFormValues}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default ItemCard;
