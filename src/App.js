import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <Switch>
        <PrivateRoute exact path="/">
          <Dashboard />
        </PrivateRoute>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </AuthWrapper>
  );
}

export default App;
