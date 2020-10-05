import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUserLoggedIn = isAuthenticated && user;

  return (
    <Route
      {...rest}
      render={() => (isUserLoggedIn ? children : <Redirect to="/login" />)}
    />
  );
};
export default PrivateRoute;
