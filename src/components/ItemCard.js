import React from "react";
import "../styles/item-card.css";
// import moment from 'moment';
import { Link } from "react-router-dom";
// import { titleToUrlHelper } from '../helpers/helperFunctions.js';

const ItemCard = (props) => {
  function handleAddToCart(e) {
    const itemObj = {
      item_id: props.item.item_id,
      cart_quantity: 1,
      item_name: props.item.item_name,
      item_price: props.item.item_price,
      image_url: props.item.image_url,
    };
    let cartCopy = [...props.cart];

    //assuming we have an ID field in our item
    let id = props.item.item_id;

    //look for item in cart array
    let existingItem = cartCopy.find((cartItem) => cartItem.item_id == id);

    //if item already exists
    if (existingItem) {
      existingItem.cart_quantity += 1; //update this to be number selected
    } else {
      //if item doesn't exist, simply add it
      cartCopy.push(itemObj);
    }

    //update app state
    props.setCart(cartCopy);

    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  }

  return (
    <div className="item-container">
      <img src={props.item.image_url} />
      <div className="card-info">
        <h3>{props.item.item_name}</h3>
        <p>{props.item.item_blurb}</p>
        <span className="item-price">${props.item.item_price}</span>
        <div className="card-buttons">
          <button>More Info</button>
          <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
