import React from "react";

import classes from "./CheckoutList.module.css";
import CheckoutCard from "./CheckoutCard";

const store = props => {
  const inventorySum = Object.keys(props.inventory)
    .map(igKey => {
      return props.inventory[igKey];
    })
    .reduce((inventorySum, el) => {
      return inventorySum + el;
    }, 0);

  let transformedItems = Object.keys(props.inventory)
    .map(igKey => {
      return [...Array(props.inventory[igKey])].map((_, i) => {
        return (
          <CheckoutCard
            key={igKey + i}
            itemType={igKey}
            itemName={props.listItems[igKey]}
          />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedItems.length === 0) {
    transformedItems = <p className={classes.Empty}>Žádné položky</p>;
  }
  return (
    <>
      <div className={classes.CheckoutList}>{transformedItems}</div>
      <p className={classes.PriceSum}>
        {inventorySum !== 0 && inventorySum % 6 === 0
          ? " Komplet "
          : " Chybí " + (6 - (inventorySum % 6)) + "ks"}
      </p>
    </>
  );
};

export default store;
