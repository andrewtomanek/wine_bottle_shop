import React from "react";
import PropTypes from "prop-types";

import classes from "./StoreItem.module.css";

const storeItem = props => {
  let ingredient = null;
  switch (props.type) {
    case "wine1":
      ingredient = <div className={classes.wine1}>{props.itemName} </div>;
      break;
    case "wine2":
      ingredient = <div className={classes.wine2}>{props.itemName} </div>;
      break;
    case "wine3":
      ingredient = <div className={classes.wine3}>{props.itemName} </div>;
      break;
    case "wine4":
      ingredient = <div className={classes.wine4}>{props.itemName} </div>;
      break;
    case "wine5":
      ingredient = <div className={classes.wine5}>{props.itemName} </div>;
      break;
    case "wine6":
      ingredient = <div className={classes.wine6}>{props.itemName} </div>;
      break;
    case "wine7":
      ingredient = <div className={classes.wine7}>{props.itemName} </div>;
      break;
    case "wine8":
      ingredient = <div className={classes.wine8}>{props.itemName} </div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

storeItem.propTypes = {
  type: PropTypes.string.isRequired
};

export default storeItem;
