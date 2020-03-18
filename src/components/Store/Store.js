import React from "react";
import classes from "./Store.module.css";
import StoreCard from "./StoreCard";

const store = props => {
  let transformedItems = Object.keys(props.inventory)
    .map(igKey => {
      return [...Array(props.inventory[igKey])].map((_, i) => {
        return (
          <StoreCard
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
  return <div className={classes.Store}>{transformedItems}</div>;
};

export default store;
