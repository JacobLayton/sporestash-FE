import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/payment-success.css";

function PaymentSuccess(props) {
  useEffect(() => {
    if (props.cart && props.cart.length > 0) {
      props.setCart([]);
    }
  });
  return (
    <div className="success-container">
      <div className="success-content">
        <h2>Thank You!</h2>
        <h2>Your Order Has Been Received</h2>
        <p>You will receive an email confirmation for your purchase shortly</p>
        <Link to="/shop">
          <button>Back To Shop</button>
        </Link>
      </div>
    </div>
  );
}

export default PaymentSuccess;
