import React from "react";

import storeLogo from "../../assets/images/icon/store-logo.png";
import classes from "./Logo.module.css";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={storeLogo} alt="MyStore" />
  </div>
);

export default logo;
