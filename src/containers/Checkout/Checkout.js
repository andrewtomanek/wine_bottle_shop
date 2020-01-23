import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import classes from "./Checkout.module.css";

const Checkout = props => {
  const [confirmed, setConfirmed] = useState(true);

  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace("/checkout/contact-data");
    setConfirmed(false);
  };

  let summary = <Redirect to="/" />;
  if (props.invent) {
    const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null;
    summary = (
      <div className={classes.Checkout}>
        {purchasedRedirect}
        {confirmed ? (
          <CheckoutSummary
            inventory={props.invent}
            listItems={props.items}
            checkoutCancelled={checkoutCancelledHandler}
            checkoutContinued={checkoutContinuedHandler}
          />
        ) : (
          <ContactData />
        )}
      </div>
    );
  }
  return summary;
};

const mapStateToProps = state => {
  return {
    invent: state.storeBuilder.inventory,
    items: state.storeBuilder.listItems,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
