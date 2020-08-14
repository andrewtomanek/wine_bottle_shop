import React from "react";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems
        cartContent={props.cartContent}
        listItems={props.listItems}
        price={props.price}
        isAuthenticated={props.isAuth}
        showCartDrawer={props.showCartDrawer}
        isCartDrawerOpen={props.isCartDrawerOpen}
      />
    </nav>
  </header>
);

export default toolbar;
