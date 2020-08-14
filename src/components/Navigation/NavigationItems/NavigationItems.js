import React, { useState } from "react";
import { reduceCartState } from "../../../shared/helpers";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import CartDrawer from "../CartToolbar/CartDrawer";

const NavigationItems = (props) => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const calculateCounter = (inventory) => {
    if (reduceCartState(inventory) === 0) return null;
    return (
      <p
        onClick={() => setIsCartVisible(!isCartVisible)}
        className={classes.CartCounter}
      >
        {reduceCartState(inventory)}
      </p>
    );
  };

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Obchod
      </NavigationItem>
      {props.cartContent && isCartVisible && (
        <CartDrawer
          inventory={props.cartContent}
          isCartVisible={isCartVisible}
        />
      )}
      {props.cartContent && calculateCounter(props.cartContent)}
      {props.isAuthenticated ? (
        <NavigationItem link="/orders">Objednávky</NavigationItem>
      ) : null}
      {!props.isAuthenticated ? (
        <NavigationItem link="/auth">Registrace</NavigationItem>
      ) : (
        <NavigationItem link="/logout">Odhlásit</NavigationItem>
      )}
    </ul>
  );
};

export default NavigationItems;
