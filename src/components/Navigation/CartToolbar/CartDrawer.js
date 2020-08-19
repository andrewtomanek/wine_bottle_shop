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
      <div className={classes.Item} key={igKey}>
        <span className={classes.Name}>{props.listsItems[igKey]}</span>
        <span className={classes.Price}> {props.inventory[igKey]}</span>
      </div>
    );
  });

  return (
    <div
      onMouseLeave={() => props.showCartDrawer(false)}
      className={classes.CartWrapper}
    >
      <Button btnType="Danger" clicked={() => props.showCartDrawer(false)}>
        X
      </Button>
      <h3 className={classes.CartTitle}>Košík</h3>
      <div className={classes.Box}>{inventorySummary}</div>
      <p className={classes.Price}>Cena: {props.price.toFixed(2)}</p>
      <p className={classes.Price}>Celkem {inventorySum} ks</p>
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
