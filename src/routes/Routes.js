import React, { useEffect } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import StoreBuilder from "../containers/StoreBuilder/StoreBuilder";
import Logout from "../containers/Auth/Logout/Logout";
import * as actions from "../store/actions/index";

const Checkout = React.lazy(() => {
  return import("../containers/Checkout/Checkout");
});

const Orders = React.lazy(() => {
  return import("../containers/Orders/Orders");
});

const Auth = React.lazy(() => {
  return import("../containers/Auth/Auth");
});

const Routes = (props) => {
  useEffect(() => {
    props.onTryAutoSignup();
  }, [props]);

  return props.isAuthenticated ? (
    <Switch>
      <Route path="/checkout" render={(props) => <Checkout {...props} />} />
      <Route path="/orders" render={(props) => <Orders {...props} />} />
      <Route path="/logout" component={Logout} />
      <Route path="/auth" render={(props) => <Auth {...props} />} />
      <Route path="/" exact component={StoreBuilder} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/auth" render={(props) => <Auth {...props} />} />
      <Route path="/" exact component={StoreBuilder} />
      <Redirect to="/" />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
