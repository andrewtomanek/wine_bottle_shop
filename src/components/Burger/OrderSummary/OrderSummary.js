import React, { Fragment } from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <p className={classes.OrderItem} key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </p>
    );
  });

  return (
    <div className={classes.OrderSummary}>
      <h3>Your Order</h3>
      <div className={classes.OrderBox}>{ingredientSummary}</div>
      <div className={classes.OrderControls}>
        <p className={classes.OrderItem}>
          Total Price: {props.price.toFixed(2)}
        </p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default orderSummary;
