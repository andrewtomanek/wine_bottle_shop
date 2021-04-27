import React from "react";
import classes from "./StoreCard.module.css";

const StoreCard = ({ itemName, itemType }) => {
  return (
    <div className={classes.ShopItem}>
      <img
        className={classes.ItemPicture}
        src={`/img/cont/${itemType}.png`}
        alt={itemType}
      />
      <p className={classes.ItemLabel}>{itemName}</p>
    </div>
  );
};

export default StoreCard;
