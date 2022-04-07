import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import AdminCard from "../components/AdminCard";

function Admin() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounting = true;
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/items`)
      .then((res) => {
        if (mounting) {
          setItems(res.data);
        }
      })
      .catch((err) => {
        console.log("Error in get request", err);
      });
    return () => (mounting = false);
  }, []);

  return (
    <div className="admin-container">
      <h1>Admin</h1>
      <button>Log Out</button>
      <Link to="/create-item">
        <button>Create New Item</button>
      </Link>
      <div className="admin-cards-container">
        {items.map((item) => {
          return <AdminCard item={item} key={item.item_id} />;
        })}
      </div>
    </div>
  );
}

export default Admin;
