import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ItemCard from "../components/ItemCard";
import sporeStashLogo from "../img/Final_deer_flat.png";

function Shop(props) {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [spores, setSpores] = useState([]);
  const [more, setMore] = useState([]);

  useEffect(() => {
    let mounting = true;
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/items`)
      .then((res) => {
        const spores = [];
        const more = [];
        res.data.forEach((item) => {
          if (item.item_category === "spore") {
            spores.push(item);
          } else {
            more.push(item);
          }
        });

        if (mounting) {
          setDisplayedItems(spores);
          setSpores(spores);
          setMore(more);
          //   handleScrollPosition();
        }
      })
      .catch((err) => {
        console.log("Error in get request", err);
      });
    return () => (mounting = false);
  }, []);

  function handleSporeClick(e) {
    setDisplayedItems(spores);
  }

  function handleMoreClick(e) {
    setDisplayedItems(more);
  }

  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <div className="shop-buttons">
        <button onClick={handleSporeClick}>Spores</button>
        <button onClick={handleMoreClick}>More</button>
      </div>
      <div className="shop-cards">
        {displayedItems.map((item) => {
          return (
            <ItemCard
              item={item}
              key={item.item_id}
              cart={props.cart}
              setCart={props.setCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
