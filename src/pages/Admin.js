import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LogoutButton from "../components/LogoutButton";
import AdminCard from "../components/AdminCard";
import "../styles/admin.css";

function Admin() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounting = true;
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/items`)
      .then((res) => {
        if (mounting) {
          const sortedItems = res.data.sort((a, b) =>
            a.item_category > b.item_category
              ? 1
              : a.item_category === b.item_category
              ? a.created_date > b.created_date
                ? 1
                : -1
              : -1
          );
          setItems(sortedItems);
        }
      })
      .catch((err) => {
        console.log("Error in get request", err);
      });
    return () => (mounting = false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <div className="admin-container">
      <h1>Admin Section</h1>
      <h4>Logged in as: {user.name}</h4>
      <div className="admin-buttons">
        <LogoutButton />
        <Link to="/create-item">
          <button className="create-item-button">Create New Item</button>
        </Link>
        <Link to="/admin-orders">
          <button className="orders-button">View Orders</button>
        </Link>
      </div>
      <div className="admin-cards-container">
        {items.map((item) => {
          return <AdminCard item={item} key={item.item_id} />;
        })}
      </div>
    </div>
  ) : (
    <div>Administrators Only</div>
  );
}

export default withAuthenticationRequired(Admin, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
