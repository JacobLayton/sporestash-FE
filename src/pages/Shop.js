import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ItemCard from "../components/ItemCard";
import sporeStashLogo from "../img/Final_deer_flat.png";

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounting = true;
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/items`)
      .then((res) => {
        // const postsSortedByDate = res.data.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
        // const postsMostRecentNine = postsSortedByDate.slice(0, 12);
        if (mounting) {
          console.log("RES: ", res);
          setItems(res.data);
          //   handleScrollPosition();
        }
      })
      .catch((err) => {
        console.log("Error in get request", err);
      });
    return () => (mounting = false);
  }, []);
  console.log("items: ", items);
  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <div className="shop-cards">
        {items.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Shop;
