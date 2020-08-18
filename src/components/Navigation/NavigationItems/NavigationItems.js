import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Obchod
      </NavigationItem>
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
