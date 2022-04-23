import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import axios from "axios";
import EditItemForm from "../components/EditItemForm";
import "../styles/edit-item.css";

function EditItem(props) {
  const [itemData, setItemData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let mounting = true;
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/items/${id}`)
      .then((res) => {
        if (mounting) {
          setItemData(res.data[0]);
        }
      })
      .catch((err) => {
        console.log("Error in get request", err);
      });
    return () => (mounting = false);
  }, [id]);

  const handleDelete = (event) => {
    event.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/items/${itemData.item_id}`)
      .then((res) => {
        console.log("RES: ", res);
      })
      .catch((err) => {
        console.log("Error creating item: ", err);
      });
  };
  return (
    <div className="edit-item-container">
      <h1>Edit Existing Item</h1>
      {itemData.hasOwnProperty("item_id") ? (
        <EditItemForm itemData={itemData} handleDelete={handleDelete} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default withAuthenticationRequired(EditItem, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
