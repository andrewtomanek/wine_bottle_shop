import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  let inventorySum = 0;
  for (let item of Object.values(props.inventory)) {
    inventorySum += item;
  }
  const inventorySummary = Object.keys(props.inventory).map((igKey) => {
    return (
      <div className={classes.OrderItem} key={igKey}>
        <span className={classes.OrderName}>{props.listNames[igKey]}</span>
        <span className={classes.OrderPrice}> {props.inventory[igKey]}</span>
      </div>
    );
  });

  return (
    <div className={classes.OrderSummary}>
      <h3 className={classes.OrderTitle}>Vaše objednávka</h3>
      <div className={classes.OrderBox}>{inventorySummary}</div>
      <p className={classes.OrderPrice}>Celkem {inventorySum} ks</p>
      <div className={classes.OrderControls}>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>
          Zrušit
        </Button>
        <p className={classes.OrderPrice}>Cena: {props.price.toFixed(2)}</p>
        <Button btnType="Success" clicked={props.purchaseContinued}>
          Pokračovat
        </Button>
      </div>
    </div>
  );
};

export default orderSummary;
