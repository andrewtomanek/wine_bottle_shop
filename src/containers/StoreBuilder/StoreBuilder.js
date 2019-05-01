import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";

import Store from "../../components/Store/Store";
import BuildControls from "../../components/Store/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Store/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
/* eslint-disable */

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import axios from "../../axios-orders";

const storeBuilder = props => {
  const [purchasing, setPurchasing] = useState(false);
  console.log(props);
  useEffect(() => {
    props.onInitIngredients();
  }, []);

  useEffect(() => {
    props.onInitList();
  }, []);

  const updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const updateCartState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
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
    ...props.ings
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  let orderSummary = null;
  let store = props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

  if (props.ings) {
    store = (
      <Fragment>
        <Store ingredients={props.ings} listItems={props.items} />
        <BuildControls
          ingredients={updateCartState(props.ings)}
          ingredientAdded={props.onIngredientAdded}
          ingredientRemoved={props.onIngredientRemoved}
          disabled={disabledInfo}
          purchasable={updatePurchaseState(props.ings)}
          ordered={purchaseHandler}
          isAuth={props.isAuthenticated}
          price={props.price}
        />
      </Fragment>
    );
    orderSummary = (
      <OrderSummary
        ingredients={props.ings}
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
    ings: state.storeBuilder.ingredients,
    items: state.storeBuilder.listItems,
    price: state.storeBuilder.totalPrice,
    error: state.storeBuilder.error,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: ingName => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitList: () => dispatch(actions.initList()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(storeBuilder, axios));