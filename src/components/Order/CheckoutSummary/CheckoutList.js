import React from "react";

import classes from "./CheckoutList.module.css";
import CheckoutItem from "./CheckoutItem";

const store = props => {
  let transformedItems = Object.keys(props.inventory)
    .map(igKey => {
      return [...Array(props.inventory[igKey])].map((_, i) => {
        return (
          <CheckoutItem
            key={igKey + i}
            type={igKey}
            itemName={props.listItems[igKey]}
          />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedItems.length === 0) {
    transformedItems = <p>Naplň přepravní box</p>;
  }
  return <div className={classes.CheckoutList}>{transformedItems}</div>;
};

export default store;
