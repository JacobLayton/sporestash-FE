import React, { useState, useEffect, forwardRef } from "react";
import { Drawer } from "@mui/material";
import { Dialog } from "@mui/material";
import { Slide } from "@mui/material";
import CartCard from "./CartCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/cart.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function Cart(props) {
  let orderSubtotal = 0;
  props.cart.map((cartItem) => {
    return (orderSubtotal +=
      Number(cartItem.item_price) * Number(cartItem.cart_quantity));
  });
  return (
    // <Drawer
    //   anchor="right"
    //   open={props.displayCart}
    //   onClose={props.toggleCart}
    //   className="cart-container"
    // >
    <Dialog
      onClose={props.toggleCart}
      open={props.displayCart}
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          margin: "0",
          width: "92vw",
          maxHeight: "90vh",
          border: "1px solid var(--purple)",
          borderRadius: "var(--border-radius)",
          backgroundColor: "black",
          padding: "5%",
          backgroundImage: "none",
        },
      }}
    >
      {props.cart.length > 0 ? (
        <div className="cart-contents">
          <FontAwesomeIcon
            icon={["fas", "x"]}
            className="cart-x"
            onClick={props.toggleCart}
          />
          <h1>Items In Cart</h1>
          <div className="cart-items">
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
          <div className="cart-checkout">
            <h2>Order Subtotal: ${orderSubtotal}</h2>
            <button className="checkout-button">Checkout</button>
            <button className="back-shop-button" onClick={props.toggleCart}>
              Back To Shop
            </button>
          </div>
        </div>
      ) : (
        <h1>Cart Is Empty</h1>
      )}
    </Dialog>
    // </Drawer>
  );
}

export default Cart;
