import React from "react";
import classes from "./StoreBoard.module.css";
import StoreCard from "./StoreCard";

const StoreBoard = (props) => {
  console.log(props.inventory);
  console.log(props.listNames);
  let transformedItems = Object.keys(props.inventory)
    .map((igKey) => {
      return [...Array(props.inventory[igKey])].map((_, i) => {
        return (
          <StoreCard
            key={igKey + i}
            itemType={igKey}
            itemName={props.listNames[igKey]}
          />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log(transformedItems);

  if (transformedItems.length === 0) {
    transformedItems = <p className={classes.Empty}>Žádné položky</p>;
  }
  return <div className={classes.Store}>{transformedItems}</div>;
};

export default StoreBoard;
