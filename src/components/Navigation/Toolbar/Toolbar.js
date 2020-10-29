import React from "react";
import { reduceCartState } from "../../../shared/helpers";
import { withRouter } from "react-router";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import cartLogo from "../../../assets/images/icon/shopping-cart.png";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  console.log(props);
  const calculateCounter = (inventory) => {
    if (reduceCartState(inventory) === 0) return null;
    return (
      <div
        className={classes.CartWrap}
        onMouseEnter={() => props.showCartDrawer(true)}
        onClick={() => props.showCartDrawer(true)}
      >
        <img className={classes.CartIcom} src={cartLogo} alt="cartLogo" />
        <span className={classes.CartCounter}>
          {reduceCartState(inventory)}
        </span>
      </div>
    );
  };

  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      {props.location.pathname === "/" &&
        props.cartContent &&
        calculateCounter(props.cartContent)}
      <nav className={classes.DesktopOnly}>
        <NavigationItems isAuthenticated={props.isAuth} />
      </nav>
    </header>
  );
};

export default withRouter(Toolbar);
