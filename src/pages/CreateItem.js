import React from "react";
import { Link } from "react-router-dom";
import CreateItemForm from "../components/CreateItemForm";

function CreateItem() {
  return (
    <div className="create-item-container">
      <h1>CreateItem</h1>
      <CreateItemForm />
      <Link to="/admin">
        <button id="form-cancel-button">Cancel</button>
      </Link>
    </div>
  );
}

export default CreateItem;
