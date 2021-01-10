import { Router, Switch, Route } from "react-router-dom";

import history from "./history";
import HomePage from "./HomePage";


import "./App.css";

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
 
        </Switch>
      </Router>
    </>
  );
}

export default App;
