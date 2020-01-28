import React from "react";
import { NavLink } from "react-router-dom";
import storeLogo from "../../assets/images/icon/store-logo.png";
import classes from "./Logo.module.css";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
      <NavLink to={"/"} exact>
    <img src={storeLogo} alt="MyStore" />
      </NavLink>
  </div>
);

export default logo;
