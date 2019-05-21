import React from "react";
import cartLogo from "../../../assets/images/icon/shopping-cart.png";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Solaris", price: 100, type: "shopItem1" },
  { label: "Dornfelder", price: 50, type: "shopItem2" },
  { label: "Agni", price: 50, type: "shopItem3" },
  { label: "Muscaris", price: 70, type: "shopItem4" },
  { label: "Sauvignon ", price: 80, type: "shopItem5" },
  { label: "Tramín", price: 70, type: "shopItem6" },
  { label: "Hibernal", price: 60, type: "shopItem7" },
  { label: "Pálava", price: 100, type: "shopItem8" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <div className={classes.BuildBox}>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          price={ctrl.price}
          added={() => props.inventoryAdded(ctrl.type)}
          removed={() => props.inventoryRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
    </div>
    <div className={classes.ControlBox}>
      <p className={classes.PriceSum}>
        Celkem: <br />
        {props.price.toFixed(2)}Kč
      </p>{" "}
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
        {props.isAuth ? (
          <img className={classes.CartLogo} src={cartLogo} alt="cartLogo" />
        ) : (
          "Přihlásit"
        )}
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

export default buildControls;
