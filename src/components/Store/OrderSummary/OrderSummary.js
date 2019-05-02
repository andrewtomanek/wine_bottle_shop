import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <div className={classes.OrderItem} key={igKey}>
        <span className={classes.OrderName}>{props.listItems[igKey]}</span>
        <span className={classes.OrderPrice}> {props.ingredients[igKey]}</span>
      </div>
    );
  });

  return (
    <div className={classes.OrderSummary}>
      <h3 className={classes.OrderTitle}>Vaše objednávka</h3>
      <div className={classes.OrderBox}>{ingredientSummary}</div>
      <div className={classes.OrderControls}>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>
          CANCEL
        </Button>
        <p className={classes.OrderPrice}>Cena: {props.price.toFixed(2)}</p>
        <Button btnType="Success" clicked={props.purchaseContinued}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default orderSummary;
