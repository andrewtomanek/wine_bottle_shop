import React from "react";

import classes from "./Order.module.css";

const Order = (props) => {
  const inventory = [];
  for (let inventoryName in props.inventory) {
    inventory.push({
      name: props.listItems[inventoryName],
      amount: props.inventory[inventoryName],
    });
  }

  const inventoryOutput = inventory.map((ig) => {
    return (
      <div className={classes.OrderItem} key={ig.name}>
        <p className={classes.OrderText}>{ig.name}</p>
        <p className={classes.OrderAmount}>{ig.amount}</p>
      </div>
    );
  });

  return (
    <div className={classes.OrderBox}>
      <div className={classes.OrderInventory}>{inventoryOutput}</div>
      <p className={classes.OrderPrice}>
        Cena {Number.parseFloat(props.price).toFixed(2)}
      </p>
    </div>
  );
};

export default Order;
