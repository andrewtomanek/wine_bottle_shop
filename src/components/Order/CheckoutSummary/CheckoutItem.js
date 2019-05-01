import React from "react";
import PropTypes from "prop-types";

import classes from "./CheckoutItem.module.css";

const storeItem = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom} />;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
      break;
    case "wine1":
      ingredient = <div className={classes.wine1} />;
      break;
    case "wine2":
      ingredient = <div className={classes.wine2} />;
      break;
    case "wine3":
      ingredient = <div className={classes.wine3} />;
      break;
    case "wine4":
      ingredient = <div className={classes.wine4} />;
      break;
    case "wine5":
      ingredient = <div className={classes.wine5} />;
      break;
    case "wine6":
      ingredient = <div className={classes.wine6} />;
      break;
    case "wine7":
      ingredient = <div className={classes.wine7} />;
      break;
    case "wine8":
      ingredient = <div className={classes.wine8} />;
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
