import { Router, Switch, Route } from "react-router-dom";

import history from "./history";
import HomePage from "./HomePage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import TodoPage from "./TodoPage";
import "./App.css";

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/secondPage" component={SecondPage} />
          <Route path="/thirdPage" component={ThirdPage} />
          <Route path="/todoPage" component={TodoPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
