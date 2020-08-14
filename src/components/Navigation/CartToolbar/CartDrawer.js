import React from "react";
import classes from "./CartDrawer.module.css";

const CartDrawer = (props) => {
  console.log(props.isCartVisible);
  let inventorySum = 0;
  for (let item of Object.values(props.inventory)) {
    inventorySum += item;
  }
  const inventorySummary = Object.keys(props.inventory).map((igKey) => {
    return (
      <div className={classes.OrderItem} key={igKey}>
        <span className={classes.OrderPrice}> {props.inventory[igKey]}</span>
      </div>
    );
  });

  return (
    <div className={classes.OrderSummary}>
      <h3 className={classes.OrderTitle}>Cart</h3>
      <div className={classes.OrderBox}>{inventorySummary}</div>
      <p className={classes.OrderPrice}>Celkem {inventorySum} ks</p>
    </div>
  );
};

export default CartDrawer;
