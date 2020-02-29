import React, { useState, useCallback } from "react";
import Polls from "./Polls/Pages/Polls";
import MainNavigation from "./Shared/Navigation/MainNavigation";
import NewPoll from "./Polls/Pages/NewPoll";
import SignUp from "./Auth/Pages/SignUp";
import SignIn from "./Auth/Pages/SignIn";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { AuthContext } from "./Shared/Context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <>
        <Route path="/" exact>
          <Polls />
        </Route>
        <Route path="/polls/new" exact>
          <NewPoll />
        </Route>
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" exact>
          <Polls />
        </Route>
        <Route path="/auth/signup" exact>
          <SignUp />
        </Route>
        <Route path="/auth/signin" exact>
          <SignIn />
        </Route>
      </>
    );
  }

  console.log("app rendered");
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <Switch>
          {routes}
          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
