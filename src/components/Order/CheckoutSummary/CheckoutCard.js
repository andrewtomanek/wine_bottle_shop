import React from "react";
import { connect } from "react-redux";
import classes from "./CheckoutCard.module.css";
import * as actions from "../../../store/actions/index";
import axios from "../../../axios-orders";

const CheckoutCard = ({ itemName, itemType, ...props }) => {
  return (
    <div className={`${classes[itemType]} ${classes.ShopItem}`}>
      <p className={classes.ItemLabel}>{itemName}</p>{" "}
      <div className={classes.BuildControl}>
        <button
          className={classes.Less}
          onClick={() => props.onInventoryRemoved(itemType)}
          disabled={props.disabled}
        >
          -
        </button>
        <button
          className={classes.More}
          onClick={() => props.onInventoryAdded(itemType)}
        >
          +
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    invent: state.storeBuilder.inventory,
    items: state.storeBuilder.listItems,
    price: state.storeBuilder.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInventoryAdded: ingName => dispatch(actions.addInventory(ingName)),
    onInventoryRemoved: ingName => dispatch(actions.removeInventory(ingName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CheckoutCard,
  axios
);
