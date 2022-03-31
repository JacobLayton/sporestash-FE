import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartCard(props) {
  function removeFromCart(e) {
    let cartCopy = [...props.cart];
    cartCopy = cartCopy.filter((item) => item.item_id != props.item.item_id);

    props.setCart(cartCopy);

    const cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  }
  return (
    <div className="cart-card-container">
      <p>
        <FontAwesomeIcon
          icon={["fas", "trash-can"]}
          size="2x"
          className="cart-trash"
          onClick={removeFromCart}
        />
        {props.item.item_name} X {props.item.cart_quantity} ={" "}
        {Number(props.item.item_price) * Number(props.item.cart_quantity)}
      </p>
    </div>
  );
}

export default CartCard;
