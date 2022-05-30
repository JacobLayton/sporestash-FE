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
    if (props.item.item_category !== "merch") {
      cartCopy = cartCopy.filter(
        (item) => item.id !== `${props.item.item_id}-${props.item.order_type}`
      );
    } else if (props.item.order_size) {
      cartCopy = cartCopy.filter(
        (item) => item.id !== `${props.item.item_id}-${props.item.order_size}`
      );
    } else {
      cartCopy = cartCopy.filter((item) => item.id !== String(props.item.id));
    }

    props.setCart(cartCopy);

    const cartString = JSON.stringify(cartCopy);
    localStorage.setItem("sscart", cartString);
  }
  function handleItemQuantityChange(e) {
    let { value } = e.target;
    let cartCopy = [...props.cart];

    let id = `${props.item.item_id}-${props.item.order_type}`;

    let existingItem = cartCopy.find((cartItem) => cartItem.id === id);

    existingItem.cart_quantity = value;

    props.setCart(cartCopy);

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("sscart", stringCart);
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
                <MenuItem
                  value={"1"}
                  disabled={!(props.item.quantity_remaining >= 1)}
                >
                  1
                </MenuItem>
                <MenuItem
                  value={"2"}
                  disabled={!(props.item.quantity_remaining >= 2)}
                >
                  2
                </MenuItem>
                <MenuItem
                  value={"3"}
                  disabled={!(props.item.quantity_remaining >= 3)}
                >
                  3
                </MenuItem>
                <MenuItem
                  value={"4"}
                  disabled={!(props.item.quantity_remaining >= 4)}
                >
                  4
                </MenuItem>
                <MenuItem
                  value={"5"}
                  disabled={!(props.item.quantity_remaining >= 5)}
                >
                  5
                </MenuItem>
                <MenuItem
                  value={"6"}
                  disabled={!(props.item.quantity_remaining >= 6)}
                >
                  6
                </MenuItem>
                <MenuItem
                  value={"7"}
                  disabled={!(props.item.quantity_remaining >= 7)}
                >
                  7
                </MenuItem>
                <MenuItem
                  value={"8"}
                  disabled={!(props.item.quantity_remaining >= 8)}
                >
                  8
                </MenuItem>
                <MenuItem
                  value={"9"}
                  disabled={!(props.item.quantity_remaining >= 9)}
                >
                  9
                </MenuItem>
                <MenuItem
                  value={"10"}
                  disabled={!(props.item.quantity_remaining >= 10)}
                >
                  10
                </MenuItem>
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
