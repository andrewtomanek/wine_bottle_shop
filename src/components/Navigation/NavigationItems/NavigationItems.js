import React from "react";
import { reduceCartState } from "../../../shared/helpers";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import CartDrawer from "../CartToolbar/CartDrawer";

const NavigationItems = (props) => {
  const calculateCounter = (inventory) => {
    if (reduceCartState(inventory) === 0) return null;
    return (
      <span
        onClick={() => props.showCartDrawer(true)}
        onMouseEnter={() => props.showCartDrawer(true)}
        /* onMouseLeave={() => setIsCartVisible(false)} */
        className={classes.CartCounter}
      >
        {reduceCartState(inventory)}
      </span>
    );
  };

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Obchod
      </NavigationItem>
      {props.cartContent && props.isCartDrawerOpen && (
        <CartDrawer
          inventory={props.cartContent}
          listItems={props.listItems}
          price={props.price}
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
