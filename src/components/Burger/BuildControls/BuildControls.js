import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Solaris", type: "wine1" },
  { label: "Dornfelder", type: "wine2" },
  { label: "Agni", type: "wine3" },
  { label: "Muscaris", type: "wine4" },
  { label: "Sauvignon ", type: "wine5" },
  { label: "Tramín", type: "wine6" },
  { label: "Hibernal", type: "wine7" },
  { label: "Pálava", type: "wine8" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <div className={classes.BuildBox}>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
    </div>
    <div className={classes.ControlBox}>
      <p className={classes.PriceSum}>
        Current Price: {props.price.toFixed(2)}
      </p>
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
        {props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
      </button>
      <p className={classes.PriceSum}>
        {console.log(props.ingredients)}
        Suma: {props.ingredients}
        {props.ingredients !== 0 && props.ingredients % 6 === 0
          ? " ORDER "
          : " add UP TO " + (6 - (props.ingredients % 6))}
      </p>
    </div>
  </div>
);

export default buildControls;
