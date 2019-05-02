import React from "react";

import CheckoutList from "./CheckoutList";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <div className={classes.CheckoutBox}>
        <CheckoutList
          ingredients={props.ingredients}
          listItems={props.listItems}
        />
      </div>
      <div className={classes.CheckoutControls}>
        <Button btnType="Danger" clicked={props.checkoutCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.checkoutContinued}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
