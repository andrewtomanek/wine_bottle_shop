import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";

import Store from "../../components/Store/Store";
import BuildControls from "../../components/Store/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Store/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import axios from "../../axios-orders";
/* eslint-disable */

const storeBuilder = props => {
  const [purchasing, setPurchasing] = useState(false);
  useEffect(() => {
    props.onInitList();
    props.onInitInventory();
  }, []);

  const updatePurchaseState = inventory => {
    const sum = Object.keys(inventory)
      .map(igKey => {
        return inventory[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const updateCartState = inventory => {
    const sum = Object.keys(inventory)
      .map(igKey => {
        return inventory[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum;
  };

  const purchaseHandler = () => {
    if (props.isAuthenticated) {
      setPurchasing(true);
    } else {
      props.onSetAuthRedirectPath("/checkout");
      props.history.push("/auth");
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    props.onInitPurchase();
    props.history.push("/checkout");
  };

  const disabledInfo = {
    ...props.invent
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  let orderSummary = null;
  let store = props.error ? <p>Nelze nahrát zboží!</p> : <Spinner />;

  if (props.invent) {
    store = (
      <Fragment>
        <BuildControls
          inventory={updateCartState(props.invent)}
          inventoryAdded={props.onInventoryAdded}
          inventoryRemoved={props.onInventoryRemoved}
          disabled={disabledInfo}
          purchasable={updatePurchaseState(props.invent)}
          ordered={purchaseHandler}
          isAuth={props.isAuthenticated}
          price={props.price}
        />
        <Store inventory={props.invent} listItems={props.items} />
      </Fragment>
    );
    orderSummary = (
      <OrderSummary
        inventory={props.invent}
        listItems={props.items}
        price={props.price}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    );
  }
  return (
    <Fragment>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {store}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    invent: state.storeBuilder.inventory,
    items: state.storeBuilder.listItems,
    price: state.storeBuilder.totalPrice,
    error: state.storeBuilder.error,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInventoryAdded: ingName => dispatch(actions.addInventory(ingName)),
    onInventoryRemoved: ingName => dispatch(actions.removeInventory(ingName)),
    onInitInventory: () => dispatch(actions.initInventory()),
    onInitList: () => dispatch(actions.initList()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(storeBuilder, axios));
