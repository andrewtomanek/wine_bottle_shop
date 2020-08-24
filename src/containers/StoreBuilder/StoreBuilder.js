import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import Store from "../../components/Store/Store";
import BuildControls from "../../components/Store/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Store/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { reduceCartState } from "../../shared/helpers";
import * as actions from "../../store/actions/index";
import axios from "../../axios-orders";
/* eslint-disable */

const StoreBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);
  useEffect(() => {
    initStoreBuilder();
  }, []);

  const initStoreBuilder = () => {
    props.onInitList();
    props.onInitInventory();
    props.onInitPrices();
  };

  const updatePurchaseState = (inventory) => {
    const sum = Object.keys(inventory)
      .map((igKey) => {
        return inventory[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const purchaseHandler = () => {
    if (props.isAuthenticated) {
      setPurchasing(true);
    } else {
      props.onSetAuthRedirectPath("/");
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
    ...props.invent,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  let store = props.error ? <p>Nelze nahrát zboží!</p> : <Spinner />;

  if (props.invent && props.listNames) {
    store = (
      <Fragment>
        <BuildControls
          inventory={reduceCartState(props.invent)}
          inventoryAdded={props.onInventoryAdded}
          inventoryRemoved={props.onInventoryRemoved}
          disabled={disabledInfo}
          purchasable={updatePurchaseState(props.invent)}
          ordered={purchaseHandler}
          isAuth={props.isAuthenticated}
          price={props.price}
        />
        <Store inventory={props.invent} listNames={props.listNames} />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {props.invent && props.listNames && props.price ? (
          <OrderSummary
            inventory={props.invent}
            listNames={props.listNames}
            price={props.price}
            purchaseCancelled={purchaseCancelHandler}
            purchaseContinued={purchaseContinueHandler}
          />
        ) : (
          <Spinner />
        )}
      </Modal>
      {store}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    invent: state.storeBuilder.inventory,
    listNames: state.storeBuilder.listItems,
    price: state.storeBuilder.totalPrice,
    error: state.storeBuilder.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInventoryAdded: (ingName) => dispatch(actions.addInventory(ingName)),
    onInventoryRemoved: (ingName) => dispatch(actions.removeInventory(ingName)),
    onInitInventory: () => dispatch(actions.initInventory()),
    onInitList: () => dispatch(actions.initList()),
    onInitPrices: () => dispatch(actions.initPrices()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path) =>
      dispatch(actions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(StoreBuilder, axios));
