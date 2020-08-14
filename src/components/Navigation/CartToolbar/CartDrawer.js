import React from "react";
import { connect } from "react-redux";
import classes from "./CartDrawer.module.css";
import { withRouter } from "react-router";
import * as actions from "../../../store/actions/index";

const CartDrawer = (props) => {
  const toggleCartDrawer = () => {
    props.history.push("/checkout");
    props.showCartDrawer(false);
  };

  let inventorySum = 0;
  for (let item of Object.values(props.inventory)) {
    inventorySum += item;
  }
  const inventorySummary = Object.keys(props.inventory).map((igKey) => {
    return (
      <div className={classes.OrderItem} key={igKey}>
        <span className={classes.OrderName}>{props.listItems[igKey]}</span>
        <span className={classes.OrderPrice}> {props.inventory[igKey]}</span>
      </div>
    );
  });

  return (
    <div className={classes.OrderSummary}>
      <h3 className={classes.OrderTitle}>Košík</h3>
      <div className={classes.OrderBox}>{inventorySummary}</div>
      <p className={classes.OrderPrice}>Cena: {props.price.toFixed(2)}</p>
      <p className={classes.OrderPrice}>Celkem {inventorySum} ks</p>
      <button onClick={toggleCartDrawer}>Do košíku</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showCartDrawer: (value) => dispatch(actions.showCartDrawer(value)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(CartDrawer));
