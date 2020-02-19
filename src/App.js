import React from "react";
import Polls from "./Polls/Pages/Polls";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import MainNavigation from "./Shared/Navigation/MainNavigation";
import NewPoll from "./Polls/Pages/NewPoll";

function App() {
  console.log("app rendered");
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Polls />
        </Route>
        <Route path="/polls/new" exact>
          <NewPoll />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
