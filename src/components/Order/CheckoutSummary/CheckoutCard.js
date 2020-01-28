import React from "react";
import classes from "./CheckoutCard.module.css";

export default function CheckoutCard({ itemName, itemType }) {
  return (
    <div className={classes[itemType]}>
      <p className={classes.ItemLabel}>{itemName}</p>{" "}
    </div>
  );
}
