import React from "react";
import classes from "./CartDrawer.module.css";
import { withRouter } from "react-router";
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
      <div className={classes.CartItem} key={igKey}>
        <span className={classes.CartName}>{props.namesList[igKey]}</span>
        <span className={classes.CartText}> {props.inventory[igKey]}</span>
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
      <div className={classes.CartBox}>{inventorySummary}</div>
      <p className={classes.CartText}>Cena: {props.price.toFixed(2)}</p>
      <p className={classes.CartText}>Celkem {inventorySum} ks</p>
      <div className={classes.CartBox}>
        {props.isAuth ? (
          <Button btnType="Danger" clicked={toggleCartDrawer}>
            Do košíku
          </Button>
        ) : (
          <NavigationItem link="/auth">Registrace</NavigationItem>
        )}
        <Button btnType="Danger" clicked={() => props.emptyShopCart()}>
          Vyprázdnit košík
        </Button>
      </div>
    </div>
  );
};

export default withRouter(CartDrawer);
