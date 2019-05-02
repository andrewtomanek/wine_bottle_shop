import React from "react";

import classes from "./Store.module.css";
import StoreItem from "./StoreItem/StoreItem";

const store = props => {
  let transformedItems = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return (
          <StoreItem
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
  return <div className={classes.Store}>{transformedItems}</div>;
};

export default store;
