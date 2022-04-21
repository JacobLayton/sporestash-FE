import React from "react";
import CreateItemForm from "../components/CreateItemForm";
import "../styles/create-item.css";

function CreateItem() {
  return (
    <div className="create-item-container">
      <h1>Create New Item</h1>
      <CreateItemForm />
    </div>
  );
}

export default CreateItem;
