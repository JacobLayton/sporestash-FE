import React, { useState, useEffect, forwardRef } from "react";
import { Drawer } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartCard from "./CartCard";
import "../styles/desktop-cart.css";

function DesktopCart(props) {
  let orderSubtotal = 0;
  props.cart.map((cartItem) => {
    return (orderSubtotal +=
      Number(cartItem.item_price) * Number(cartItem.cart_quantity));
  });
  return (
    <Drawer
      anchor={"right"}
      open={props.displayDesktopCart}
      onClose={props.toggleDesktopCart}
      className="desktop-cart-container"
    >
      {props.cart.length > 0 ? (
        <div className="desktop-cart-contents">
          <FontAwesomeIcon
            icon={["fas", "x"]}
            className="desktop-cart-x"
            onClick={props.toggleDesktopCart}
          />
          <h1>Items In Cart</h1>
          <div className="desktop-cart-items">
            {props.cart.map((cartItem) => {
              return (
                <CartCard
                  item={cartItem}
                  key={`${cartItem.item_id}-${cartItem.order_type}`}
                  cart={props.cart}
                  setCart={props.setCart}
                  toggleCart={props.toggleCart}
                />
              );
            })}
          </div>
          <div className="desktop-cart-checkout">
            <h2>Order Subtotal: ${orderSubtotal}</h2>
            <button className="desktop-checkout-button">Checkout</button>
            <button
              className="desktop-back-shop-button"
              onClick={props.toggleCart}
            >
              Back To Shop
            </button>
          </div>
        </div>
      ) : (
        <h1>Cart Is Empty</h1>
      )}
    </Drawer>
  );
}

export default DesktopCart;
