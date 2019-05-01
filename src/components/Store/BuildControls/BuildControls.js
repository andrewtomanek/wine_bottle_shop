import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Solaris", price: 100, type: "wine1" },
  { label: "Dornfelder", price: 50, type: "wine2" },
  { label: "Agni", price: 50, type: "wine3" },
  { label: "Muscaris", price: 70, type: "wine4" },
  { label: "Sauvignon ", price: 80, type: "wine5" },
  { label: "Tramín", price: 70, type: "wine6" },
  { label: "Hibernal", price: 60, type: "wine7" },
  { label: "Pálava", price: 100, type: "wine8" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <div className={classes.BuildBox}>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          price={ctrl.price}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
    </div>
    <div className={classes.ControlBox}>
      <p className={classes.PriceSum}>Celkem: {props.price.toFixed(2)}Kč</p>{" "}
      <p className={classes.PriceSum}>Množství: {props.ingredients}</p>
      <button
        className={classes.OrderButton}
        disabled={
          !(
            props.ingredients !== 0 &&
            props.ingredients % 6 === 0 &&
            props.purchasable
          )
        }
        onClick={props.ordered}
      >
        {props.isAuth ? "Objednat" : "Přihlásit"}
      </button>
      <p className={classes.PriceSum}>
        {props.ingredients !== 0 && props.ingredients % 6 === 0
          ? " Komplet "
          : " Chybí " + (6 - (props.ingredients % 6)) + "ks"}
      </p>
      <p className={classes.PriceSum}>
        {Number.isInteger(props.ingredients / 6)
          ? props.ingredients / 6
          : Math.floor(props.ingredients / 6)}
        Balení
      </p>
    </div>
  </div>
);

export default buildControls;
