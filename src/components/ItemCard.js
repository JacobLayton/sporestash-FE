import React, { useState } from "react";
import MoreInfoCard from "../components/MoreInfoCard";
import SelectorCard from "../components/SelectorCard";
import "../styles/item-card.css";
// import moment from 'moment';
import { Link } from "react-router-dom";
// import { titleToUrlHelper } from '../helpers/helperFunctions.js';

const defaultValues = {
  order_type: "",
  order_quantity: "",
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
  function handleAddToCart(e) {
    console.log("adding to cart");
    const itemObj = {
      item_id: props.item.item_id,
      // cart_quantity: 1,
      item_name: props.item.item_name,
      item_price: props.item.item_price,
      image_url: props.item.image_url,
      order_type: formValues.order_type,
      cart_quantity: formValues.order_quantity,
    };
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
      <img src={props.item.image_url} />
      <div className="card-info">
        <h3>{props.item.item_name}</h3>
        <p>{props.item.item_blurb}</p>
        <span className="item-price">${props.item.item_price}</span>
        <div className="card-buttons">
          <button className="more-info-btn" onClick={handleClickOpen}>
            More Info
          </button>
          {/* <button className="add-cart-btn" onClick={handleAddToCart}> */}
          <button className="add-cart-btn" onClick={handleSelectorOpen}>
            Add To Cart
          </button>
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
