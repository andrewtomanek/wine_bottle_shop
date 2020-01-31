import React from "react";
import classes from "./StoreCard.module.css";

export default function StoreCard({ itemName, itemType }) {
  return (
    <div className={`${classes[itemType]} ${classes.ShopItem}`}>
      <p className={classes.ItemLabel}>{itemName}</p>{" "}
    </div>
  );
}


