import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  return (
    <Fragment>
      <main className={classes.Content}>
        <SideDrawer
          isAuth={props.isAuthenticated}
          open={sideDrawerIsVisible}
          closed={sideDrawerClosedHandler}
        />
        <Toolbar
          cartContent={props.cartContent}
          listItems={props.items}
          price={props.price}
          drawerToggleClicked={sideDrawerToggleHandler}
          isCartDrawerOpen={props.isCartDrawerOpen}
          isAuth={props.isAuthenticated}
          showCartDrawer={props.showCartDrawer}
        />
        {props.children}
      </main>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cartContent: state.storeBuilder.inventory,
    items: state.storeBuilder.listItems,
    price: state.storeBuilder.totalPrice,
    isCartDrawerOpen: state.storeBuilder.isCartDrawerOpen,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showCartDrawer: (value) => dispatch(actions.showCartDrawer(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
