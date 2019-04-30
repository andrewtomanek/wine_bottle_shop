import React from "react";

import OrderList from "./OrderList";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <div className={classes.CheckoutBox}>
        <OrderList ingredients={props.ingredients} />
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
