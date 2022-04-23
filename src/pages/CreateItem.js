import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
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

export default withAuthenticationRequired(CreateItem, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
