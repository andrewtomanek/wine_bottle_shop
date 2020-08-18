import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import CartDrawer from "../../components/Navigation/CartToolbar/CartDrawer";

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
          inventory={props.cartContent}
          open={sideDrawerIsVisible}
          showCartDrawer={props.showCartDrawer}
          closed={sideDrawerClosedHandler}
          isAuth={props.isAuthenticated}
        />
        <Toolbar
          cartContent={props.cartContent}
          drawerToggleClicked={sideDrawerToggleHandler}
          isAuth={props.isAuthenticated}
          showCartDrawer={props.showCartDrawer}
        />
        {props.children}
      </main>
      {props.cartContent && props.isCartDrawerOpen && (
        <CartDrawer
          inventory={props.cartContent}
          listItems={props.listItems}
          price={props.price}
          isAuth={props.isAuthenticated}
        />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cartContent: state.storeBuilder.inventory,
    listItems: state.storeBuilder.listItems,
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
