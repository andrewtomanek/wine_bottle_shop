import React from "react";
import { connect } from "react-redux";
import classes from "./CartDrawer.module.css";
import { withRouter } from "react-router";
import * as actions from "../../../store/actions/index";
import Button from "../../UI/Button/Button";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";

const CartDrawer = (props) => {
  const toggleCartDrawer = () => {
    props.showCartDrawer(false);
    props.history.push("/checkout");
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
    <div
      onMouseLeave={() => props.showCartDrawer(false)}
      className={classes.OrderSummary}
    >
      <Button btnType="Danger" clicked={() => props.showCartDrawer(false)}>
        X
      </Button>
      <h3 className={classes.OrderTitle}>Košík</h3>
      <div className={classes.OrderBox}>{inventorySummary}</div>
      <p className={classes.OrderPrice}>Cena: {props.price.toFixed(2)}</p>
      <p className={classes.OrderPrice}>Celkem {inventorySum} ks</p>
      {props.isAuth ? (
        <Button btnType="Danger" clicked={toggleCartDrawer}>
          Do košíku
        </Button>
      ) : (
        <NavigationItem link="/auth">Registrace</NavigationItem>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showCartDrawer: (value) => dispatch(actions.showCartDrawer(value)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(CartDrawer));
