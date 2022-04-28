import React from "react";
import { FormControl } from "@mui/material";
import { FormLabel } from "@mui/material";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/cart-card.css";

function CartCard(props) {
  function removeFromCart(e) {
    let cartCopy = [...props.cart];
    console.log(props.item);
    if (props.item.item_category !== "merch") {
      console.log("1");
      cartCopy = cartCopy.filter(
        (item) => item.id !== `${props.item.item_id}-${props.item.order_type}`
      );
    } else if (props.item.order_size) {
      console.log("2");
      cartCopy = cartCopy.filter(
        (item) => item.id !== `${props.item.item_id}-${props.item.order_size}`
      );
    } else {
      console.log("3");
      cartCopy = cartCopy.filter((item) => item.id !== String(props.item.id));
    }

    props.setCart(cartCopy);

    const cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  }
  function handleItemQuantityChange(e) {
    let { value } = e.target;
    let cartCopy = [...props.cart];

    let id = `${props.item.item_id}-${props.item.order_type}`;

    let existingItem = cartCopy.find((cartItem) => cartItem.id === id);

    existingItem.cart_quantity = value;

    props.setCart(cartCopy);

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  }
  return (
    <div className="cart-card-container">
      <img src={props.item.image_url} alt="Product" />
      <div className="cart-card-details">
        <h3>
          {props.item.item_name}
          <span className="card-card-type">{` (${props.item.order_type})`}</span>
        </h3>
        <div className="cart-card-bottom">
          <div className="cart-card-bottom-left">
            <FontAwesomeIcon
              icon={["fas", "trash-can"]}
              size="2x"
              className="cart-trash"
              onClick={removeFromCart}
            />
          </div>
          <div className="cart-card-bottom-right">
            <FormControl className="form-control">
              <FormLabel
                sx={{ fontSize: "12px", marginRight: "2px", marginTop: "4px" }}
              >
                Qty:
              </FormLabel>
              <TextField
                id="cart-item-quantity"
                select
                name="cart_item_quantity"
                // label="Qty:"
                value={props.item.cart_quantity}
                onChange={handleItemQuantityChange}
                size="small"
                className="cart-quantity-selector"
                InputProps={{
                  style: {
                    fontSize: "12px",
                    marginTop: "-5px",
                    borderRadius: "7px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "12px",
                    padding: 0,
                  },
                }}
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
              </TextField>
            </FormControl>
            <h4>
              $
              {Number(props.item.item_price) * Number(props.item.cart_quantity)}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
