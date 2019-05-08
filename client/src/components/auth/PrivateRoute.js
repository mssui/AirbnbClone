import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// isAuthenticated is passed as prop here
const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
};

const mapStateToProps = state => ({
  // isAuthenticated  value is get from here
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default withRouter(
  connect(
    mapStateToProps,
    null,
    null,
    { pure: false }
  )(PrivateRoute)
);
