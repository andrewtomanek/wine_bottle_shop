import React from "react";
import { connect } from "react-redux";
import classes from "./CheckoutCard.module.css";
import * as actions from "../../../store/actions/index";
import axios from "../../../axios-orders";

const CheckoutCard = ({ itemName, itemType, itemPrice, ...props }) => {
  return (
    <div className={classes.ShopItem}>
      <img
        className={classes.ItemPicture}
        src={`/img/cont/${itemType}.png`}
        alt={itemType}
      />
      <p className={classes.ItemLabel}>{itemName}</p>
      <p className={classes.ItemPrice}>{itemPrice}</p>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onInventoryAdded: (ingName) => dispatch(actions.addInventory(ingName)),
    onInventoryRemoved: (ingName) => dispatch(actions.removeInventory(ingName)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutCard, axios);
