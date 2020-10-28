import React from "react";
import classes from "./StoreCard.module.css";

const StoreCard = ({ itemName, itemType }) => {
  return (
    <div className={`${classes[itemType]} ${classes.ShopItem}`}>
      <p className={classes.ItemLabel}>{itemName}</p>
    </div>
  );
};

export default StoreCard;
