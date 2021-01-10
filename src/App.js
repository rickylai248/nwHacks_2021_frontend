import { Router, Switch, Route } from "react-router-dom";

import history from "./history";
import HomePage from "./HomePage";
import SecondPage from "./SecondPage";

import "./App.css";

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/secondPage" component={SecondPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
