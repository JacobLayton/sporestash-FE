import React from "react";
import "../styles/admin-card.css";
// import moment from 'moment';
import { Link } from "react-router-dom";
// import { titleToUrlHelper } from '../helpers/helperFunctions.js';

const AdminCard = (props) => {
  return (
    <div className="admin-item-container">
      <img src={props.item.image_url} />
      <div className="card-info">
        <h3>{props.item.item_name}</h3>
        <span className="item-price">${props.item.item_price}</span>
        <div className="card-buttons">
          <button>Delete Item</button>
          <button>Edit Item</button>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
