import React, { Fragment } from "react";
import { reduceCartState } from "../../../shared/helpers";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  const calculateCounter = (inventory) => {
    if (reduceCartState(inventory) === 0) return null;
    return (
      <span
        onMouseEnter={() => props.showCartDrawer(true)}
        className={classes.CartCounter}
      >
        {reduceCartState(inventory)}
      </span>
    );
  };

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav className={classes.Navigation}>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Fragment>
  );
};

export default sideDrawer;
