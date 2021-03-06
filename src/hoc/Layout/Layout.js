import React, { useState } from "react";
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
    <>
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
      {props.cartContent && props.namesList && props.isCartDrawerOpen && (
        <CartDrawer
          inventory={props.cartContent}
          namesList={props.namesList}
          price={props.price}
          isAuth={props.isAuthenticated}
          showCartDrawer={props.showCartDrawer}
          emptyShopCart={props.emptyShopCart}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cartContent: state.storeBuilder.inventory,
    namesList: state.storeBuilder.listItems,
    price: state.storeBuilder.totalPrice,
    isCartDrawerOpen: state.storeBuilder.isCartDrawerOpen,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showCartDrawer: (value) => dispatch(actions.showCartDrawer(value)),
    emptyShopCart: () => dispatch(actions.emptyShopCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
