import React from "react";

import classes from "./OrderList.module.css";
import CheckoutItem from "./CheckoutItem";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <CheckoutItem key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding bottles!</p>;
  }
  return <div className={classes.Burger}>{transformedIngredients}</div>;
};

export default burger;
