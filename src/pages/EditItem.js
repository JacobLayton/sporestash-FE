import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  return (
    <div className="edit-item-container">
      <h1>Edit Existing Item</h1>
      {itemData.hasOwnProperty("item_id") ? (
        <EditItemForm itemData={itemData} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default EditItem;
