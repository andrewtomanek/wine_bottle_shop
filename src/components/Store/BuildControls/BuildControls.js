import React from "react";
import { connect } from "react-redux";
import cartLogo from "../../../assets/images/icon/shopping-cart.png";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <div className={classes.BuildBox}>
        {props.namesList &&
          props.pricesList &&
          Object.keys(props.namesList).map((igKey) => (
            <BuildControl
              key={props.namesList[igKey]}
              label={props.namesList[igKey]}
              price={props.pricesList[igKey]}
              added={() => props.inventoryAdded(igKey)}
              removed={() => props.inventoryRemoved(igKey)}
              disabled={props.disabled[igKey]}
            />
          ))}
      </div>
      <div className={classes.ControlBox}>
        <p className={classes.PriceSum}>
          Celkem: <br />
          {props.price && props.price.toFixed(2)}Kč
        </p>
        <p className={classes.PriceSum}>
          Množství: <br />
          {props.inventory}
        </p>
        <button
          className={classes.OrderButton}
          disabled={
            !(
              props.inventory !== 0 &&
              props.inventory % 6 === 0 &&
              props.purchasable
            )
          }
          onClick={props.ordered}
        >
          Objednat
          <img className={classes.CartLogo} src={cartLogo} alt="cartLogo" />
        </button>
        <p className={classes.PriceSum}>
          {props.inventory !== 0 && props.inventory % 6 === 0
            ? " Komplet "
            : " Chybí " + (6 - (props.inventory % 6)) + "ks"}
        </p>
        <p className={classes.PriceSum}>
          {Number.isInteger(props.inventory / 6)
            ? props.inventory / 6
            : Math.floor(props.inventory / 6)}
          <br /> Balení
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    invent: state.storeBuilder.inventory,
    namesList: state.storeBuilder.listItems,
    pricesList: state.storeBuilder.pricesList,
    price: state.storeBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(BuildControls);
