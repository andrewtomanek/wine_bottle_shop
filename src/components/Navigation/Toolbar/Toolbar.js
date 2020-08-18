import React from "react";
import { reduceCartState } from "../../../shared/helpers";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  const calculateCounter = (inventory) => {
    if (reduceCartState(inventory) === 0) return null;
    return (
      <span
        onMouseEnter={() => props.showCartDrawer(true)}
        onClick={() => props.showCartDrawer(true)}
        className={classes.CartCounter}
      >
        {reduceCartState(inventory)}
      </span>
    );
  };

  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      {props.cartContent && calculateCounter(props.cartContent)}
      <nav className={classes.DesktopOnly}>
        <NavigationItems isAuthenticated={props.isAuth} />
      </nav>
    </header>
  );
};

export default Toolbar;
