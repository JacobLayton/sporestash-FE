import React, { useState, useEffect } from "react";
import { Drawer } from "@mui/material";
import CartCard from "./CartCard";
import { MenuItem } from "@mui/material";
import "../styles/cart.css";

function Cart(props) {
  return (
    <Drawer
      anchor="right"
      open={props.displayCart}
      onClose={props.toggleCart}
      className="cart-container"
    >
      <h1>Shopping Cart</h1>
      {props.cart.map((cartItem) => {
        return (
          <CartCard
            item={cartItem}
            key={cartItem.item_id}
            cart={props.cart}
            setCart={props.setCart}
          />
        );
      })}
    </Drawer>
  );
}

export default Cart;
