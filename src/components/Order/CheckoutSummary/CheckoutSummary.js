import React from "react";

import CheckoutList from "./CheckoutList";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = props => {
  const inventorySum = Object.keys(props.inventory)
    .map(igKey => {
      return props.inventory[igKey];
    })
    .reduce((inventorySum, el) => {
      return inventorySum + el;
    }, 0);
  return (
    <div className={classes.CheckoutSummary}>
      <div className={classes.CheckoutBox}>
        <CheckoutList inventory={props.inventory} listItems={props.listItems} />
      </div>
      {(inventorySum !== 0 && inventorySum % 6 === 0) &&
      <div className={classes.CheckoutContent}>
        <h4 className={classes.CheckoutHeading}>
          Potvdit kompletní obsah objednávky
        </h4>
      </div>
}
      <div className={classes.CheckoutControls}>
        <Button btnType="Danger" clicked={props.checkoutCancelled}>
          Zrušit
        </Button>
        <Button
          btnType="Success"
          clicked={props.checkoutContinued}
          disabled={!(inventorySum !== 0 && inventorySum % 6 === 0)}
        >
          Pokračovat
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
