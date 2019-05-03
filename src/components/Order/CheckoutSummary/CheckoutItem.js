import React from "react";
import PropTypes from "prop-types";

import classes from "./CheckoutItem.module.css";

const checkoutItem = props => {
  let inventory = null;
  switch (props.type) {
    case "shopItem1":
      inventory = (
        <div className={classes.shopItem1}>
          <p className={classes.ItemLabel}>{props.itemName}</p>{" "}
        </div>
      );
      break;
    case "shopItem2":
      inventory = (
        <div className={classes.shopItem2}>
          <p className={classes.ItemLabel}>{props.itemName}</p>{" "}
        </div>
      );
      break;
    case "shopItem3":
      inventory = (
        <div className={classes.shopItem3}>
          <p className={classes.ItemLabel}>{props.itemName}</p>{" "}
        </div>
      );
      break;
    case "shopItem4":
      inventory = (
        <div className={classes.shopItem4}>
          <p className={classes.ItemLabel}>{props.itemName}</p>{" "}
        </div>
      );
      break;
    case "shopItem5":
      inventory = (
        <div className={classes.shopItem5}>
          <p className={classes.ItemLabel}>{props.itemName}</p>{" "}
        </div>
      );
      break;
    case "shopItem6":
      inventory = (
        <div className={classes.shopItem6}>
          <p className={classes.ItemLabel}>{props.itemName}</p>{" "}
        </div>
      );
      break;
    case "shopItem7":
      inventory = (
        <div className={classes.shopItem7}>
          <p className={classes.ItemLabel}>{props.itemName}</p>{" "}
        </div>
      );
      break;
    case "shopItem8":
      inventory = (
        <div className={classes.shopItem8}>
          <p className={classes.ItemLabel}>{props.itemName}</p>{" "}
        </div>
      );
      break;
    default:
      inventory = null;
  }

  return inventory;
};

checkoutItem.propTypes = {
  type: PropTypes.string.isRequired
};

export default checkoutItem;
