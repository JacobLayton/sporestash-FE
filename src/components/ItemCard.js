import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MoreInfoCard from "../components/MoreInfoCard";
import SelectorCard from "../components/SelectorCard";
import { Select } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import "../styles/item-card.css";

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

const defaultValues = {
  order_type: "",
  order_quantity: "",
  order_size: "",
};

const ItemCard = (props) => {
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [formValues, setFormValues] = useState(defaultValues);
  const [quantityError, setQuantityError] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const itemPrice = getItemPrice(props.item, formValues.order_type);
  function handleInfoClick(e) {
    window.open(`/info?scroll_to=type-info`);
  }
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
    if (name === "order_quantity" && quantityError) {
      setQuantityError(false);
    }
    if (name === "order_type" && typeError) {
      setTypeError(false);
    }
    if (name === "order_size" && sizeError) {
      setSizeError(false);
    }
    setFormValues(updatedFormValues);
  };
  function formValidation(itemData, formData) {
    let allFieldsComplete = true;
    if (formData.order_quantity === "") {
      setQuantityError(true);
      allFieldsComplete = false;
    }
    if (itemData.item_category !== "merch" && formData.order_type === "") {
      setTypeError(true);
      allFieldsComplete = false;
    }
    if (
      itemData.item_category === "merch" &&
      itemData.display_size &&
      formData.order_size === ""
    ) {
      setSizeError(true);
      allFieldsComplete = false;
    }
    return allFieldsComplete;
  }
  function calculateItemPrice(item) {
    let itemPrice;
    const { order_type } = formValues;
    if (item.item_category !== "merch") {
      if (order_type === "swab") {
        itemPrice = item.swab_price;
      } else if (order_type === "print") {
        itemPrice = item.print_price;
      } else if (order_type === "syringe") {
        itemPrice = item.syringe_price;
      } else {
        itemPrice = item.item_price;
      }
    } else {
      itemPrice = item.item_price;
    }
    return itemPrice;
  }
  function handleAddToCart(e) {
    const allFieldsComplete = formValidation(props.item, formValues);
    if (allFieldsComplete) {
      const itemObj = {
        item_id: props.item.item_id,
        order_type: formValues.order_type,
        id: `${props.item.item_id}-${formValues.order_type}`,
        item_name: props.item.item_name,
        item_price: calculateItemPrice(props.item),
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
          cartItem.item_id === id &&
          cartItem.order_type === formValues.order_type
      );

      //if item already exists
      if (existingItem) {
        existingItem.cart_quantity =
          Number(existingItem.cart_quantity) +
          Number(formValues.order_quantity); //update this to be number selected
      } else {
        //if item doesn't exist, simply add it
        cartCopy.push(itemObj);
      }

      //update app state
      props.setCart(cartCopy);

      //make cart a string and store in local space
      let stringCart = JSON.stringify(cartCopy);
      localStorage.setItem("sscart", stringCart);
      handleSelectorClose();
      setFormValues(defaultValues);
    }
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
              <div className="desktop-card-type-container">
                <FormControl className="desktop-card-inputs-type" size="small">
                  <InputLabel id="type-label">Type</InputLabel>
                  <Select
                    id="desktop-order-type"
                    name="order_type"
                    labelId="type-label"
                    label="Type"
                    error={typeError}
                    value={formValues.order_type}
                    onChange={handleSelectChange}
                  >
                    <MenuItem
                      value={"swab"}
                      disabled={!props.item.swab_available}
                    >
                      Swab
                    </MenuItem>
                    <MenuItem
                      value={"print"}
                      disabled={!props.item.print_available}
                    >
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
                <FontAwesomeIcon
                  icon={["fas", "circle-question"]}
                  className="desktop-card-info"
                  onClick={handleInfoClick}
                />
              </div>
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
                  error={sizeError}
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
                error={quantityError}
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
            <span className="desktop-price">${itemPrice}</span>
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
        quantityError={quantityError}
        setQuantityError={setQuantityError}
        typeError={typeError}
        setTypeError={setTypeError}
        sizeError={sizeError}
        setSizeError={setSizeError}
        handleInfoClick={handleInfoClick}
      />
    </div>
  );
};

export default ItemCard;
