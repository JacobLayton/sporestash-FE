import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/admin-card.css";

const AdminCard = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/items/${props.item.item_id}`)
      .then((res) => {
        console.log("RES: ", res);
      })
      .catch((err) => {
        console.log("Error creating item: ", err);
      });
  };
  return (
    <div className="admin-item-container">
      <img src={props.item.image_url} />
      <div className="card-info">
        <h3>{props.item.item_name}</h3>
        <span>{props.item.item_category}</span>
        <span className="admin-item-price">${props.item.item_price}</span>
        <div className="admin-card-buttons">
          {/* <button onClick={handleDelete}>Delete Item</button> */}
          <Link to={`/edit-item/${props.item.item_id}`}>
            <button className="edit-item-button">Edit Item</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
